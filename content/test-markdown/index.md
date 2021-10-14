---
emoji: 🛠
title: 마크다운 테스트
date: '2021-10-14 20:00:00'
author: min-9
tags: markdown
categories: 테스트
---

## C / C++

```cpp
#include <iostream>
#include <string>

using namespace std;

class Person {
private:
  string name{ "" };
  int age{ 0 };
public:
  Person() {}
  explicit Person(string _name, int _age) : name(_name), age(_age) {}
  Person(string _name, int _age) : name(_name), age(_age) {}
  view() {
    cout << "이름: " << name << "\n" << "나이: " << age << endl;
  }
}


int main() {
  Person p{ "강민구", 22 };

  p.view();
}
```

<br>

## Java

```java
class Lamp {
  boolean isOn;

  void turnOn() {
    isOn = true;
    System.out.println("Light on? " + isOn);
  }

  public static void main(String[] args) {
    Lamp led = new Lamp();
    led.turnOn();
  }
}
```

<br>

## Python

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

    def __repr__(self):
        return self.data

class LinkedList:
    def __init__(self):
        self.head = None

    def __repr__(self):
        node = self.head
        nodes = []
        while node is not None:
            nodes.append(node.data)
            node = node.next
        nodes.append("None")
        return " -> ".join(nodes)
```

<br>

## JavaScript

```jsx
const Node = (value) => {
  let node = {};

  node.value = value;
  node.next = null;

  return node;
};

const LinkedList = () => {
  let list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = (value) => {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  };

  list.removeHead = () => {
    let removeNode = this.head;
    if (TimeRanges.head !== null) {
      this.head = removeNode.next;
      return removeNode.value;
    }
  };

  list.contains = (target) => {
    let accNode = this.head;
    while (accNode) {
      if (accNode.value === target) {
        return true;
      }
      accNode = accNode.next;
    }
    return false;
  };
  return list;
};
```

<br>

## Go

```go
package main
import (
 "fmt"
)
type width int //user defined type
type Mobile struct {
 brand string
 model string
 price int
}
func (mob Mobile) display() string { //func associated with Mobile
 mob.brand = "Xiomi"
 return mob.brand
}
func (mob *Mobile) show() string { //func associated with Mobile
 mob.brand = "Xiomi"
 return mob.brand
}
func main() {
 var height width
 fmt.Println(height)
 m := Mobile{}
 fmt.Println(m) //Default values inside struct{" " 0}
 var mob Mobile //Instance creation using var
 fmt.Println(mob)
 mobs := new(Mobile)
 fmt.Println(mobs)
 phone := Mobile{"Samsung", "Galaxy", 24500} //Struct initialization
 fmt.Println("Before Change:", phone)
 fmt.Println("Function Call", phone.display()) // Xiomi
 fmt.Println("After Change:", phone) //still old values are coming
 {"Samsung","Galaxy",24500}
 fmt.Println("Function Call:", phone.show()) //calling show()
 fmt.Println("After Change:", phone) //Here changed values will
 reflect
}
```

```toc

```
