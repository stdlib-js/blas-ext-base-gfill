<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# gfill

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Fill a strided array with a specified scalar constant.



<section class="usage">

## Usage

```javascript
import gfill from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gfill@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/blas-ext-base-gfill/tags). For example,

```javascript
import gfill from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gfill@v0.0.10-deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { ndarray } from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gfill@deno/mod.js';
```

#### gfill( N, alpha, x, stride )

Fills a strided array `x` with a specified scalar constant `alpha`.

```javascript
var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];

gfill( x.length, 5.0, x, 1 );
// x => [ 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **alpha**: scalar constant.
-   **x**: input array.
-   **stride**: index increment.

The `N` and `stride` parameters determine which elements in `x` are accessed at runtime. For example, to fill every other element

```javascript
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@deno/mod.js';

var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
var N = floor( x.length / 2 );

gfill( N, 5.0, x, 2 );
// x => [ 5.0, 1.0, 5.0, -5.0, 5.0, 0.0, 5.0, -3.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@deno/mod.js';

// Initial array...
var x0 = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

// Create an offset view...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var N = floor( x0.length/2 );

// Fill every other element...
gfill( N, 5.0, x1, 2 );
// x0 => <Float64Array>[ 1.0, 5.0, 3.0, 5.0, 5.0, 5.0 ]
```

#### gfill.ndarray( N, alpha, x, stride, offset )

Fills a strided array `x` with a specified scalar constant `alpha` using alternative indexing semantics.

```javascript
var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];

gfill.ndarray( x.length, 5.0, x, 1, 0 );
// x => [ 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0 ]
```

The function has the following additional parameters:

-   **offset**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to access only the last three elements of `x`

```javascript
var x = [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ];

gfill.ndarray( 3, 5.0, x, 1, x.length-3 );
// x => [ 1.0, -2.0, 3.0, 5.0, 5.0, 5.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `x` unchanged.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/complex64`][@stdlib/array/complex64]).
-   Depending on the environment, the typed versions ([`dfill`][@stdlib/blas/ext/base/dfill], [`sfill`][@stdlib/blas/ext/base/sfill], etc.) are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@deno/mod.js';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';
import gfill from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gfill@deno/mod.js';

var x = new Float64Array( 10 );
var i;
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = discreteUniform( -100, 100 );
}
console.log( x );

gfill( x.length, 5.0, x, 1 );
console.log( x );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/ext/base/dfill`][@stdlib/blas/ext/base/dfill]</span><span class="delimiter">: </span><span class="description">fill a double-precision floating-point strided array with a specified scalar constant.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/sfill`][@stdlib/blas/ext/base/sfill]</span><span class="delimiter">: </span><span class="description">fill a single-precision floating-point strided array with a specified scalar constant.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-gfill.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-gfill

[test-image]: https://github.com/stdlib-js/blas-ext-base-gfill/actions/workflows/test.yml/badge.svg?branch=v0.0.10
[test-url]: https://github.com/stdlib-js/blas-ext-base-gfill/actions/workflows/test.yml?query=branch:v0.0.10

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-gfill/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-gfill?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-gfill.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-gfill/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-gfill/tree/deno
[umd-url]: https://github.com/stdlib-js/blas-ext-base-gfill/tree/umd
[esm-url]: https://github.com/stdlib-js/blas-ext-base-gfill/tree/esm
[branches-url]: https://github.com/stdlib-js/blas-ext-base-gfill/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-gfill/main/LICENSE

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64/tree/deno

[@stdlib/blas/ext/base/dfill]: https://github.com/stdlib-js/blas-ext-base-dfill/tree/deno

[@stdlib/blas/ext/base/sfill]: https://github.com/stdlib-js/blas-ext-base-sfill/tree/deno

</section>

<!-- /.links -->
