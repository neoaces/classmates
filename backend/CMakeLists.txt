cmake_minimum_required(VERSION 3.5)
project("cmserver")
find_package(cpprestsdk REQUIRED)

add_executable(cmserver
server.cpp    
TCPServer.cpp
TCPServer.hpp
)
target_compile_features(cmserver PRIVATE cxx_std_20)
target_link_libraries(cmserver PRIVATE cpprestsdk::cpprest)


