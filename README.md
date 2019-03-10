# ClickHouse.jl

*Julia client for ClickHouse.*

| **Documentation**                       | **Build Status**              |
|:---------------------------------------:|:-----------------------------:|
| [![][docs-stable-img]][docs-stable-url] [![][docs-dev-img]][docs-dev-url]| [![][travis-img]][travis-url] [![][codecov-img]][codecov-url] |

## Introduction

TODO. Julia client for the [ClickHouse](https://clickhouse.yandex/) column-oriented database.

```julia
using ClickHouse
client = ClickHouseClient("http://localhost:8123")
query(client, "SELECT col_a, col_b FROM table LIMIT 10000")
```

## Installation

The package can be installed with the Julia package manager.
From the Julia REPL, type `]` to enter the Pkg REPL mode and run:

```
pkg> registry add https://github.com/maxmouchet/JuliaRegistry.git
pkg> add ClickHouse
```

## Documentation

- [**STABLE**][docs-stable-url] &mdash; **documentation of the most recently tagged version.**
- [**DEVEL**][docs-dev-url] &mdash; *documentation of the in-development version.*

## Project Status

The package is tested against Julia 1.0 and the nightly builds of the Julia `master` branch on Linux.

## Questions and Contributions

Contributions are very welcome, as are feature requests and suggestions. Please open an [issue][issues-url] if you encounter any problems.

[docs-stable-img]: https://img.shields.io/badge/docs-stable-blue.svg?style=flat
[docs-stable-url]: https://maxmouchet.github.io/ClickHouse.jl/stable

[docs-dev-img]: https://img.shields.io/badge/docs-dev-blue.svg?style=flat
[docs-dev-url]: https://maxmouchet.github.io/ClickHouse.jl/dev

[travis-img]: https://travis-ci.org/maxmouchet/ClickHouse.jl.svg?branch=master
[travis-url]: https://travis-ci.org/maxmouchet/ClickHouse.jl

[codecov-img]: https://codecov.io/github/maxmouchet/ClickHouse.jl/coverage.svg?branch=master
[codecov-url]: https://codecov.io/github/maxmouchet/ClickHouse.jl?branch=master

[issues-url]: https://github.com/maxmouchet/ClickHouse.jl/issues
