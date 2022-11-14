load("@aspect_rules_ts//ts:defs.bzl", "ts_project")
load("@aspect_rules_webpack//webpack:defs.bzl", "webpack_devserver")

exports_files(["tsconfig.json"])

ts_project(
    name = "app",
    srcs = ["app.ts"],
    tsconfig = ":tsconfig.json",
    deps = [
        "//proto/logger:logger_ts_proto",
    ],
)

webpack_devserver(
    name = "devserver",
    chdir = package_name(),
    data = [
        "app.js",
        "//:node_modules/html-webpack-plugin",
    ],
    webpack_config = ":webpack.config.js",
)
