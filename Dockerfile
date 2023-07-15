FROM golang:latest AS build-stage

# APT Update
# RUN apt-get update
# RUN apt-get install -y build-essential cmake libcpprest-dev --no-install-recommends

#
# BUILDING
#
WORKDIR /build
COPY backend .
RUN CGO_ENABLED=0 GOOS=linux go build -o /cmserver

# RUNNING
FROM gcr.io/distroless/base-debian11 AS build-release-stage
WORKDIR /app
COPY --from=build-stage /cmserver /cmserver
EXPOSE 8080
USER nonroot:nonroot
ENTRYPOINT ["/cmserver"]