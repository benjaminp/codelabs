# load("@io_bazel_rules_go//proto:def.bzl", "go_proto_library")
# load("@io_grpc_grpc_java//:java_grpc_library.bzl", "java_grpc_library")
# load("@npm_bazel_typescript//:index.bzl", "ts_proto_library")
# load("@rules_java//java:defs.bzl", "java_proto_library")
# load("@rules_proto//proto:defs.bzl", "proto_library")

load("//proto:ts_proto_library.bzl", "ts_proto_library")

package(default_visibility = ["//visibility:public"])

proto_library(
    name = "logger_proto",
    srcs = ["logger.proto"],
)

ts_proto_library(
    name = "logger_ts_proto",
    proto = ":logger_proto",
)
