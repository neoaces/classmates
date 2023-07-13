FROM arm64v8/ubuntu

# APT Update
RUN apt-get update
# RUN apt-get install libcpprest-dev --no-install-recommends -y
# RUN add-apt-repository ppa:pistache+team/unstable
RUN apt-get install -y build-essential cmake libcpprest-dev --no-install-recommends

#
# BUILDING
#
WORKDIR /build
COPY backend .
RUN cmake .
RUN cmake --build .
CMD ["./cmserver"]

#
# WORKDIR
#
# WORKDIR /app
# COPY /build/cmserver .

