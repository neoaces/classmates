FROM golang:latest AS build-stage

#
# BUILDING
#
WORKDIR /build
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o /cmserver

# RUNNING
FROM gcr.io/distroless/base-debian11 AS build-release-stage
ENV PSQL_URL postgresql://anzle_chavez:KfqF39MA-IESbsw47YM3Pg@kind-harrier-4527.g8z.cockroachlabs.cloud:26257/clients?sslmode=verify-full
WORKDIR /app
COPY --from=build-stage /cmserver /cmserver
EXPOSE 8080
USER nonroot:nonroot
ENTRYPOINT ["/cmserver"]