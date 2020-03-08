# Object Oriented Programming

- Objects, not procedures
- Objects, not functions
- Objects, not stacks of execution
- Objects, not orphaned data

## Object

You take data and associated functions and put them inside a boundary.

That boundary divides the universe in two. Smaller one is called an object.

Objects can, may try and fail, may unsuccessfully try, to mimick the real world objects.

> Further: Read up on DDD.md.

### Communication

Objects talk to each other. They pass each other messages.

Objects have private members, which universe doesn't know about.

Objects have public members, which universe knows and uses to talk to object.

In some parallel universes, objects have protected and module level members. Universe and objects are confused about them, mostly.

Objects can pass the types of message to one another as per the receiver's signature. Receivers are picky like that.

## Classal

Some programming languages may use class as the blueprint for objects.

Classes don't run and execute instructions. Objects do. Objects are instances of classes.

For example: C#, Java, C++

## Protypal

Other programming languages may use objects or prototypes as the blueprint for objects.

Prototypes don't run and execute instructions. Objects do. Objects are run-time extensions of prototypes.

For example: ECMAScript

## Principles

### A. Abstraction

Universe is divided into two.

Objects' member functions know what to do with member values.

Universe doesn't care about private members.

### B. Encapsulation

Universe is divided into two.

Objects are members make a cohesive units.

Objects hide private members from the universe. Universe anyway shouldn't care about such private members.

### C. Inheritance

Things evolve. Problems are created. Objects are created. Problems evolve. Objects are evolved.

Instead of recreating objects from scratch, older blueprints are extended.

Most of the humans don't like inheritance.

### D. Polymorphism

Inheritance in motion.

Without LSP, this is disaster in motion.

## More principles

### SOLID

- Single Responsibility Principle
- Open-Closed Principle
- Liskov Substution Principle
- Interface Segregation Principle
- Dependency Inversion Principle

#### 1. SRP - Single Responsibility Principle

Be one thing, do one thing.

This can be applied to classess, member functions in classes, modules etc.

"One thing" is hard to quantify. It comes with experience.

#### 2. OCP - Open Closed Principle

Once a piece of code is published, it shouldn't be modified.

- You can still extend the same class, function or module. OR
- You can inherit and modify for newer cases. OR
- You can override abstract base code.

But, but, but, you cannot let existing code fail because of your changes.

#### 3. LSP - Liskov Substitution Principle

T t; S s; S extends T;

Anywhere you have used t, you shuold be able to use s.

Any child should be able to replace a parent.

#### 4. ISP - Interface Segregation Principle

Use succint interface to implement.

It'd be good if multiple interfaces can be implemented simultaneously.

Colloquially: Don't make me plan for things I am never going to do.

### 5. Dependency Inversion Principle

You don't figure out where the lemons are.

When life gives you lemons, then you make lemonade.

The things that can change in a system are abstracted out.

Implementations should be based on the abstractions.

Nothing should derive from implementations.

Composition should be based on abstractions and not on objects.

"You should know what you want to do with an object; and not which object you want to use for doing that"

Rules to follow

- Classes shouldn't know much, make evrey member as abstract as possible.
- Two classes should have an abstraction between them.
- Concrete classes shan't be extended.

Remember, some object, config or a file or something would know how to connect things up.

This is ususally done by IOC frameworks.
