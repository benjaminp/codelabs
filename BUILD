load("@npm//:defs.bzl", "npm_link_all_packages")

package(default_visibility = ["//visibility:public"])

npm_link_all_packages(name = "node_modules")

alias(
    name = "tsconfig.json",
    actual = "//typescript:tsconfig.json",
)
