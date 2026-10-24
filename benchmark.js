const { performance } = require('perf_hooks');

const ITERATIONS = 1000000;

// Baseline
const startBaseline = performance.now();
for (let i = 0; i < ITERATIONS; i++) {
  const arr = [...Array(5)];
  // simulate map
  for (let j = 0; j < arr.length; j++) {
    const val = arr[j];
  }
}
const endBaseline = performance.now();

// Optimized
const startOptimized = performance.now();
const STATIC_ARRAY = [...Array(5)];
for (let i = 0; i < ITERATIONS; i++) {
  const arr = STATIC_ARRAY;
  // simulate map
  for (let j = 0; j < arr.length; j++) {
    const val = arr[j];
  }
}
const endOptimized = performance.now();

console.log(`Baseline: ${endBaseline - startBaseline}ms`);
console.log(`Optimized: ${endOptimized - startOptimized}ms`);
console.log(`Improvement: ${((endBaseline - startBaseline) - (endOptimized - startOptimized)) / (endBaseline - startBaseline) * 100}%`);
