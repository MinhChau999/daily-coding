<template>
  <NavbarDaily :challenges="challenges"/>
  <router-view :challenges="challenges"></router-view>
</template>

<script>
import NavbarDaily from './components/NavbarDaily'

export default {
  name: 'App',
  
  components: {
      NavbarDaily,
      // ErrorPage
    },

  data() {
    return {
      challenges: [
        {
          id: 1, 
          title: 'Problem #1 [Easy]', 
          author: 'This problem was recently asked by Google.',
          content: `Given a list of numbers and a number k, 
                    return whether any two numbers from the list add up to k. 
                    `,
          example: `For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.`,
          solve: function (data) {
            return data;
          },
          code: `code javascript`,
          process: 100,
        },
        {
          id: 2, 
          title: 'Problem #2 [Hard]', 
          author: 'This problem was asked by Uber.',
          content: `Given an array of integers, 
                    return a new array such that each element at index i of the new array is 
                    the product of all the numbers in the original array except the one at i.`,
          example: `For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. 
          If our input was [3, 2, 1], the expected output would be [2, 3, 6].`,
          
          solve: function (data) {
            return data;
          },
          code: `code javascript`,
          process: 100,
        },
        {
          id: 3, 
          title: 'Problem #3 [Medium].', 
          author: 'This problem was asked by Google.',
          content: `Given the root to a binary tree, 
                    implement serialize(root), 
                    which serializes the tree into a string, 
                    and deserialize(s), which deserializes the string back into the tree.
                    `,
          example: `class Node:. 
                    def __init__(self, val, left=None, right=None):. 
                    self.val = val. 
                    self.left = left. 
                    self.right = right. 
                    node = Node('root', Node('left', Node('left.left')), Node('right')). 
                    assert deserialize(serialize(node)).left.left.val == 'left.left'. 
                `,
          solve: function (data) {
            return data;
          },
          code: `code javascript`,
          process: 100,
        },
        {
          id: 4, 
          title: 'Problem #4 [Hard]', 
          author: 'This problem was asked by Stripe.',
          content: `Given an array of integers, 
                  find the first missing positive integer in linear time and constant space. 
                  In other words, find the lowest positive integer that does not exist in the array. 
                  The array can contain duplicates and negative numbers as well.`,
          example: `For example, the input [3, 4, -1, 1] should give 2. 
                  The input [1, 2, 0] should give 3.`,
          solve: function (data) {
            return data;
          },
          code: `code javascript`,
          process: 100,
        },
        {
          id: 5, 
          title: 'Problem #5 [Medium]', 
          author: 'This problem was asked by Jane Street.',
          content: `Have cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. 
                        `,
          example: `For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4. 
                    Given this implementation of cons:. 
                    def cons(a, b):. 
                        def pair(f):. 
                            return f(a, b). 
                        return pair. 
                    Implement car and cdr.`,
          solve: function (data) {
            return data;
          },
          code: `code javascript`,
          process: 100,
        },
        {
          id: 6, 
          title: 'Problem #3 [Hard]', 
          author: 'This problem was asked by Jane Street.',
          content: `Given a list of numbers and a number k, 
                    return whether any two numbers from the list add up to k. 
                   `,
          example: `For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.`,
          solve: function (data) {
            return data;
          },
          code: `code javascript`,
          process: 10,
        },
      ],
    }
  }
  
}
</script>

<style>
 
</style>
