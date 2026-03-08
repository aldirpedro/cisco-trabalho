import http.server
import socketserver
import json
import os
from urllib.parse import urlparse, parse_qs

PORT = 3001
inventory_data = []

class APIHandler(http.server.BaseHTTPRequestHandler):
    def send_cors_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
    
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_GET(self):
        parsed_path = urlparse(self.path)
        path = parsed_path.path

        if path == '/health':
            self.send_response(200)
            self.send_cors_headers()
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            response = {'status': 'OK', 'mensagem': 'Servidor está funcionando', 'timestamp': '2026-03-08T00:00:00.000Z'}
            self.wfile.write(json.dumps(response).encode())
        elif path == '/inventory':
            self.send_response(200)
            self.send_cors_headers()
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(inventory_data).encode())
        else:
            self.send_response(404)
            self.end_headers()

    def do_POST(self):
        global inventory_data
        if self.path == '/inventory':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            try:
                data = json.loads(post_data.decode())
                data['id'] = len(inventory_data) + 1
                data['criado_em'] = '2026-03-08T00:00:00.000Z'
                inventory_data.append(data)
                self.send_response(201)
                self.send_cors_headers()
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps(data).encode())
            except Exception as e:
                print(f"Erro no POST: {e}")
                self.send_response(400)
                self.end_headers()
        else:
            self.send_response(404)
            self.end_headers()

    def do_PUT(self):
        if self.path.startswith('/inventory/'):
            try:
                item_id = int(self.path.split('/')[-1])
                content_length = int(self.headers['Content-Length'])
                put_data = self.rfile.read(content_length)
                data = json.loads(put_data.decode())

                for i, item in enumerate(inventory_data):
                    if item['id'] == item_id:
                        inventory_data[i].update(data)
                        self.send_response(200)
                        self.send_cors_headers()
                        self.send_header('Content-type', 'application/json')
                        self.end_headers()
                        self.wfile.write(json.dumps({'mensagem': 'Equipamento atualizado com sucesso'}).encode())
                        return

                self.send_response(404)
                self.end_headers()
            except Exception as e:
                print(f"Erro no PUT: {e}")
                self.send_response(400)
                self.end_headers()
        else:
            self.send_response(404)
            self.end_headers()

    def do_DELETE(self):
        global inventory_data
        if self.path.startswith('/inventory/'):
            try:
                item_id = int(self.path.split('/')[-1])
                inventory_data = [item for item in inventory_data if item['id'] != item_id]
                self.send_response(200)
                self.send_cors_headers()
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'mensagem': 'Equipamento removido com sucesso'}).encode())
            except Exception as e:
                print(f"Erro no DELETE: {e}")
                self.send_response(400)
                self.end_headers()
        else:
            self.send_response(404)
            self.end_headers()

if __name__ == '__main__':
    with socketserver.TCPServer(('', PORT), APIHandler) as httpd:
        print(f'Servidor mock API rodando na porta {PORT}')
        httpd.serve_forever()