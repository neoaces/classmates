FROM arm64v8/ubuntu

# APT Update
RUN apt-get update
RUN apt-get install -y build-essential cmake --no-install-recommends

#
# BUILDING
#
WORKDIR /build
COPY backend .
RUN cmake .
RUN cmake --build .

#
# WORKDIR
#
WORKDIR /app
COPY /build/cmserver .
CMD ["./cmserver"]

