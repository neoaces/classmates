#pragma once
#include "stdinc.h"
using namespace http::experimental::listener;

class TCPServer {
   public:
    TCPServer();
    TCPServer(utility::string_t url);
    virtual ~TCPServer();

    pplx::task<void> open() { return m_listener.open(); };
    pplx::task<void> close() { return m_listener.close(); };

   private:
    void handle_get(http_request message);
    void handle_put(http_request message);
    void handle_post(http_request message);
    void handle_delete(http_request message);
    void handle_error(pplx::task<void>& t);
    http_listener m_listener;
}; 