#include <iostream>
#include "TCPServer.hpp"
TCPServer::TCPServer(){

};

TCPServer::TCPServer(utility::string_t url) {

};

TCPServer::~TCPServer() {

};

    void handle_get(http_request message) {};
    void handle_put(http_request message);
    void handle_post(http_request message);
    void handle_delete(http_request message);
    void handle_error(pplx::task<void>& t);
