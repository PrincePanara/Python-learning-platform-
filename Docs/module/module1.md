# Module 1 Content

*This file contains the consolidated, structured content for the module. As new topics are provided, they will be appended as numbered sections below.*

---

% Python Programming Course: Basic to Advanced
% A Structured, Topic-by-Topic Guide
% 2026

\newpage

# Topic 1: Introduction to Python & Setup

## Topic Overview
This topic introduces Python as a programming language, explains why it is one of the most widely used languages in the world, and walks through installing Python and running your first program. It lays the foundation for everything else in this course.

## Learning Objectives
By the end of this topic, learners will be able to:
- Explain what Python is and where it is used
- Install Python and set up a development environment
- Write, save, and run a basic Python script
- Understand the difference between the Python interpreter and a script file
- Use the Python interactive shell (REPL)

## What Exactly Is It?
Python is a high-level, interpreted, general-purpose programming language created by Guido van Rossum and first released in 1991. "High-level" means Python hides most of the complex details of the computer (like memory management) so you can focus on solving problems. "Interpreted" means your code is run line-by-line by a program called the Python interpreter, rather than being compiled into machine code ahead of time. Python is known for its clean, readable syntax that resembles plain English, which is why it is often recommended as a first programming language.

## Key Concepts
- **Interpreter**: The program (`python` or `python3`) that reads and executes your Python code.
- **Script**: A text file containing Python code, saved with a `.py` extension.
- **REPL (Read-Eval-Print Loop)**: The interactive Python shell where you can type code and see results immediately.
- **PEP 8**: Python's official style guide, describing how code should be formatted for readability.
- **Virtual Environment**: An isolated Python setup for a specific project (introduced briefly here, covered in depth later).
- **IDE/Editor**: Tools like VS Code, PyCharm, or Jupyter Notebook used to write Python code.

## Program Examples

### Example 1: Your First Python Program
```python
# hello.py
print("Hello, World!")
print("Welcome to Python programming.")
```
**Expected Output:**
```
Hello, World!
Welcome to Python programming.
```
**Explanation:** The `print()` function is a built-in Python function that displays text on the screen. Each `print()` call outputs its argument followed by a new line. Comments start with `#` and are ignored by the interpreter — they exist purely to help humans understand the code.

### Example 2: Using the Interactive Shell for Simple Calculations
```python
>>> 5 + 3
8
>>> name = "Alex"
>>> print(f"Hi, {name}! Python version check:")
Hi, Alex! Python version check:
>>> import sys
>>> print(sys.version)
3.12.4 (main, Jun  8 2024, 18:29:57) [GCC 13.2.0]
```
**Expected Output:** Shown inline above each command, exactly as it would appear in the terminal.
**Explanation:** The REPL evaluates each line as soon as you press Enter, making it ideal for quick experiments. The `sys` module is part of Python's standard library and `sys.version` reports the exact interpreter version installed on your machine — useful when verifying your setup.

## Real-World Use Cases
- Automating repetitive office tasks such as renaming files or generating reports
- Building web applications (e.g., Instagram's backend historically used Python/Django)
- Data analysis and visualization in finance, healthcare, and research
- Powering machine learning and AI systems (TensorFlow, PyTorch are Python-first)
- Writing quick automation scripts for system administration and DevOps

## Features
- Simple, readable, English-like syntax
- Interpreted language — no separate compilation step needed
- Dynamically typed — no need to declare variable types
- Huge standard library ("batteries included")
- Massive third-party ecosystem via PyPI (Python Package Index)
- Cross-platform — runs on Windows, macOS, and Linux

## Advantages
- Fast to write and easy to read, which speeds up development
- Beginner-friendly with a gentle learning curve
- Strong community support and abundant documentation
- Versatile — used in web development, data science, automation, AI, and more
- Extensive libraries reduce the need to write code from scratch

## Best Practices
- Always install the latest stable Python 3.x version (avoid Python 2, which is no longer supported)
- Use a virtual environment for every project to avoid dependency conflicts
- Follow PEP 8 formatting conventions from the very beginning
- Use a proper code editor (VS Code, PyCharm) instead of plain text editors
- Save scripts with meaningful file names and a `.py` extension

## Interview Questions
**Q1: What type of language is Python — compiled or interpreted — and why does it matter?**
A: Python is an interpreted language, meaning the Python interpreter reads and executes code line by line at runtime rather than compiling it into machine code beforehand. This makes development faster and more flexible (you can test code immediately) but generally makes execution slower than compiled languages like C++. It also means errors are only caught when that specific line is executed, not before the program starts.

**Q2: What is the difference between running Python in interactive mode versus running a script file?**
A: Interactive mode (the REPL) evaluates one statement at a time and immediately shows the result, making it ideal for quick tests and debugging. Running a script file (`python script.py`) executes the entire file from top to bottom as one program, which is how real applications are run. Scripts can be saved, shared, and reused, whereas REPL sessions are temporary.

## Practice Coding Exercises
1. Write a script called `intro.py` that prints your name, your favorite hobby, and the current Python version using the `sys` module.
2. Open the Python REPL and perform basic arithmetic (addition, subtraction, multiplication, division) on two numbers of your choice, then print a sentence summarizing the results using an f-string.

## Quiz Questions
1. What extension is used for Python script files?
   - A) .py
   - B) .python
   - C) .pt
   - D) .pyt
   - **Answer: A**

2. Which of the following best describes Python?
   - A) A low-level compiled language
   - B) A high-level interpreted language
   - C) A markup language
   - D) A database query language
   - **Answer: B**

3. What does REPL stand for?
   - A) Run Execute Print Loop
   - B) Read Evaluate Print Loop
   - C) Read Execute Program Line
   - D) Repeat Evaluate Program Loop
   - **Answer: B**

## Summary
Python is a beginner-friendly, high-level, interpreted language known for its readability and versatility. In this topic, you learned what Python is, installed it, and ran your first program both as a script and in the interactive shell. With this foundation in place, you are ready to explore Python's core building blocks, starting with variables and data types.

\newpage
# Topic 2: Variables & Data Types

## Topic Overview
This topic covers how Python stores data in variables and introduces the core built-in data types you will use in almost every program: integers, floats, strings, and booleans.

## Learning Objectives
By the end of this topic, learners will be able to:
- Create and name variables correctly
- Identify Python's core data types
- Convert between data types (type casting)
- Use the `type()` function to inspect variables

## What Exactly Is It?
A variable is a named label that refers to a value stored in memory. Unlike some languages, Python does not require you to declare a variable's type — the type is inferred automatically from the value assigned, and it can change if you reassign the variable to a different kind of value. This is called dynamic typing.

## Key Concepts
- **Variable assignment**: `x = 10` creates a variable `x` pointing to the integer `10`.
- **int**: Whole numbers, e.g., `5`, `-3`, `1000`.
- **float**: Decimal numbers, e.g., `3.14`, `-0.5`.
- **str**: Text, written inside quotes, e.g., `"hello"`.
- **bool**: `True` or `False` values.
- **Type casting**: Converting one type to another using `int()`, `float()`, `str()`, `bool()`.
- **Dynamic typing**: A variable's type can change during program execution.

## Program Examples

### Example 1: Declaring and Inspecting Variables
```python
age = 25
height = 5.9
name = "Priya"
is_student = True

print(type(age))
print(type(height))
print(type(name))
print(type(is_student))
```
**Expected Output:**
```
<class 'int'>
<class 'float'>
<class 'str'>
<class 'bool'>
```
**Explanation:** Each variable is assigned a value, and Python automatically infers its type. The `type()` function returns the class of an object, letting you confirm what kind of data a variable holds.

### Example 2: Type Conversion
```python
score_text = "95"
score_number = int(score_text)
total = score_number + 5
print("Total score:", total)
print(type(score_number))

pi_str = str(3.14159)
print("Pi as string:", pi_str, type(pi_str))
```
**Expected Output:**
```
Total score: 100
<class 'int'>
Pi as string: 3.14159 <class 'str'>
```
**Explanation:** `int()` converts a numeric string into an integer so arithmetic can be performed on it. `str()` performs the reverse operation, converting a number into text, which is useful when concatenating numbers with strings.

## Real-World Use Cases
- Storing user input from forms (always received as strings, often converted to numbers)
- Representing prices, quantities, and flags (in-stock/out-of-stock) in e-commerce systems
- Holding configuration values such as thresholds or toggles in applications
- Tracking scores, ages, or measurements in data-driven applications

## Features
- No explicit type declaration required
- Variables can be reassigned to any type at any time
- Built-in functions exist for inspecting and converting types
- Type errors are only detected at runtime, not before execution

## Advantages
- Faster prototyping since you don't need to specify types
- Flexible code that adapts to different kinds of data
- Fewer lines of boilerplate code compared to statically typed languages

## Best Practices
- Use descriptive variable names (`total_price` instead of `tp`)
- Follow snake_case naming convention for variables
- Avoid changing a variable's type midway through a program unless necessary — it can create confusing bugs
- Always validate and convert user input before performing calculations

## Interview Questions
**Q1: What is dynamic typing in Python, and what is one risk associated with it?**
A: Dynamic typing means a variable's type is determined at runtime based on the value assigned to it, and the same variable can be reassigned to a value of a different type later in the program. The risk is that this flexibility can lead to unexpected bugs — for example, accidentally treating a string as a number — that only appear when that specific line of code runs, since there's no compile-time type checking.

**Q2: How would you convert a floating-point number to an integer in Python, and what happens to the decimal part?**
A: You use the `int()` function, e.g., `int(9.8)`. Python truncates (removes) the decimal part rather than rounding, so `int(9.8)` returns `9`, not `10`. To round instead, you would use the `round()` function first.

## Practice Coding Exercises
1. Create variables for a product's name (string), price (float), quantity (int), and availability (bool). Print each variable along with its type.
2. Take two numbers stored as strings (e.g., `"12"` and `"8"`), convert them to integers, and print their sum, difference, product, and quotient.

## Quiz Questions
1. What will `type(True)` return?
   - A) <class 'int'>
   - B) <class 'bool'>
   - C) <class 'str'>
   - D) <class 'bit'>
   - **Answer: B**

2. Which function converts a string `"42"` into an integer?
   - A) str()
   - B) bool()
   - C) int()
   - D) float()
   - **Answer: C**

3. What is the output of `int(7.9)`?
   - A) 8
   - B) 7
   - C) 7.9
   - D) Error
   - **Answer: B**

## Summary
Variables let you store and label data, and Python's dynamic typing system automatically determines a variable's type based on its assigned value. You explored the four core data types — int, float, str, and bool — and learned how to convert between them. Next, you'll build on this foundation by learning about operators, which let you manipulate these values.

\newpage

# Topic 3: Operators

## Topic Overview
This topic covers Python's operators — the symbols used to perform arithmetic, comparisons, logical operations, and assignments on values and variables.

## Learning Objectives
By the end of this topic, learners will be able to:
- Use arithmetic operators to perform calculations
- Compare values using comparison operators
- Combine conditions using logical operators
- Use assignment and membership operators effectively

## What Exactly Is It?
Operators are special symbols in Python that carry out operations on variables and values, called operands. For example, in `5 + 3`, the `+` is the operator and `5` and `3` are the operands. Python groups operators into categories: arithmetic, comparison, logical, assignment, identity, and membership operators.

## Key Concepts
- **Arithmetic operators**: `+`, `-`, `*`, `/`, `//` (floor division), `%` (modulus), `**` (exponent)
- **Comparison operators**: `==`, `!=`, `>`, `<`, `>=`, `<=`
- **Logical operators**: `and`, `or`, `not`
- **Assignment operators**: `=`, `+=`, `-=`, `*=`, `/=`
- **Membership operators**: `in`, `not in`
- **Identity operators**: `is`, `is not`

## Program Examples

### Example 1: Arithmetic and Assignment Operators
```python
a = 15
b = 4

print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a // b)
print(a % b)
print(a ** 2)

a += 5
print("Updated a:", a)
```
**Expected Output:**
```
19
11
60
3.75
3
3
225
Updated a: 20
```
**Explanation:** `/` always returns a float, while `//` performs floor division and returns the largest whole number less than or equal to the result. `%` returns the remainder of division. `+=` is shorthand for `a = a + 5`.

### Example 2: Comparison and Logical Operators
```python
age = 20
has_id = True

is_adult = age >= 18
can_enter = is_adult and has_id

print("Is adult:", is_adult)
print("Can enter:", can_enter)
print(age == 21)
print(age != 21)
print(not has_id)
```
**Expected Output:**
```
Is adult: True
Can enter: True
False
True
False
```
**Explanation:** Comparison operators return boolean values. `and` requires both conditions to be `True` for the overall expression to be `True`. `not` inverts a boolean value, so `not True` becomes `False`.

## Real-World Use Cases
- Validating user eligibility (e.g., age and ID checks for account creation)
- Calculating totals, discounts, and taxes in shopping cart systems
- Filtering records in data analysis (e.g., `salary > 50000 and department == "Sales"`)
- Pagination logic using floor division and modulus (e.g., splitting items into pages)

## Features
- Operators can be chained and combined with parentheses to control evaluation order
- Logical operators short-circuit — `and`/`or` stop evaluating as soon as the result is determined
- Comparison operators can be chained, e.g., `18 <= age <= 65`

## Advantages
- Concise syntax for expressing complex conditions
- Short-circuit evaluation improves performance and prevents errors (e.g., avoiding division by zero checks)
- Readable, near-English logical expressions (`and`, `or`, `not`)

## Best Practices
- Use parentheses to make complex expressions with multiple operators explicit and readable
- Prefer `is` only for identity checks (e.g., `is None`), not value equality — use `==` for that
- Avoid overly long chained conditions; break them into named boolean variables for clarity

## Interview Questions
**Q1: What is the difference between `/` and `//` in Python?**
A: The `/` operator performs true division and always returns a float, even if the numbers divide evenly (e.g., `10 / 2` returns `5.0`). The `//` operator performs floor division, returning the largest integer less than or equal to the result, discarding any remainder (e.g., `10 // 3` returns `3`).

**Q2: What is the difference between `==` and `is` in Python?**
A: `==` checks whether two values are equal in content, while `is` checks whether two variables point to the exact same object in memory (identity). Two different lists with identical contents will be `==` equal but `is` will return `False` because they are separate objects.

## Practice Coding Exercises
1. Write a program that takes two numbers and prints the result of every arithmetic operator (`+`, `-`, `*`, `/`, `//`, `%`, `**`) applied to them.
2. Write a program that checks whether a person can vote. They must be at least 18 years old AND a registered citizen (use two boolean variables and the `and` operator to compute and print the result).

## Quiz Questions
1. What does `17 % 5` evaluate to?
   - A) 3
   - B) 2
   - C) 3.4
   - D) 0
   - **Answer: B**

2. Which operator checks for equality of value?
   - A) =
   - B) ==
   - C) is
   - D) !=
   - **Answer: B**

3. What is the result of `True and False`?
   - A) True
   - B) False
   - C) None
   - D) Error
   - **Answer: B**

## Summary
Operators are the building blocks for performing calculations, comparisons, and logic in Python. You learned arithmetic, comparison, logical, and assignment operators with practical examples. Next, you will learn how to interact with users through input and output, and format strings professionally.

\newpage
# Topic 4: Input/Output & String Formatting

## Topic Overview
This topic explains how to make programs interactive by accepting user input and displaying formatted output, including modern string formatting techniques like f-strings.

## Learning Objectives
By the end of this topic, learners will be able to:
- Accept input from the user using `input()`
- Display output using `print()` with various formatting options
- Format strings using f-strings, `.format()`, and the `%` operator
- Control output precision and alignment

## What Exactly Is It?
Input/Output (I/O) refers to how a program communicates with the outside world — receiving data from the user (input) and displaying results (output). Python's `input()` function pauses execution and waits for the user to type something, always returning it as a string. `print()` sends text to the console, and Python offers several ways to format that text neatly, the most modern and readable being f-strings (formatted string literals).

## Key Concepts
- **`input()`**: Reads a line of text from the user as a string
- **`print()`**: Outputs text, supports multiple arguments, `sep`, and `end` parameters
- **f-strings**: `f"Hello {name}"` — embed expressions directly inside string literals
- **`.format()` method**: An older, more verbose approach to formatting strings
- **`%` operator**: The oldest string formatting style, inherited from C-style formatting
- **Format specifiers**: Control decimal places, width, and alignment, e.g., `f"{price:.2f}"`

## Program Examples

### Example 1: Basic Input and f-string Formatting
```python
name = input("Enter your name: ")
age = int(input("Enter your age: "))

print(f"Hello, {name}! You will turn {age + 1} next year.")
```
**Expected Output (assuming input "Maria" and "29"):**
```
Enter your name: Maria
Enter your age: 29
Hello, Maria! You will turn 30 next year.
```
**Explanation:** `input()` always returns a string, so the age must be explicitly converted with `int()` before arithmetic can be performed. The f-string embeds both the `name` variable and the expression `age + 1` directly inside curly braces.

### Example 2: Formatting Numbers with Precision and Alignment
```python
price = 49.5
quantity = 3
total = price * quantity

print(f"Price: ${price:.2f}")
print(f"Total: ${total:.2f}")
print(f"{'Item':<10}{'Qty':>5}")
print(f"{'Notebook':<10}{quantity:>5}")
```
**Expected Output:**
```
Price: $49.50
Total: $148.50
Item           Qty
Notebook         3
```
**Explanation:** `:.2f` formats a float to exactly two decimal places, essential for displaying currency. `:<10` left-aligns text within a 10-character width, while `:>5` right-aligns within a 5-character width — useful for creating neatly columned output.

## Real-World Use Cases
- Command-line tools that prompt users for configuration values
- Generating formatted receipts, invoices, or reports with aligned columns
- Displaying currency, percentages, or scientific data with consistent precision
- Building simple text-based menus and interactive quizzes

## Features
- f-strings support any valid Python expression inside `{}`, including function calls
- `print()` accepts a `sep` parameter (default is a space) and an `end` parameter (default is a newline)
- Format specifiers support width, alignment, precision, and even thousands separators (`{value:,}`)

## Advantages
- f-strings are more readable and faster than `.format()` or `%` formatting
- Fine-grained control over how numbers and text are displayed
- Easy to build professional-looking console output without external libraries

## Best Practices
- Prefer f-strings for all new code (Python 3.6+) over `.format()` or `%`
- Always convert `input()` results to the appropriate type before doing math
- Use format specifiers (`.2f`) for currency and measurements to avoid floating-point display issues
- Validate user input to handle unexpected or empty values gracefully

## Interview Questions
**Q1: Why does `input()` always require type conversion when working with numbers?**
A: The `input()` function always returns the user's entry as a `str`, regardless of what was typed, because Python cannot assume the intended data type. To use the input in arithmetic, you must explicitly convert it, typically with `int()` or `float()`, or a `TypeError` will occur when combining it with numeric operations.

**Q2: What is the advantage of f-strings over the older `%` and `.format()` string formatting methods?**
A: f-strings are more concise and readable because expressions are written directly inside the string using `{}`, rather than being passed as separate arguments. They also tend to perform better at runtime since they are evaluated at parse time rather than through a separate formatting function call, and they reduce the risk of mismatched placeholders and arguments.

## Practice Coding Exercises
1. Write a program that asks the user for their name and two numbers, then prints a formatted sentence showing the sum and product of the numbers using f-strings.
2. Write a program that asks for an item name, unit price, and quantity, then prints a neatly formatted receipt line showing the item, quantity, and total cost formatted to two decimal places.

## Quiz Questions
1. What data type does `input()` always return?
   - A) int
   - B) float
   - C) str
   - D) bool
   - **Answer: C**

2. What does `f"{3.14159:.2f}"` evaluate to?
   - A) 3.14
   - B) 3.1
   - C) 3.14159
   - D) 3.142
   - **Answer: A**

3. Which formatting style is recommended for modern Python code?
   - A) % operator
   - B) .format() method
   - C) f-strings
   - D) String concatenation with +
   - **Answer: C**

## Summary
Input and output are essential for building interactive programs. You learned how to capture user input with `input()`, always as a string, and how to display polished output using f-strings and format specifiers. With I/O covered, you're ready to learn how to control program flow using conditional statements.

\newpage

# Topic 5: Conditional Statements

## Topic Overview
This topic introduces decision-making in Python programs using `if`, `elif`, and `else` statements, allowing code to execute different paths based on conditions.

## Learning Objectives
By the end of this topic, learners will be able to:
- Write `if`, `elif`, and `else` statements
- Understand truthy and falsy values in Python
- Use nested conditionals
- Apply conditional expressions (ternary operator)

## What Exactly Is It?
Conditional statements let a program choose between different blocks of code based on whether a condition is `True` or `False`. Python evaluates the condition after `if`, and if it's true, runs the indented block beneath it; otherwise, it checks any `elif` conditions, and finally falls back to `else` if none match. Indentation (not curly braces) defines these blocks in Python, which is a defining feature of the language's syntax.

## Key Concepts
- **`if`**: Executes a block only if the condition is `True`
- **`elif`**: Checks an additional condition if the previous ones were `False`
- **`else`**: Executes if none of the above conditions were `True`
- **Truthy/Falsy values**: `0`, `""`, `None`, `[]`, and `False` are falsy; most other values are truthy
- **Nested conditionals**: An `if` statement inside another `if` statement
- **Ternary (conditional) expression**: `value_if_true if condition else value_if_false`

## Program Examples

### Example 1: Grading System with if-elif-else
```python
score = 78

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

print(f"Score: {score} -> Grade: {grade}")
```
**Expected Output:**
```
Score: 78 -> Grade: C
```
**Explanation:** Python checks each condition top to bottom and stops at the first `True` match. Since `score` is 78, it fails the first two checks (`>= 90` and `>= 80`) but passes `>= 70`, so `grade` is set to `"C"` and the remaining conditions are skipped entirely.

### Example 2: Nested Conditionals and Ternary Expression
```python
age = 20
has_ticket = True

if age >= 18:
    if has_ticket:
        status = "Entry allowed"
    else:
        status = "Buy a ticket first"
else:
    status = "Must be 18 or older"

print(status)

# Ternary equivalent for a simpler case
message = "Adult" if age >= 18 else "Minor"
print(message)
```
**Expected Output:**
```
Entry allowed
Adult
```
**Explanation:** The nested `if` only runs when the outer condition (`age >= 18`) is satisfied, allowing for layered decision-making. The final line demonstrates a ternary expression — a compact way to assign one of two values based on a condition, ideal for simple cases.

## Real-World Use Cases
- Access control systems (checking age, permissions, or subscription status)
- Grading and evaluation systems in educational software
- Discount logic in e-commerce (e.g., different discounts based on cart value)
- Form validation (checking whether required fields are filled correctly)

## Features
- Supports unlimited `elif` branches for multi-way decisions
- Conditions can combine multiple expressions using `and`, `or`, `not`
- Python does not require parentheses around conditions (unlike C or Java)

## Advantages
- Clear, readable branching logic thanks to Python's indentation-based syntax
- Ternary expressions reduce code for simple either/or assignments
- Easy to combine with loops and functions for complex decision trees

## Best Practices
- Avoid deeply nested conditionals — refactor into functions or use `elif` chains instead
- Use ternary expressions only for simple, short conditions to preserve readability
- Order `elif` conditions from most specific to least specific
- Always include an `else` branch when handling all possible cases matters (e.g., error handling)

## Interview Questions
**Q1: What are "truthy" and "falsy" values in Python, and why do they matter for conditionals?**
A: In Python, every value can be evaluated in a boolean context. Falsy values include `0`, `0.0`, empty strings `""`, empty collections (`[]`, `{}`, `()`), `None`, and `False`; everything else is truthy. This matters because you can write conditions like `if my_list:` to check whether a list has items, without explicitly comparing its length to zero, making code more concise and Pythonic.

**Q2: What is the difference between using multiple `if` statements versus `if-elif-else`?**
A: Multiple separate `if` statements are each evaluated independently, so more than one block could execute even if an earlier condition was true. An `if-elif-else` chain evaluates conditions in order and stops at the first true condition, guaranteeing only one block executes — this is both more efficient and usually the intended logic for mutually exclusive cases.

## Practice Coding Exercises
1. Write a program that takes a number and prints whether it is positive, negative, or zero using `if-elif-else`.
2. Write a program that determines ticket pricing: free for children under 5, a discounted price for ages 5–17, and full price for 18 and older. Use nested or chained conditionals as appropriate.

## Quiz Questions
1. Which of the following is considered "falsy" in Python?
   - A) "0"
   - B) []
   - C) 1
   - D) "False"
   - **Answer: B**

2. What defines a block of code under an `if` statement in Python?
   - A) Curly braces {}
   - B) Parentheses ()
   - C) Indentation
   - D) Semicolons
   - **Answer: C**

3. What is the output of `"Yes" if 5 > 3 else "No"`?
   - A) Yes
   - B) No
   - C) True
   - D) Error
   - **Answer: A**

## Summary
Conditional statements allow programs to make decisions and follow different execution paths. You learned `if`, `elif`, `else`, nested conditionals, and ternary expressions with real examples. Next, you'll learn how to repeat actions efficiently using loops.

\newpage
# Topic 6: Loops (for, while)

## Topic Overview
This topic covers Python's two looping constructs — `for` and `while` — which allow a block of code to be repeated multiple times, along with loop control statements like `break` and `continue`.

## Learning Objectives
By the end of this topic, learners will be able to:
- Write `for` loops to iterate over sequences and ranges
- Write `while` loops for condition-based repetition
- Use `break`, `continue`, and `else` with loops
- Avoid infinite loops and recognize common loop pitfalls

## What Exactly Is It?
A loop is a control structure that repeats a block of code multiple times. Python offers a `for` loop, which iterates over a sequence (like a list, string, or range) a fixed number of times, and a `while` loop, which repeats as long as a given condition remains `True`. Loops are essential for processing collections of data, repeating tasks, and automating anything that would otherwise require repetitive code.

## Key Concepts
- **`for` loop**: Iterates over items in a sequence, e.g., `for i in range(5):`
- **`range()`**: Generates a sequence of numbers, e.g., `range(0, 10, 2)`
- **`while` loop**: Repeats as long as a condition is `True`
- **`break`**: Immediately exits the loop
- **`continue`**: Skips the rest of the current iteration and moves to the next
- **`else` on loops**: Runs if the loop completes without hitting a `break`
- **Infinite loop**: A loop whose condition never becomes `False` (usually a bug)

## Program Examples

### Example 1: for Loop with range() and break/continue
```python
for i in range(1, 11):
    if i == 7:
        break
    if i % 2 == 0:
        continue
    print(i)
```
**Expected Output:**
```
1
3
5
```
**Explanation:** The loop iterates from 1 to 10. When `i` is even, `continue` skips printing and moves to the next number. When `i` reaches 7, `break` stops the loop entirely, so numbers 7 through 10 are never processed.

### Example 2: while Loop for User-Controlled Repetition
```python
total = 0
count = 0

while True:
    entry = input("Enter a number (or 'done' to finish): ")
    if entry.lower() == "done":
        break
    total += int(entry)
    count += 1

if count > 0:
    print(f"Average: {total / count:.2f}")
else:
    print("No numbers entered.")
```
**Expected Output (assuming input "10", "20", "30", "done"):**
```
Enter a number (or 'done' to finish): 10
Enter a number (or 'done' to finish): 20
Enter a number (or 'done' to finish): 30
Enter a number (or 'done' to finish): done
Average: 20.00
```
**Explanation:** `while True` creates a loop that runs indefinitely until explicitly stopped with `break`. This pattern is common when the number of iterations isn't known in advance — here, the loop continues until the user types "done".

## Real-World Use Cases
- Processing every row in a spreadsheet or database query result
- Polling a sensor or API endpoint until a condition is met (e.g., a job finishes)
- Building menu-driven console applications that run until the user exits
- Iterating over files in a directory to perform batch operations

## Features
- `for` loops work on any iterable: lists, strings, tuples, dictionaries, sets, and ranges
- `while` loops support an optional `else` clause, executed only if no `break` occurred
- Loops can be nested to process multi-dimensional data (e.g., grids, matrices)

## Advantages
- Eliminates repetitive, duplicated code
- `for` loops are safer than `while` loops for known-length iteration (lower risk of infinite loops)
- `break`/`continue` provide fine control over loop execution flow

## Best Practices
- Prefer `for` loops when the number of iterations is known or based on a collection
- Always ensure a `while` loop's condition will eventually become `False` to avoid infinite loops
- Use `enumerate()` instead of manual counters when you need both index and value
- Keep loop bodies focused — extract complex logic into functions

## Interview Questions
**Q1: When would you choose a `while` loop over a `for` loop?**
A: A `while` loop is preferred when the number of iterations isn't known ahead of time and depends on a condition being met during execution — for example, repeatedly prompting a user until they enter valid input, or processing data until a sentinel value is reached. A `for` loop is better suited when iterating over a fixed collection or a known range of values.

**Q2: What is the difference between `break` and `continue` in a loop?**
A: `break` immediately terminates the entire loop, and execution jumps to the code after the loop. `continue` only skips the remaining code in the current iteration and moves on to the next iteration of the loop, without exiting it.

## Practice Coding Exercises
1. Write a program using a `for` loop that prints all numbers from 1 to 50 that are divisible by both 3 and 5.
2. Write a `while` loop that simulates a simple guessing game: the program picks a fixed number (e.g., 42), and the loop keeps asking the user to guess until they get it right, printing "Too high" or "Too low" as hints.

## Quiz Questions
1. What does `range(2, 10, 2)` generate?
   - A) 2, 4, 6, 8
   - B) 2, 3, 4, ... 10
   - C) 2, 4, 6, 8, 10
   - D) 0, 2, 4, 6, 8
   - **Answer: A**

2. Which statement immediately exits a loop entirely?
   - A) continue
   - B) pass
   - C) break
   - D) return
   - **Answer: C**

3. What risk is most associated with `while` loops?
   - A) Syntax errors
   - B) Infinite loops
   - C) Type errors
   - D) Memory leaks only
   - **Answer: B**

## Summary
Loops let you repeat code efficiently, with `for` loops ideal for known sequences and `while` loops for condition-based repetition. You also learned to control loop flow with `break`, `continue`, and the loop `else` clause. Next, you will dive deeper into strings and the powerful methods Python provides for working with text.

\newpage

# Topic 7: Strings & String Methods

## Topic Overview
This topic explores Python strings in depth — how to create, slice, and manipulate text using built-in string methods.

## Learning Objectives
By the end of this topic, learners will be able to:
- Create and index/slice strings
- Apply common string methods for searching, cleaning, and transforming text
- Concatenate and repeat strings
- Understand string immutability

## What Exactly Is It?
A string in Python is a sequence of characters enclosed in single, double, or triple quotes, used to represent text. Strings are immutable, meaning once created, their content cannot be changed in place — any "modification" actually creates a new string. Python provides a rich set of built-in methods to search, transform, and format strings without needing external libraries.

## Key Concepts
- **Indexing**: Accessing a single character, e.g., `"hello"[0]` returns `'h'`
- **Slicing**: Extracting a substring, e.g., `"hello"[1:4]`
- **Immutability**: Strings cannot be changed in place; methods return new strings
- **Common methods**: `.upper()`, `.lower()`, `.strip()`, `.split()`, `.join()`, `.replace()`, `.find()`
- **String concatenation**: Combining strings with `+` or repeating with `*`
- **Membership testing**: Using `in` to check for a substring

## Program Examples

### Example 1: Indexing, Slicing, and Common Methods
```python
text = "  Python Programming  "

print(text.strip())
print(text.strip().upper())
print(text.strip().lower())
print(text.strip()[0:6])
print(text.strip().replace("Python", "Advanced Python"))
```
**Expected Output:**
```
Python Programming
PYTHON PROGRAMMING
python programming
Python
Advanced Python Programming
```
**Explanation:** `.strip()` removes leading and trailing whitespace. `.upper()`/`.lower()` change case. Slicing `[0:6]` extracts characters from index 0 up to (not including) index 6. `.replace()` returns a new string with all occurrences of the target substring swapped out — the original string remains unchanged because strings are immutable.

### Example 2: Splitting and Joining Strings
```python
sentence = "Python,Java,C++,JavaScript"
languages = sentence.split(",")
print(languages)

joined = " | ".join(languages)
print(joined)

print(f"Total languages: {len(languages)}")
print("Java" in languages)
```
**Expected Output:**
```
['Python', 'Java', 'C++', 'JavaScript']
Python | Java | C++ | JavaScript
Total languages: 4
True
```
**Explanation:** `.split(",")` breaks a string into a list based on the given delimiter. `.join()` does the reverse — it combines a list of strings into one string using the specified separator. The `in` operator checks whether a value exists within the resulting list.

## Real-World Use Cases
- Parsing CSV-like data (splitting rows by commas)
- Cleaning user input by trimming whitespace and normalizing case before validation
- Building dynamic messages, emails, or reports from templates
- Searching log files or text documents for specific keywords

## Features
- Supports both positive and negative indexing (`text[-1]` returns the last character)
- Slicing supports a step parameter: `text[::2]` returns every second character
- Strings support many chainable methods, e.g., `text.strip().lower().replace(" ", "_")`

## Advantages
- Extensive built-in methods eliminate the need for manual character-by-character processing
- Immutability makes strings safe to share across a program without unexpected side effects
- Slicing provides a concise way to extract substrings without loops

## Best Practices
- Chain string methods thoughtfully but avoid excessively long chains that hurt readability
- Use f-strings instead of manual concatenation when building formatted text
- Always `.strip()` and normalize case when comparing user-entered text
- Prefer `.join()` over repeated `+` concatenation in loops for performance

## Interview Questions
**Q1: Why are Python strings considered immutable, and what does that mean in practice?**
A: Once a string object is created, its contents cannot be changed in place — any operation that appears to modify a string, like `.replace()` or `.upper()`, actually returns a brand-new string object rather than altering the original. In practice, this means you must reassign the result back to a variable (`text = text.upper()`) to keep the change, and it also makes strings safe to use as dictionary keys since their value never changes unexpectedly.

**Q2: What is the difference between `.split()` and `.join()`?**
A: `.split()` is called on a string and breaks it into a list of substrings based on a delimiter (e.g., `"a,b,c".split(",")` returns `['a', 'b', 'c']`). `.join()` is called on the delimiter string and combines a list of strings into a single string (e.g., `",".join(['a', 'b', 'c'])` returns `"a,b,c"`). They are essentially inverse operations of each other.

## Practice Coding Exercises
1. Write a program that takes a full name as input, then prints the first name and last name separately, along with the total number of characters (excluding spaces).
2. Write a program that takes a comma-separated string of numbers (e.g., `"4,8,15,16,23,42"`), splits it, converts each piece to an integer, and prints their sum and average.

## Quiz Questions
1. What does `"hello"[1:4]` return?
   - A) hel
   - B) ell
   - C) ello
   - D) hell
   - **Answer: B**

2. Which method removes leading and trailing whitespace from a string?
   - A) .trim()
   - B) .clean()
   - C) .strip()
   - D) .remove()
   - **Answer: C**

3. Are Python strings mutable or immutable?
   - A) Mutable
   - B) Immutable
   - C) Depends on the length
   - D) Only mutable inside functions
   - **Answer: B**

## Summary
Strings are one of the most frequently used data types in Python, and mastering indexing, slicing, and built-in methods is essential for text processing. Next, you'll explore lists — Python's flexible, ordered, and mutable collection type.

\newpage
# Topic 8: Lists

## Topic Overview
This topic introduces lists, Python's most versatile built-in data structure for storing ordered, mutable collections of items.

## Learning Objectives
By the end of this topic, learners will be able to:
- Create, index, and slice lists
- Add, remove, and modify list elements
- Use common list methods and list comprehensions
- Understand list mutability and nested lists

## What Exactly Is It?
A list is an ordered, mutable collection that can hold items of any data type, including a mix of types, and even other lists. Lists are defined using square brackets, e.g., `[1, 2, 3]`. Because lists are mutable, you can change, add, or remove elements after the list is created, which makes them ideal for collections of data that change over time.

## Key Concepts
- **Creation**: `fruits = ["apple", "banana", "cherry"]`
- **Indexing/Slicing**: `fruits[0]`, `fruits[1:3]`
- **Mutability**: `fruits[0] = "mango"` changes the list in place
- **Common methods**: `.append()`, `.insert()`, `.remove()`, `.pop()`, `.sort()`, `.reverse()`
- **List comprehension**: A concise way to build lists, e.g., `[x*2 for x in range(5)]`
- **Nested lists**: Lists containing other lists, useful for representing grids or tables

## Program Examples

### Example 1: Creating, Modifying, and Sorting a List
```python
scores = [88, 92, 79, 95, 60]

scores.append(100)
scores.remove(60)
scores.sort()

print(scores)
print("Highest score:", scores[-1])
print("Number of scores:", len(scores))
```
**Expected Output:**
```
[79, 88, 92, 95, 100]
Highest score: 100
Number of scores: 5
```
**Explanation:** `.append()` adds an item to the end of the list, `.remove()` deletes the first matching value, and `.sort()` rearranges the list in ascending order in place. Negative indexing (`scores[-1]`) conveniently accesses the last element without needing to know the list's length.

### Example 2: List Comprehension and Nested Lists
```python
squares = [n ** 2 for n in range(1, 6)]
print(squares)

even_squares = [n ** 2 for n in range(1, 11) if n % 2 == 0]
print(even_squares)

matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(matrix[1][2])

for row in matrix:
    print(row)
```
**Expected Output:**
```
[1, 4, 9, 16, 25]
[4, 16, 36, 64, 100]
6
[1, 2, 3]
[4, 5, 6]
[7, 8, 9]
```
**Explanation:** List comprehensions provide a compact syntax for building a new list by applying an expression to every item in an iterable, optionally filtered with an `if` clause. `matrix[1][2]` accesses the third element (index 2) of the second inner list (index 1), demonstrating how nested lists model 2D data like grids.

## Real-World Use Cases
- Storing a shopping cart's items, a to-do list, or a playlist of songs
- Representing rows of data read from a CSV file before processing
- Building 2D grids for games (tic-tac-toe boards, spreadsheets)
- Collecting and transforming data efficiently with list comprehensions

## Features
- Lists preserve insertion order and allow duplicate values
- Support slicing, concatenation (`+`), and repetition (`*`)
- Can be sorted with custom keys using `sorted(list, key=...)`
- Support nesting to arbitrary depth

## Advantages
- Highly flexible — one structure handles many use cases (stacks, queues, buffers)
- Rich set of built-in methods reduces the need for manual loops
- List comprehensions make transformations concise and readable

## Best Practices
- Use list comprehensions for simple transformations, but fall back to regular loops for complex logic
- Avoid modifying a list while iterating over it directly — iterate over a copy instead
- Use `.append()` in a loop rather than `+` concatenation for building large lists (better performance)
- Choose meaningful, plural variable names for lists (e.g., `students`, not `s`)

## Interview Questions
**Q1: What is the difference between `.remove()` and `.pop()` on a list?**
A: `.remove(value)` deletes the first occurrence of a specific value from the list and does not return anything useful; if the value isn't found, it raises a `ValueError`. `.pop(index)` removes and returns the element at a given index (defaulting to the last element if no index is given), which is useful when you need the removed value.

**Q2: What is a list comprehension, and why is it preferred over a traditional loop in many cases?**
A: A list comprehension is a concise syntax, `[expression for item in iterable if condition]`, for creating a new list by applying an expression to each item in an iterable, optionally filtering with a condition. It's often preferred because it's more readable and typically faster than an equivalent explicit `for` loop with `.append()` calls, though very complex logic is usually clearer as a regular loop.

## Practice Coding Exercises
1. Create a list of 10 numbers. Use a list comprehension to build a new list containing only the numbers greater than the average of the original list.
2. Write a program that manages a simple to-do list: start with an empty list, add three tasks using `.append()`, remove one task using `.remove()`, and print the final list along with the number of remaining tasks.

## Quiz Questions
1. Which method adds an item to the end of a list?
   - A) .add()
   - B) .append()
   - C) .insert()
   - D) .extend_one()
   - **Answer: B**

2. What does `[x for x in range(5) if x % 2 == 0]` produce?
   - A) [0, 2, 4]
   - B) [1, 3]
   - C) [0, 1, 2, 3, 4]
   - D) [2, 4]
   - **Answer: A**

3. Are Python lists mutable?
   - A) Yes
   - B) No
   - C) Only if declared with `mutable=True`
   - D) Only numeric lists
   - **Answer: A**

## Summary
Lists are Python's go-to structure for ordered, changeable collections of data, supporting powerful methods and comprehensions for manipulation. Next, you'll learn about tuples — an immutable alternative to lists — and when to use them instead.

\newpage

# Topic 9: Tuples

## Topic Overview
This topic introduces tuples, Python's ordered, immutable collection type, and explains when to use them instead of lists.

## Learning Objectives
By the end of this topic, learners will be able to:
- Create and access elements in a tuple
- Understand why and when tuples are immutable
- Use tuple unpacking
- Recognize practical use cases for tuples over lists

## What Exactly Is It?
A tuple is an ordered collection of items, similar to a list, but immutable — once created, its elements cannot be changed, added, or removed. Tuples are defined using parentheses, e.g., `(1, 2, 3)`. Because they cannot be modified, tuples are often used to represent fixed collections of related values, such as coordinates or database records.

## Key Concepts
- **Creation**: `point = (3, 4)` or without parentheses: `point = 3, 4`
- **Immutability**: Elements cannot be changed after creation
- **Indexing/Slicing**: Works the same way as lists
- **Tuple unpacking**: `x, y = point` assigns each element to a separate variable
- **Single-element tuple**: Requires a trailing comma, e.g., `(5,)`
- **Use as dictionary keys**: Tuples can be used as keys since they are hashable (lists cannot)

## Program Examples

### Example 1: Creating Tuples and Unpacking
```python
coordinates = (10, 20)
person = ("Alice", 30, "Engineer")

x, y = coordinates
name, age, job = person

print(f"X: {x}, Y: {y}")
print(f"{name} is a {age}-year-old {job}.")
```
**Expected Output:**
```
X: 10, Y: 20
Alice is a 30-year-old Engineer.
```
**Explanation:** Tuple unpacking lets you assign each element of a tuple to its own variable in a single line, which is cleaner than accessing elements by index one at a time. This is widely used when a function returns multiple values as a tuple.

### Example 2: Immutability and Tuples as Dictionary Keys
```python
locations = {
    (28.6139, 77.2090): "New Delhi",
    (40.7128, -74.0060): "New York"
}

print(locations[(28.6139, 77.2090)])

point = (1, 2)
try:
    point[0] = 99
except TypeError as e:
    print("Error:", e)
```
**Expected Output:**
```
New Delhi
Error: 'tuple' object does not support item assignment
```
**Explanation:** Because tuples are hashable and immutable, they can safely be used as dictionary keys — something lists cannot do. Attempting to modify a tuple element directly raises a `TypeError`, confirming that tuples truly cannot be changed after creation.

## Real-World Use Cases
- Representing fixed data like geographic coordinates (latitude, longitude)
- Returning multiple values from a function (e.g., `return min_val, max_val`)
- Using as dictionary keys when a composite, unchangeable key is needed
- Representing database rows or records that shouldn't be altered accidentally

## Features
- Slightly more memory-efficient and faster to iterate over than lists
- Support the same indexing, slicing, and `len()` operations as lists
- Can contain mutable objects (like lists) inside them, though the tuple's own structure stays fixed

## Advantages
- Immutability provides safety — data cannot be accidentally modified
- Hashability allows use as dictionary keys or set elements
- Signals intent in code: "this collection of values should not change"

## Best Practices
- Use tuples for fixed, related groups of values (e.g., RGB colors, coordinates)
- Use lists instead when the collection needs to grow, shrink, or be reordered
- Use tuple unpacking to make functions returning multiple values easy to consume
- Add a trailing comma for single-element tuples to avoid accidentally creating a plain value

## Interview Questions
**Q1: Why would you choose a tuple over a list in Python?**
A: You would choose a tuple when the data represents a fixed collection of values that should not change during the program's execution, such as coordinates or configuration constants. Tuples are also required when you need a hashable collection to use as a dictionary key or set element, since lists are unhashable due to their mutability.

**Q2: Can a tuple contain mutable objects like lists? Does that violate immutability?**
A: Yes, a tuple can contain mutable objects, such as `t = ([1, 2], "a")`. This does not violate the tuple's immutability in a strict sense — the tuple itself always references the same objects in the same positions and cannot be resized or have its elements reassigned. However, if one of those referenced objects (like a list) is itself mutable, its internal contents can still be changed, even though the tuple structure remains fixed.

## Practice Coding Exercises
1. Write a function that takes a list of numbers and returns a tuple containing the minimum, maximum, and average of the list. Unpack the result into three variables and print them.
2. Create a dictionary that maps (year, month) tuples to a sales figure for at least three different periods, then print the sales figure for a specific (year, month) key.

## Quiz Questions
1. How do you define a tuple with a single element `5`?
   - A) (5)
   - B) [5]
   - C) (5,)
   - D) {5}
   - **Answer: C**

2. Which of these can be used as a dictionary key?
   - A) A list
   - B) A tuple
   - C) A set
   - D) A dictionary
   - **Answer: B**

3. What happens if you try to modify a tuple element directly?
   - A) It updates successfully
   - B) It raises a TypeError
   - C) It converts to a list automatically
   - D) It raises a SyntaxError
   - **Answer: B**

## Summary
Tuples provide an immutable, ordered way to group related values, offering safety and hashability that lists cannot. Next, you'll explore sets — an unordered collection type optimized for uniqueness and fast membership testing.

\newpage

# Topic 10: Sets

## Topic Overview
This topic introduces sets, an unordered collection of unique elements in Python, along with the mathematical set operations they support.

## Learning Objectives
By the end of this topic, learners will be able to:
- Create sets and understand their uniqueness property
- Add and remove elements from a set
- Perform set operations: union, intersection, difference, symmetric difference
- Identify practical scenarios where sets outperform lists

## What Exactly Is It?
A set is an unordered collection of unique, hashable elements. Unlike lists, sets automatically eliminate duplicate values and do not preserve insertion order. Sets are defined using curly braces, e.g., `{1, 2, 3}`, or the `set()` constructor for an empty set (since `{}` creates an empty dictionary, not a set). Sets are optimized for fast membership testing and mathematical set operations like union and intersection.

## Key Concepts
- **Creation**: `s = {1, 2, 3}` or `s = set([1, 2, 2, 3])` which becomes `{1, 2, 3}`
- **Uniqueness**: Duplicate values are automatically removed
- **Unordered**: Sets do not maintain a guaranteed order of elements
- **Common methods**: `.add()`, `.remove()`, `.discard()`, `.union()`, `.intersection()`, `.difference()`
- **Set operators**: `|` (union), `&` (intersection), `-` (difference), `^` (symmetric difference)
- **Membership testing**: `in` is extremely fast on sets (O(1) average time complexity)

## Program Examples

### Example 1: Removing Duplicates and Basic Set Operations
```python
numbers = [1, 2, 2, 3, 4, 4, 4, 5]
unique_numbers = set(numbers)

print(unique_numbers)
print(len(unique_numbers))

unique_numbers.add(10)
unique_numbers.discard(1)
print(unique_numbers)
```
**Expected Output:**
```
{1, 2, 3, 4, 5}
5
{2, 3, 4, 5, 10}
```
**Explanation:** Converting a list to a `set()` automatically removes duplicate values. `.add()` inserts a new element, and `.discard()` removes an element if it exists (unlike `.remove()`, it won't raise an error if the element is missing). Note the printed order may not match insertion order since sets are unordered.

### Example 2: Set Operations (Union, Intersection, Difference)
```python
python_devs = {"Alice", "Bob", "Charlie", "Dana"}
java_devs = {"Charlie", "Dana", "Eve", "Frank"}

both = python_devs & java_devs
either = python_devs | java_devs
only_python = python_devs - java_devs
unique_to_one = python_devs ^ java_devs

print("Knows both:", both)
print("Knows either:", either)
print("Only Python:", only_python)
print("Only one language:", unique_to_one)
```
**Expected Output:**
```
Knows both: {'Charlie', 'Dana'}
Knows either: {'Alice', 'Bob', 'Charlie', 'Dana', 'Eve', 'Frank'}
Only Python: {'Alice', 'Bob'}
Only one language: {'Alice', 'Bob', 'Eve', 'Frank'}
```
**Explanation:** `&` (intersection) returns elements common to both sets. `|` (union) combines all unique elements from both sets. `-` (difference) returns elements in the first set but not the second. `^` (symmetric difference) returns elements that appear in exactly one of the two sets, but not both.

## Real-World Use Cases
- Removing duplicate entries from a dataset or list of user IDs
- Finding common elements between two groups (e.g., mutual friends, shared skills)
- Fast membership checks in large collections (e.g., checking if a username is already taken)
- Tag systems where each item has a unique set of associated tags

## Features
- Sets are mutable, but their elements must be immutable/hashable (no lists or dicts as elements)
- `frozenset` provides an immutable version of a set
- Set comprehensions are supported: `{x**2 for x in range(5)}`

## Advantages
- Extremely fast membership testing compared to lists (especially for large collections)
- Automatic deduplication simplifies cleaning data
- Built-in support for mathematical set theory operations

## Best Practices
- Use sets when you need uniqueness or fast membership checks, not when order matters
- Use `frozenset` when you need an immutable, hashable set (e.g., as a dictionary key)
- Prefer `.discard()` over `.remove()` when the element's presence isn't guaranteed, to avoid exceptions
- Convert back to a list (`list(my_set)`) if you need indexing or a specific order

## Interview Questions
**Q1: Why is checking membership (`in`) generally faster in a set than in a list?**
A: Sets are implemented using a hash table internally, so checking whether an element exists involves computing its hash and looking it up directly, giving average O(1) constant time complexity. Lists, on the other hand, require scanning elements one by one in the worst case, giving O(n) linear time complexity, since there's no hash-based shortcut for arbitrary elements.

**Q2: What is the difference between `.remove()` and `.discard()` on a set?**
A: Both methods remove an element from a set, but `.remove()` raises a `KeyError` if the element is not present in the set, while `.discard()` does nothing and raises no error if the element isn't found. `.discard()` is generally safer when you're not certain the element exists.

## Practice Coding Exercises
1. Given two lists of email addresses that may contain duplicates, use sets to find and print the email addresses that appear in both lists.
2. Write a program that reads a sentence, splits it into words, and uses a set to print only the unique words along with a count of how many unique words were found.

## Quiz Questions
1. What happens to duplicate values when a list is converted to a set?
   - A) They are kept in order
   - B) They are automatically removed
   - C) They cause an error
   - D) They are converted to strings
   - **Answer: B**

2. Which operator returns elements common to two sets?
   - A) |
   - B) -
   - C) &
   - D) ^
   - **Answer: C**

3. Which of the following can be an element of a set?
   - A) A list
   - B) A dictionary
   - C) A tuple
   - D) Another set
   - **Answer: C**

## Summary
Sets provide a fast, unordered collection of unique elements, along with powerful mathematical operations like union and intersection. Next, you'll learn about dictionaries — Python's key-value mapping structure, essential for representing structured data.

\newpage
# Topic 11: Dictionaries

## Topic Overview
This topic covers dictionaries, Python's built-in key-value mapping structure used to represent structured, labeled data.

## Learning Objectives
By the end of this topic, learners will be able to:
- Create and access dictionary key-value pairs
- Add, update, and remove entries
- Iterate over dictionary keys, values, and items
- Use dictionary comprehensions and nested dictionaries

## What Exactly Is It?
A dictionary is an unordered (technically insertion-ordered since Python 3.7+) collection of key-value pairs, where each key must be unique and hashable, and maps to a corresponding value. Dictionaries are defined with curly braces, e.g., `{"name": "Alex", "age": 30}`. They are ideal for representing structured records, configuration settings, or any data best described by labeled fields rather than a plain sequence.

## Key Concepts
- **Creation**: `person = {"name": "Alex", "age": 30}`
- **Access**: `person["name"]` or the safer `person.get("name")`
- **Adding/Updating**: `person["email"] = "alex@example.com"`
- **Removing**: `.pop()`, `del person["age"]`
- **Iteration**: `.keys()`, `.values()`, `.items()`
- **Dictionary comprehension**: `{k: v for k, v in ...}`
- **Nested dictionaries**: Dictionaries containing other dictionaries as values

## Program Examples

### Example 1: Creating, Accessing, and Updating a Dictionary
```python
student = {"name": "Riya", "age": 21, "major": "Computer Science"}

print(student["name"])
print(student.get("gpa", "Not recorded"))

student["gpa"] = 3.8
student["age"] = 22

for key, value in student.items():
    print(f"{key}: {value}")
```
**Expected Output:**
```
Riya
Not recorded
name: Riya
age: 22
major: Computer Science
gpa: 3.8
```
**Explanation:** `.get()` safely retrieves a value and returns a default (here, `"Not recorded"`) instead of raising an error if the key doesn't exist, unlike direct bracket access. Assigning to a new key adds it to the dictionary, while assigning to an existing key updates its value. `.items()` returns key-value pairs for iteration.

### Example 2: Nested Dictionaries and Dictionary Comprehension
```python
employees = {
    "E101": {"name": "Sam", "department": "Sales", "salary": 55000},
    "E102": {"name": "Lee", "department": "Engineering", "salary": 72000}
}

print(employees["E102"]["department"])

raises = {emp_id: info["salary"] * 1.10 for emp_id, info in employees.items()}
print(raises)
```
**Expected Output:**
```
Engineering
{'E101': 60500.00000000001, 'E102': 79200.00000000001}
```
**Explanation:** Nested dictionaries let you model complex, hierarchical data — here, each employee ID maps to another dictionary of details. The dictionary comprehension builds a new dictionary by applying a 10% raise calculation to each employee's salary, demonstrating how comprehensions can transform data concisely, similar to list comprehensions.

## Real-World Use Cases
- Representing JSON-like API responses (dictionaries map naturally to JSON objects)
- Storing configuration settings (e.g., `{"debug": True, "timeout": 30}`)
- Counting word frequency or occurrences in text analysis
- Modeling database records with named fields (user profiles, product catalogs)

## Features
- Keys must be hashable (strings, numbers, tuples); values can be any type
- Maintains insertion order since Python 3.7
- Supports `dict.fromkeys()`, `.setdefault()`, and merging with `|` (Python 3.9+)
- `.update()` merges another dictionary's key-value pairs into the current one

## Advantages
- O(1) average time complexity for lookups, insertions, and deletions
- Naturally represents structured, labeled data, making code self-documenting
- Extremely flexible — values can be lists, other dictionaries, or even functions

## Best Practices
- Use `.get()` with a default value instead of direct indexing to avoid `KeyError`
- Use descriptive key names that clearly represent the data they hold
- Prefer dictionary comprehensions for simple transformations over manual loops
- When iterating, use `.items()` if you need both keys and values, rather than looking up values inside the loop

## Interview Questions
**Q1: What is the difference between accessing a dictionary with `dict[key]` versus `dict.get(key)`?**
A: `dict[key]` raises a `KeyError` if the key does not exist in the dictionary, which can crash the program if not handled with a try-except block. `dict.get(key, default)` returns `None` (or a specified default value) instead of raising an error, making it a safer choice when a key's presence isn't guaranteed.

**Q2: Are Python dictionaries ordered or unordered?**
A: As of Python 3.7, dictionaries maintain insertion order as a guaranteed language feature — iterating over a dictionary returns key-value pairs in the order they were added. Before Python 3.7, dictionary order was not guaranteed and could vary between implementations, so relying on order in older code was considered unsafe.

## Practice Coding Exercises
1. Write a program that counts the frequency of each word in a given sentence and stores the results in a dictionary, then prints each word with its count.
2. Create a dictionary representing a small inventory system (item name as key, quantity as value). Write code to add a new item, update an existing item's quantity, remove an item, and print the final inventory.

## Quiz Questions
1. What does `my_dict.get("x", 0)` do if `"x"` is not a key in `my_dict`?
   - A) Raises a KeyError
   - B) Returns None
   - C) Returns 0
   - D) Adds "x": 0 to the dictionary
   - **Answer: C**

2. Which method returns key-value pairs for iteration?
   - A) .keys()
   - B) .values()
   - C) .items()
   - D) .pairs()
   - **Answer: C**

3. Since which Python version do dictionaries guarantee insertion order?
   - A) 2.7
   - B) 3.0
   - C) 3.5
   - D) 3.7
   - **Answer: D**

## Summary
Dictionaries provide a powerful way to store and access labeled, structured data using unique keys. You learned how to create, update, iterate, and transform dictionaries, including nested structures. Next, you'll learn about functions — the primary way to organize and reuse code in Python.

\newpage

# Topic 12: Functions

## Topic Overview
This topic introduces functions, the fundamental building block for organizing, reusing, and structuring Python code.

## Learning Objectives
By the end of this topic, learners will be able to:
- Define and call functions with `def`
- Use parameters, default arguments, and return values
- Understand variable scope (local vs global)
- Use `*args` and `**kwargs` for flexible function signatures

## What Exactly Is It?
A function is a named, reusable block of code that performs a specific task, defined using the `def` keyword. Functions accept input values called parameters, execute a series of statements, and can optionally send a result back using `return`. Functions help avoid repeating code, make programs easier to test and debug, and allow complex problems to be broken into smaller, manageable pieces.

## Key Concepts
- **Definition**: `def greet(name):` followed by an indented function body
- **Parameters vs Arguments**: Parameters are names in the definition; arguments are the actual values passed when calling
- **Default arguments**: `def greet(name="Guest"):`
- **Return values**: `return` sends a value back to the caller; without it, a function returns `None`
- **Scope**: Variables defined inside a function (local scope) are not visible outside it (global scope)
- **`*args`/`**kwargs`**: Allow a function to accept a variable number of positional/keyword arguments

## Program Examples

### Example 1: Defining Functions with Default Arguments and Return Values
```python
def calculate_total(price, quantity, discount=0):
    subtotal = price * quantity
    total = subtotal - (subtotal * discount)
    return total

result1 = calculate_total(50, 3)
result2 = calculate_total(50, 3, discount=0.1)

print(f"Total without discount: {result1}")
print(f"Total with 10% discount: {result2}")
```
**Expected Output:**
```
Total without discount: 150
Total with 10% discount: 135.0
```
**Explanation:** The `discount` parameter has a default value of `0`, so it's optional when calling the function. `return` sends the calculated `total` back to the caller, where it's stored in a variable and used later — without `return`, the function would produce `None` instead of a usable value.

### Example 2: Variable Scope and *args/**kwargs
```python
counter = 0

def increment(amount):
    global counter
    counter += amount

increment(5)
increment(3)
print("Counter:", counter)

def summarize(*numbers, **labels):
    print("Numbers:", numbers)
    print("Sum:", sum(numbers))
    for key, value in labels.items():
        print(f"{key}: {value}")

summarize(4, 8, 15, title="Report", author="Dana")
```
**Expected Output:**
```
Counter: 8
Numbers: (4, 8, 15)
Sum: 27
title: Report
author: Dana
```
**Explanation:** The `global` keyword allows a function to modify a variable defined outside its local scope; without it, `counter += amount` would raise an error since Python would treat `counter` as a new local variable. `*numbers` collects any number of positional arguments into a tuple, and `**labels` collects keyword arguments into a dictionary, giving the function flexible, open-ended input handling.

## Real-World Use Cases
- Encapsulating reusable business logic (e.g., tax calculation, validation rules)
- Building utility functions used across an entire application (formatting dates, parsing files)
- Creating flexible APIs that accept optional configuration through keyword arguments
- Structuring large programs into smaller, testable units

## Features
- Functions are first-class objects — they can be assigned to variables, passed as arguments, and returned from other functions
- Support docstrings for documentation: `"""Describes what the function does"""`
- Can have multiple return values via tuples: `return min_val, max_val`
- Support type hints for clarity: `def add(a: int, b: int) -> int:`

## Advantages
- Promotes code reuse and reduces duplication (DRY principle: Don't Repeat Yourself)
- Makes testing easier since each function can be tested in isolation
- Improves readability by giving named, self-documenting blocks of logic
- Supports flexible interfaces via default arguments and *args/**kwargs

## Best Practices
- Keep functions small and focused on a single task (single responsibility principle)
- Use descriptive function and parameter names
- Add docstrings to explain what a function does, its parameters, and its return value
- Avoid excessive use of global variables; prefer passing values as parameters and returning results
- Use type hints for better code clarity and IDE support

## Interview Questions
**Q1: What is the difference between a parameter and an argument?**
A: A parameter is the name listed in a function's definition, acting as a placeholder for the value it will receive (e.g., `name` in `def greet(name):`). An argument is the actual value passed to the function when it is called (e.g., `"Alice"` in `greet("Alice")`). The distinction is subtle but commonly tested in interviews to check understanding of function terminology.

**Q2: What is the purpose of `*args` and `**kwargs` in a function definition?**
A: `*args` allows a function to accept any number of additional positional arguments, which are collected into a tuple inside the function. `**kwargs` allows a function to accept any number of additional keyword arguments, collected into a dictionary. Together, they let you write flexible functions whose exact signature doesn't need to be fixed in advance, which is especially useful for wrapper functions and APIs with optional settings.

## Practice Coding Exercises
1. Write a function `is_prime(number)` that returns `True` if the number is prime and `False` otherwise. Test it with several values.
2. Write a function `describe_person(name, age, **extra_info)` that prints the name and age, then prints any additional keyword arguments (like city or occupation) passed to it.

## Quiz Questions
1. What does a function return if it has no explicit `return` statement?
   - A) 0
   - B) An empty string
   - C) None
   - D) An error is raised
   - **Answer: C**

2. What does `**kwargs` collect inside a function?
   - A) A list of positional arguments
   - B) A dictionary of keyword arguments
   - C) A tuple of all arguments
   - D) A set of unique arguments
   - **Answer: B**

3. What keyword allows a function to modify a variable defined outside its scope?
   - A) nonlocal
   - B) external
   - C) global
   - D) outer
   - **Answer: C**

## Summary
Functions are essential for writing clean, reusable, and organized Python code, supporting default arguments, flexible signatures, and clear scoping rules. Next, you'll learn how to handle errors gracefully using exception handling.

\newpage

# Topic 13: Exception Handling (Basics)

## Topic Overview
This topic covers how to detect and gracefully handle runtime errors in Python using `try`, `except`, `else`, and `finally` blocks.

## Learning Objectives
By the end of this topic, learners will be able to:
- Understand what exceptions are and why they occur
- Use `try-except` blocks to catch and handle errors
- Use `else` and `finally` clauses appropriately
- Catch specific exception types and raise custom exceptions

## What Exactly Is It?
An exception is an event that disrupts the normal flow of a program, typically caused by an error such as dividing by zero, accessing an invalid list index, or converting an invalid string to a number. Without handling, an exception causes the program to crash and print a traceback. Python's `try-except` mechanism lets you anticipate potential errors, catch them gracefully, and respond appropriately instead of letting the program terminate unexpectedly.

## Key Concepts
- **`try` block**: Contains code that might raise an exception
- **`except` block**: Contains code that runs if a specific exception occurs
- **`else` block**: Runs only if the `try` block completes without raising an exception
- **`finally` block**: Always runs, regardless of whether an exception occurred (used for cleanup)
- **Common exception types**: `ValueError`, `TypeError`, `ZeroDivisionError`, `IndexError`, `KeyError`, `FileNotFoundError`
- **`raise`**: Manually triggers an exception

## Program Examples

### Example 1: Basic try-except with Specific Exception Types
```python
def safe_divide(a, b):
    try:
        result = a / b
    except ZeroDivisionError:
        print("Error: Cannot divide by zero.")
        return None
    except TypeError:
        print("Error: Both inputs must be numbers.")
        return None
    else:
        print("Division successful.")
        return result

print(safe_divide(10, 2))
print(safe_divide(10, 0))
print(safe_divide(10, "two"))
```
**Expected Output:**
```
Division successful.
5.0
Error: Cannot divide by zero.
None
Error: Both inputs must be numbers.
None
```
**Explanation:** Each `except` block targets a specific type of error, allowing different responses for different failure conditions. The `else` block only executes when no exception occurs, keeping success-path logic separate from error handling. This targeted approach is more precise than catching all exceptions generically.

### Example 2: Using finally and Raising Custom Exceptions
```python
def withdraw(balance, amount):
    try:
        if amount > balance:
            raise ValueError("Insufficient funds")
        balance -= amount
        return balance
    except ValueError as e:
        print(f"Transaction failed: {e}")
        return balance
    finally:
        print("Transaction attempt complete.")

new_balance = withdraw(100, 150)
print("Balance:", new_balance)

new_balance = withdraw(100, 40)
print("Balance:", new_balance)
```
**Expected Output:**
```
Transaction failed: Insufficient funds
Transaction attempt complete.
Balance: 100
Transaction attempt complete.
Balance: 60
```
**Explanation:** `raise ValueError("Insufficient funds")` manually triggers an exception when a business rule is violated, even though no built-in error occurred. The `finally` block runs every single time, whether or not an exception was raised, making it ideal for logging or cleanup actions that must always happen.

## Real-World Use Cases
- Handling invalid user input gracefully instead of crashing (e.g., non-numeric entries)
- Managing file operations safely (handling missing files with `FileNotFoundError`)
- Validating business rules, such as insufficient balance or invalid quantities
- Ensuring resources like network connections or files are always closed via `finally`

## Features
- Multiple `except` blocks can handle different exception types differently
- A single `except` can catch multiple exception types using a tuple: `except (ValueError, TypeError):`
- `finally` executes even if a `return` or unhandled exception occurs in the `try` block
- Exceptions carry a descriptive message accessible via `as e`

## Advantages
- Prevents programs from crashing due to predictable, recoverable errors
- Separates error-handling logic from the main business logic, improving readability
- Enables precise handling of different error types with tailored responses
- `finally` guarantees cleanup code runs, improving reliability

## Best Practices
- Catch specific exceptions rather than using a bare `except:`, which can hide bugs
- Keep `try` blocks focused on the minimal code that might actually raise the exception
- Use `finally` for cleanup actions like closing files or releasing resources
- Provide clear, actionable error messages when raising custom exceptions

## Interview Questions
**Q1: What is the difference between the `else` and `finally` clauses in a try-except block?**
A: The `else` block runs only if the `try` block completes successfully without raising any exception, and is typically used for code that should only run on the "success path." The `finally` block always runs, regardless of whether an exception occurred or was caught, making it suitable for cleanup tasks like closing files or releasing resources that must happen no matter what.

**Q2: Why is using a bare `except:` (without specifying an exception type) generally discouraged?**
A: A bare `except:` catches all exceptions, including ones you didn't anticipate — such as `KeyboardInterrupt` or genuine bugs like a `NameError` from a typo — silently hiding problems that should be fixed rather than suppressed. It's better practice to catch specific exception types so that only expected, recoverable errors are handled, while unexpected bugs still surface with a clear traceback.

## Practice Coding Exercises
1. Write a function that takes a list and an index, and safely returns the element at that index, catching an `IndexError` and printing a friendly message if the index is out of range.
2. Write a program that repeatedly asks the user to enter a number until they provide valid numeric input, using a `try-except` block to catch `ValueError` for non-numeric entries.

## Quiz Questions
1. Which block always executes, regardless of whether an exception occurred?
   - A) try
   - B) except
   - C) else
   - D) finally
   - **Answer: D**

2. Which exception is raised when dividing a number by zero?
   - A) ValueError
   - B) ZeroDivisionError
   - C) TypeError
   - D) ArithmeticError only
   - **Answer: B**

3. What does the `raise` keyword do?
   - A) Catches an exception
   - B) Manually triggers an exception
   - C) Suppresses an exception
   - D) Logs an exception to a file
   - **Answer: B**

## Summary
Exception handling allows programs to anticipate and gracefully respond to runtime errors instead of crashing. You learned `try`, `except`, `else`, `finally`, and how to raise custom exceptions. This completes the Beginner section — next, you'll move into Intermediate topics, starting with modules and packages.

\newpage
# Topic 14: Modules & Packages

## Topic Overview
This topic explains how Python organizes code into modules and packages, and how to use both built-in and third-party libraries via `import`.

## Learning Objectives
By the end of this topic, learners will be able to:
- Import and use standard library modules
- Create custom modules and import them into other scripts
- Understand the difference between a module and a package
- Install and use third-party packages with pip

## What Exactly Is It?
A module is simply a single Python file (`.py`) containing reusable code — functions, classes, or variables — that can be imported into other scripts. A package is a directory containing multiple related modules, identified by an `__init__.py` file (optional since Python 3.3 but still common). Modules and packages let you organize large codebases into logical, reusable, and maintainable units instead of writing everything in one giant file.

## Key Concepts
- **`import module_name`**: Loads an entire module
- **`from module_name import function_name`**: Imports specific items from a module
- **`import module_name as alias`**: Imports with a shorter alias, e.g., `import numpy as np`
- **Standard library**: Built-in modules like `math`, `random`, `datetime`, `os`
- **Package**: A folder of modules, often with an `__init__.py` file
- **pip**: Python's package installer, used to install third-party packages from PyPI

## Program Examples

### Example 1: Using Standard Library Modules
```python
import math
import random

print(math.sqrt(64))
print(math.pi)

print(random.randint(1, 10))
sample = random.sample(range(1, 50), 5)
print(sample)
```
**Expected Output (random values will vary):**
```
8.0
3.141592653589793
7
[12, 45, 3, 29, 18]
```
**Explanation:** `math.sqrt()` computes a square root and `math.pi` provides the constant π. `random.randint(1, 10)` generates a random integer within a range (inclusive), while `random.sample()` picks a specified number of unique random elements from a range — both are built-in modules requiring no installation.

### Example 2: Creating and Importing a Custom Module
```python
# File: calculator.py
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

PI_APPROX = 3.14
```
```python
# File: main.py
import calculator
from calculator import subtract as sub

print(calculator.add(5, 3))
print(sub(10, 4))
print(calculator.PI_APPROX)
```
**Expected Output:**
```
8
6
3.14
```
**Explanation:** `calculator.py` is a custom module containing two functions and a constant. `main.py` demonstrates two import styles: importing the whole module (`import calculator`, accessed with dot notation) and importing a specific function with an alias (`from calculator import subtract as sub`), both of which are valid depending on your needs.

## Real-World Use Cases
- Using `datetime` to handle dates and times in scheduling applications
- Using `os` and `pathlib` for file system operations across projects
- Installing third-party packages like `requests` for HTTP calls or `pandas` for data analysis
- Splitting a large application into modules like `auth.py`, `database.py`, and `utils.py`

## Features
- Python ships with a vast standard library covering math, file I/O, networking, and more
- `pip install package_name` fetches packages from the Python Package Index (PyPI)
- Packages can have sub-packages, forming a nested directory structure
- `__name__ == "__main__"` lets a module run standalone or be safely imported elsewhere

## Advantages
- Encourages code reuse and reduces duplication across projects
- Keeps large codebases organized and easier to navigate
- Access to a massive ecosystem of pre-built, tested functionality via PyPI
- Namespace separation prevents naming conflicts between different modules

## Best Practices
- Group related functions and classes into clearly named modules
- Use virtual environments to manage package dependencies per project
- Avoid `from module import *`, which pollutes the namespace and hides where names come from
- Keep a `requirements.txt` file listing your project's dependencies and versions

## Interview Questions
**Q1: What is the difference between a module and a package in Python?**
A: A module is a single `.py` file containing Python code — functions, classes, or variables — that can be imported elsewhere. A package is a directory containing multiple related modules, typically identified by an `__init__.py` file, allowing you to organize a group of modules under a common namespace, like `mypackage.utils` or `mypackage.models`.

**Q2: What does `if __name__ == "__main__":` do, and why is it commonly used?**
A: When a Python file is run directly, its `__name__` variable is set to `"__main__"`; when the same file is imported as a module into another script, `__name__` is set to the module's actual name instead. Wrapping code in `if __name__ == "__main__":` ensures that code only runs when the file is executed directly, not when it's imported elsewhere — this is useful for including test code or a command-line interface in a module without it running unintentionally on import.

## Practice Coding Exercises
1. Create a module called `string_utils.py` with two functions: `is_palindrome(text)` and `count_vowels(text)`. Import and use both functions from a separate script.
2. Write a script that uses the `datetime` module to print the current date, and calculates how many days remain until a given future date (e.g., a birthday).

## Quiz Questions
1. Which command installs a third-party Python package?
   - A) python install package_name
   - B) pip install package_name
   - C) import package_name
   - D) get package_name
   - **Answer: B**

2. What is required (traditionally) to mark a directory as a Python package?
   - A) A setup.py file
   - B) An __init__.py file
   - C) A requirements.txt file
   - D) A main.py file
   - **Answer: B**

3. What does `from math import sqrt` allow you to do?
   - A) Use sqrt() without the math prefix
   - B) Import the entire math module
   - C) Install the math package
   - D) Rename the math module
   - **Answer: A**

## Summary
Modules and packages let you organize Python code into reusable, maintainable units, whether from the standard library, your own custom files, or third-party packages via pip. Next, you'll learn how to read from and write to files, enabling programs to persist data beyond a single run.

\newpage

# Topic 15: File Handling

## Topic Overview
This topic covers reading from and writing to files in Python, an essential skill for persisting data beyond a program's runtime.

## Learning Objectives
By the end of this topic, learners will be able to:
- Open, read, write, and close files safely
- Use the `with` statement for automatic resource management
- Work with different file modes (read, write, append)
- Handle common file-related exceptions

## What Exactly Is It?
File handling refers to the process of interacting with files stored on disk — creating, reading, writing, or appending data to them. Python provides the built-in `open()` function for this purpose, which returns a file object that supports several methods for reading and writing content. Since files are external system resources, proper handling includes ensuring they are always closed after use, which the `with` statement handles automatically.

## Key Concepts
- **`open(filename, mode)`**: Opens a file in a specified mode (`"r"`, `"w"`, `"a"`, `"r+"`)
- **`with` statement**: Automatically closes the file when the block ends, even if an error occurs
- **Reading methods**: `.read()`, `.readline()`, `.readlines()`
- **Writing methods**: `.write()`, `.writelines()`
- **File modes**: `"r"` (read), `"w"` (write, overwrites), `"a"` (append), `"x"` (create, fails if exists)
- **`FileNotFoundError`**: Raised when attempting to read a file that doesn't exist

## Program Examples

### Example 1: Writing to and Reading from a Text File
```python
with open("notes.txt", "w") as file:
    file.write("Meeting at 10 AM\n")
    file.write("Submit report by Friday\n")

with open("notes.txt", "r") as file:
    content = file.read()
    print(content)
```
**Expected Output:**
```
Meeting at 10 AM
Submit report by Friday
```
**Explanation:** The `with` statement opens the file and guarantees it will be properly closed once the indented block finishes, even if an error occurs inside it. Mode `"w"` creates the file if it doesn't exist or overwrites it if it does. `.read()` returns the entire file content as a single string.

### Example 2: Appending Data and Reading Line by Line
```python
with open("notes.txt", "a") as file:
    file.write("Call client at 2 PM\n")

with open("notes.txt", "r") as file:
    for line_number, line in enumerate(file, start=1):
        print(f"{line_number}: {line.strip()}")
```
**Expected Output:**
```
1: Meeting at 10 AM
2: Submit report by Friday
3: Call client at 2 PM
```
**Explanation:** Mode `"a"` appends new content to the end of the file without erasing existing data, unlike `"w"`. Iterating directly over a file object yields one line at a time, which is memory-efficient for large files. `.strip()` removes the trailing newline character from each line before printing.

## Real-World Use Cases
- Logging application events or errors to a text file
- Reading configuration files (e.g., `.env`, `.ini`, or `.json` files) at startup
- Processing large datasets stored in text or CSV files
- Saving user-generated content, such as notes or exported reports

## Features
- Supports both text mode (default) and binary mode (`"rb"`, `"wb"`) for non-text files like images
- Can specify encoding explicitly, e.g., `open(file, "r", encoding="utf-8")`
- Works seamlessly with the `os` and `pathlib` modules for path manipulation
- Supports reading/writing multiple files simultaneously within nested `with` blocks

## Advantages
- The `with` statement eliminates the risk of forgetting to close files, preventing resource leaks
- Simple, consistent API regardless of file size or type
- Text and binary modes cover virtually all file-processing needs

## Best Practices
- Always use the `with` statement instead of manually calling `.close()`
- Specify the encoding explicitly (usually `"utf-8"`) to avoid platform-dependent issues
- Catch `FileNotFoundError` when reading files that might not exist
- Avoid loading extremely large files entirely into memory with `.read()`; process them line by line instead

## Interview Questions
**Q1: Why is the `with` statement preferred over manually opening and closing files?**
A: The `with` statement uses a context manager that automatically closes the file when the block exits, even if an exception is raised inside it. Manually calling `.close()` requires remembering to do so in every code path, including error cases, which is error-prone; forgetting to close a file can lead to resource leaks or data not being properly flushed to disk.

**Q2: What is the difference between file modes `"w"` and `"a"`?**
A: Mode `"w"` (write) opens a file for writing and truncates (erases) any existing content, or creates a new file if it doesn't exist. Mode `"a"` (append) opens a file for writing but adds new content to the end of the file, preserving whatever was already there, or creates the file if it doesn't exist.

## Practice Coding Exercises
1. Write a program that asks the user to enter several lines of text (until they type "stop") and saves each line to a file called `journal.txt`, one entry per line.
2. Write a program that reads a text file and counts the total number of lines, words, and characters in it, printing all three counts.

## Quiz Questions
1. Which file mode appends data without erasing existing content?
   - A) "w"
   - B) "r"
   - C) "a"
   - D) "x"
   - **Answer: C**

2. What is the main benefit of using the `with` statement when working with files?
   - A) Faster file reading
   - B) Automatic file closing, even on errors
   - C) Automatic encoding detection
   - D) Smaller file sizes
   - **Answer: B**

3. Which exception is raised when trying to read a nonexistent file?
   - A) IOError only
   - B) ValueError
   - C) FileNotFoundError
   - D) TypeError
   - **Answer: C**

## Summary
File handling allows Python programs to persist and retrieve data beyond a single execution using `open()`, read/write methods, and the `with` statement for safe resource management. Next, you'll begin exploring Object-Oriented Programming, starting with classes and objects.

\newpage
# Topic 16: Object-Oriented Programming (Classes & Objects)

## Topic Overview
This topic introduces Object-Oriented Programming (OOP) in Python, covering how to define classes and create objects (instances) from them.

## Learning Objectives
By the end of this topic, learners will be able to:
- Define a class using the `class` keyword
- Create objects (instances) from a class
- Use the `__init__` constructor and instance attributes
- Define and call instance methods

## What Exactly Is It?
Object-Oriented Programming is a paradigm that organizes code around "objects" — bundles of data (attributes) and behavior (methods) — rather than just functions and logic. A class is a blueprint that defines what attributes and methods its objects will have, while an object (or instance) is a specific realization of that class with its own data. For example, a `Car` class might define that every car has a color and can `drive()`, while individual `Car` objects represent specific cars like a red Car or a blue Car.

## Key Concepts
- **`class`**: Keyword used to define a new class
- **`__init__`**: The constructor method, automatically called when a new object is created
- **`self`**: Refers to the specific instance the method is being called on
- **Instance attributes**: Data unique to each object, set inside `__init__`
- **Instance methods**: Functions defined inside a class that operate on an object's data
- **Instantiation**: Creating an object from a class, e.g., `my_car = Car("red")`

## Program Examples

### Example 1: Defining a Class and Creating Objects
```python
class Car:
    def __init__(self, brand, color):
        self.brand = brand
        self.color = color
        self.speed = 0

    def accelerate(self, amount):
        self.speed += amount
        print(f"{self.color} {self.brand} is now going {self.speed} km/h")

car1 = Car("Toyota", "Red")
car2 = Car("Honda", "Blue")

car1.accelerate(20)
car1.accelerate(15)
car2.accelerate(30)
```
**Expected Output:**
```
Red Toyota is now going 20 km/h
Red Toyota is now going 35 km/h
Blue Honda is now going 30 km/h
```
**Explanation:** `__init__` runs automatically when `Car(...)` is called, setting up each object's initial attributes. `self` refers to the specific object the method operates on, which is why `car1` and `car2` maintain completely independent `speed` values, even though they share the same class definition.

### Example 2: Class Attributes vs Instance Attributes and a String Representation
```python
class BankAccount:
    bank_name = "Global Bank"

    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

    def __str__(self):
        return f"{self.owner}'s account at {BankAccount.bank_name}: ${self.balance}"

acc1 = BankAccount("Nina", 500)
acc2 = BankAccount("Omar")

acc1.deposit(150)
acc2.deposit(75)

print(acc1)
print(acc2)
```
**Expected Output:**
```
Nina's account at Global Bank: $650
Omar's account at Global Bank: $75
```
**Explanation:** `bank_name` is a class attribute, shared by all instances of `BankAccount`, whereas `owner` and `balance` are instance attributes unique to each object. Defining `__str__` lets you control what `print(acc1)` displays — without it, printing an object would show a generic, unhelpful memory reference instead.

## Real-World Use Cases
- Modeling real-world entities in applications: users, products, orders, employees
- Building game objects like players, enemies, and items with their own state and behavior
- Representing GUI components (buttons, windows) as objects with properties and event handlers
- Structuring large applications around domain models (e.g., a `Customer` or `Invoice` class)

## Features
- Classes can have both instance methods (operate on `self`) and class-level attributes/methods
- Special "dunder" (double underscore) methods like `__init__` and `__str__` customize object behavior
- Objects maintain their own independent state even when created from the same class
- Supports composition — one class can hold objects of another class as attributes

## Advantages
- Models real-world entities naturally, making code more intuitive to design and maintain
- Encapsulates related data and behavior together, reducing scattered logic
- Enables code reuse through inheritance (covered in the next topic)
- Improves scalability for large, complex applications

## Best Practices
- Use `PascalCase` for class names (e.g., `BankAccount`) and `snake_case` for methods and attributes
- Always include `self` as the first parameter of instance methods
- Define `__str__` or `__repr__` to make objects easier to debug and display
- Keep classes focused on a single, well-defined responsibility

## Interview Questions
**Q1: What is the difference between a class and an object in Python?**
A: A class is a blueprint or template that defines the attributes and methods that its instances will have — it does not itself hold any specific data. An object (also called an instance) is a concrete realization of that class, created via instantiation, with its own actual values stored in its attributes. Multiple objects can be created from the same class, each maintaining independent state.

**Q2: What is the purpose of the `self` parameter in instance methods?**
A: `self` refers to the specific instance on which a method is called, allowing the method to access and modify that particular object's attributes. When you call `car1.accelerate(20)`, Python automatically passes `car1` as the `self` argument, which is why `self.speed` inside the method refers to `car1`'s speed specifically, not any other `Car` object's speed.

## Practice Coding Exercises
1. Create a `Rectangle` class with `width` and `height` attributes, and methods `area()` and `perimeter()` that calculate and return the respective values.
2. Create a `Student` class that stores a name and a list of grades. Add a method `average_grade()` that returns the average of the grades, and a method `add_grade(grade)` that appends a new grade to the list.

## Quiz Questions
1. Which method is automatically called when a new object is created?
   - A) __new__
   - B) __init__
   - C) __create__
   - D) __start__
   - **Answer: B**

2. What does `self` refer to inside an instance method?
   - A) The class itself
   - B) The specific object the method is called on
   - C) A global variable
   - D) The parent class
   - **Answer: B**

3. Which special method controls what `print(object)` displays?
   - A) __display__
   - B) __show__
   - C) __str__
   - D) __text__
   - **Answer: C**

## Summary
Object-Oriented Programming lets you model data and behavior together using classes and objects, with `__init__` setting up instance attributes and methods defining behavior. Next, you'll extend this foundation with inheritance and polymorphism, allowing classes to build upon one another.

\newpage

# Topic 17: Inheritance & Polymorphism

## Topic Overview
This topic covers inheritance, which allows classes to derive attributes and methods from other classes, and polymorphism, which allows different classes to be used interchangeably through a shared interface.

## Learning Objectives
By the end of this topic, learners will be able to:
- Create a child class that inherits from a parent class
- Override parent methods in a child class
- Use `super()` to call parent class methods
- Understand and apply polymorphism across related classes

## What Exactly Is It?
Inheritance allows a new class (child/subclass) to reuse the attributes and methods of an existing class (parent/superclass), while also adding or overriding behavior of its own. This avoids duplicating code across related classes. Polymorphism, closely related, means that objects of different classes can respond to the same method call in ways specific to their own class — for example, calling `.speak()` on different animal objects might produce different sounds, even though the method name is identical.

## Key Concepts
- **Parent/Base class**: The original class being inherited from
- **Child/Derived class**: A new class that inherits from a parent, defined as `class Child(Parent):`
- **Method overriding**: Redefining a parent method in the child class with new behavior
- **`super()`**: Calls a method from the parent class, often used inside an overridden `__init__`
- **Polymorphism**: The ability for different classes to be treated through a common interface, each responding in its own way
- **Multiple inheritance**: A class inheriting from more than one parent class (used cautiously)

## Program Examples

### Example 1: Inheritance with Method Overriding and super()
```python
class Employee:
    def __init__(self, name, base_salary):
        self.name = name
        self.base_salary = base_salary

    def calculate_pay(self):
        return self.base_salary

class Manager(Employee):
    def __init__(self, name, base_salary, bonus):
        super().__init__(name, base_salary)
        self.bonus = bonus

    def calculate_pay(self):
        return self.base_salary + self.bonus

emp = Employee("Tom", 4000)
mgr = Manager("Sara", 5000, 1200)

print(f"{emp.name}: ${emp.calculate_pay()}")
print(f"{mgr.name}: ${mgr.calculate_pay()}")
```
**Expected Output:**
```
Tom: $4000
Sara: $6200
```
**Explanation:** `Manager` inherits from `Employee` using `class Manager(Employee):`. `super().__init__(name, base_salary)` calls the parent's constructor to reuse its setup logic instead of duplicating it. `Manager` overrides `calculate_pay()` to include a bonus, demonstrating how a child class can customize inherited behavior.

### Example 2: Polymorphism Across Related Classes
```python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "Some generic sound"

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

animals = [Dog("Rex"), Cat("Whiskers"), Animal("Creature")]

for animal in animals:
    print(f"{animal.name} says: {animal.speak()}")
```
**Expected Output:**
```
Rex says: Woof!
Whiskers says: Meow!
Creature says: Some generic sound
```
**Explanation:** Each class defines its own version of `speak()`, but the loop calls `animal.speak()` identically for every object, regardless of its specific class. This is polymorphism in action: the same method call produces different, class-appropriate behavior, allowing the calling code to treat all animals uniformly without needing to check each type individually.

## Real-World Use Cases
- Modeling employee hierarchies with shared base logic and role-specific pay calculations
- Building UI component libraries where different widgets (buttons, sliders) share a common base class
- Game development, where different character types share core mechanics but override specific behaviors
- Plugin systems where different implementations share a common interface (e.g., different payment gateways)

## Features
- Python supports multiple inheritance, unlike some other languages
- `isinstance()` and `issubclass()` let you check class relationships at runtime
- Abstract base classes (via the `abc` module) can enforce that subclasses implement specific methods
- Method Resolution Order (MRO) determines which method is used when multiple parents define the same method

## Advantages
- Reduces code duplication by centralizing shared logic in a parent class
- Polymorphism allows flexible, extensible code that works with new subclasses without modification
- Encourages a clear hierarchy that mirrors real-world relationships between entities

## Best Practices
- Use inheritance only when there is a genuine "is-a" relationship (a Manager is an Employee)
- Prefer composition over inheritance when the relationship is "has-a" instead of "is-a"
- Always call `super().__init__()` in a child class's constructor to properly initialize inherited attributes
- Keep inheritance hierarchies shallow — deep chains become hard to understand and maintain

## Interview Questions
**Q1: What is the purpose of the `super()` function in Python?**
A: `super()` provides access to methods defined in a parent class from within a child class, most commonly used to call the parent's `__init__` method so the child class doesn't need to duplicate the parent's initialization logic. It ensures that inherited attributes are properly set up before the child class adds its own additional attributes or behavior.

**Q2: How does polymorphism improve code flexibility, using an example?**
A: Polymorphism allows code to call the same method name (e.g., `.speak()` or `.calculate_pay()`) on objects of different classes and get behavior appropriate to each object's actual type, without needing to write conditional logic to check each type explicitly. For example, a loop that calls `animal.speak()` on a list containing `Dog`, `Cat`, and generic `Animal` objects works correctly for all of them because each class provides its own implementation, making it easy to add new animal types later without changing the loop itself.

## Practice Coding Exercises
1. Create a base class `Shape` with a method `area()` that returns `0`. Create subclasses `Circle` and `Square` that override `area()` with their own correct formulas, and demonstrate polymorphism by calling `.area()` on a list of mixed shape objects.
2. Create a `Vehicle` base class with `make` and `model` attributes and a method `describe()`. Create a `ElectricVehicle` subclass that adds a `battery_range` attribute and overrides `describe()` to include the range, using `super()` to reuse the base description.

## Quiz Questions
1. Which keyword is used to call a parent class's method from a child class?
   - A) parent()
   - B) base()
   - C) super()
   - D) extend()
   - **Answer: C**

2. What is polymorphism best described as?
   - A) A class inheriting from multiple parents
   - B) Different classes responding to the same method call in their own way
   - C) Hiding data using private attributes
   - D) Creating multiple objects from one class
   - **Answer: B**

3. In `class Manager(Employee):`, which class is the parent?
   - A) Manager
   - B) Employee
   - C) Both are parents
   - D) Neither, this is invalid syntax
   - **Answer: B**

## Summary
Inheritance allows classes to reuse and extend behavior from parent classes, while polymorphism lets different classes be used interchangeably through a shared method interface. Next, you'll explore encapsulation and abstraction, two more pillars of Object-Oriented Programming that control access to data and hide implementation details.

\newpage
# Topic 18: Encapsulation & Abstraction

## Topic Overview
This topic covers encapsulation, which controls access to an object's internal data, and abstraction, which hides complex implementation details behind simple interfaces.

## Learning Objectives
By the end of this topic, learners will be able to:
- Use naming conventions to indicate private and protected attributes
- Implement getter/setter behavior using properties
- Understand and apply abstraction using abstract base classes
- Explain the benefits of hiding internal implementation details

## What Exactly Is It?
Encapsulation is the practice of bundling data and the methods that operate on it within a class, while restricting direct access to some of that data from outside the class. Python does not enforce strict private access like some languages, but uses naming conventions (`_protected`, `__private`) to signal intent. Abstraction, related but distinct, means exposing only the essential features of an object while hiding the complex internal details — for example, you can drive a car without knowing exactly how the engine works internally.

## Key Concepts
- **Public attributes**: No leading underscore, accessible freely (`self.name`)
- **Protected attributes**: Single leading underscore, a convention meaning "internal use" (`self._balance`)
- **Private attributes**: Double leading underscore, triggers name mangling (`self.__pin`)
- **Property decorator (`@property`)**: Creates a controlled, method-based way to access an attribute like a regular attribute
- **Setter methods**: Using `@attribute.setter` to validate data before assignment
- **Abstract Base Class (ABC)**: A class that cannot be instantiated directly and defines methods that subclasses must implement

## Program Examples

### Example 1: Encapsulation with Properties and Validation
```python
class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.__balance = balance

    @property
    def balance(self):
        return self.__balance

    @balance.setter
    def balance(self, amount):
        if amount < 0:
            raise ValueError("Balance cannot be negative")
        self.__balance = amount

account = BankAccount("Leo", 1000)
print(account.balance)

account.balance = 1500
print(account.balance)

try:
    account.balance = -50
except ValueError as e:
    print("Error:", e)
```
**Expected Output:**
```
1000
1500
Error: Balance cannot be negative
```
**Explanation:** `__balance` uses double-underscore naming, which Python name-mangles internally to discourage direct outside access. The `@property` decorator lets `account.balance` be read like a normal attribute while actually calling a method behind the scenes, and the `@balance.setter` validates new values before they're assigned, preventing invalid states like a negative balance.

### Example 2: Abstraction with Abstract Base Classes
```python
from abc import ABC, abstractmethod

class PaymentMethod(ABC):
    @abstractmethod
    def process_payment(self, amount):
        pass

class CreditCard(PaymentMethod):
    def process_payment(self, amount):
        return f"Charged ${amount} to credit card."

class PayPal(PaymentMethod):
    def process_payment(self, amount):
        return f"Paid ${amount} via PayPal."

payments = [CreditCard(), PayPal()]
for method in payments:
    print(method.process_payment(50))
```
**Expected Output:**
```
Charged $50 to credit card.
Paid $50 via PayPal.
```
**Explanation:** `PaymentMethod` is an abstract base class that defines `process_payment()` as a required method using `@abstractmethod`, but provides no implementation itself — attempting to instantiate `PaymentMethod()` directly would raise a `TypeError`. Each concrete subclass (`CreditCard`, `PayPal`) must implement `process_payment()` with its own logic, guaranteeing a consistent interface across different payment types while hiding the specific processing details behind that shared interface.

## Real-World Use Cases
- Protecting sensitive data like account balances or passwords from direct external modification
- Designing plugin or driver systems where each implementation must follow a required interface
- Building APIs where internal implementation can change without affecting external code that uses the class
- Validating data before it's stored, such as ensuring an age is never negative

## Features
- Python's encapsulation is convention-based rather than strictly enforced (no true "private" keyword)
- `@property` allows attribute-style access while running validation or computed logic behind the scenes
- The `abc` module enforces abstraction by preventing instantiation of incomplete abstract classes
- Name mangling (`__attr` becomes `_ClassName__attr`) discourages, but doesn't fully prevent, external access

## Advantages
- Prevents external code from placing an object into an invalid state
- Simplifies how classes are used by hiding unnecessary implementation complexity
- Abstract base classes enforce consistent interfaces across multiple implementations
- Makes future refactoring safer, since internal details can change without breaking external code

## Best Practices
- Use a single underscore (`_attr`) to signal "internal use" attributes to other developers
- Use `@property` for attributes that need validation or computed values, rather than exposing raw attributes
- Use abstract base classes when you want to guarantee that all subclasses implement certain methods
- Avoid overusing double-underscore name mangling; it's rarely necessary for typical applications

## Interview Questions
**Q1: How does Python implement encapsulation, given it lacks true "private" access modifiers like Java?**
A: Python relies on naming conventions rather than strict enforcement: a single leading underscore (`_attr`) signals that an attribute is intended for internal use only, while a double leading underscore (`__attr`) triggers name mangling, renaming the attribute internally to `_ClassName__attr` to make accidental external access harder, though not impossible. The `@property` decorator further supports encapsulation by allowing controlled, validated access to what looks like a normal attribute.

**Q2: What is the difference between encapsulation and abstraction?**
A: Encapsulation is about restricting and controlling access to an object's internal data, typically through private/protected attributes and property methods, to protect the object's integrity. Abstraction is about hiding unnecessary implementation complexity and exposing only the essential features through a simplified interface — for example, an abstract base class defines what methods a subclass must have without specifying how they work internally. Encapsulation focuses on data protection; abstraction focuses on simplifying complexity.

## Practice Coding Exercises
1. Create a `Temperature` class that stores temperature internally in Celsius but exposes a `fahrenheit` property (getter and setter) that converts to and from Fahrenheit automatically.
2. Create an abstract base class `Shape` with an abstract method `area()`. Implement at least two subclasses (e.g., `Triangle`, `Rectangle`) and write code that calculates and prints the area of each, demonstrating that `Shape` itself cannot be instantiated directly.

## Quiz Questions
1. What naming convention triggers name mangling in Python?
   - A) Single leading underscore (_attr)
   - B) Double leading underscore (__attr)
   - C) Trailing underscore (attr_)
   - D) All uppercase (ATTR)
   - **Answer: B**

2. What decorator allows a method to be accessed like a regular attribute?
   - A) @staticmethod
   - B) @classmethod
   - C) @property
   - D) @abstractmethod
   - **Answer: C**

3. What happens if you try to instantiate a class containing an `@abstractmethod` that isn't implemented?
   - A) It works normally
   - B) It raises a TypeError
   - C) It silently ignores the method
   - D) It creates an empty method automatically
   - **Answer: B**

## Summary
Encapsulation restricts and validates access to an object's internal data, while abstraction hides implementation complexity behind clean, consistent interfaces. Together, they make code safer and easier to maintain. Next, you'll learn about iterators and generators, which power Python's efficient looping mechanisms.

\newpage
# Topic 19: Iterators & Generators

## Topic Overview
This topic covers iterators, the underlying mechanism behind Python's `for` loops, and generators, a memory-efficient way to produce sequences of values lazily.

## Learning Objectives
By the end of this topic, learners will be able to:
- Explain the iterator protocol (`__iter__` and `__next__`)
- Create custom iterator classes
- Write generator functions using `yield`
- Understand the memory advantages of generators over lists

## What Exactly Is It?
An iterator is an object that produces a sequence of values, one at a time, by implementing the `__iter__()` and `__next__()` methods — it's the mechanism that powers Python's `for` loops behind the scenes. A generator is a simpler way to create an iterator using a function with the `yield` keyword instead of `return`. Each time `yield` is hit, the function pauses and remembers its state, resuming exactly where it left off the next time a value is requested, rather than computing and storing an entire sequence in memory at once.

## Key Concepts
- **Iterable**: An object capable of returning an iterator (e.g., lists, strings, dictionaries)
- **Iterator**: An object with `__next__()`, which returns the next value or raises `StopIteration`
- **`iter()`/`next()`**: Built-in functions to get an iterator and manually retrieve its next value
- **Generator function**: A function containing `yield`, which returns a generator object when called
- **Lazy evaluation**: Values are produced on demand, not computed all at once
- **Generator expression**: A concise generator syntax similar to list comprehensions, e.g., `(x**2 for x in range(5))`

## Program Examples

### Example 1: Custom Iterator Class
```python
class CountDown:
    def __init__(self, start):
        self.current = start

    def __iter__(self):
        return self

    def __next__(self):
        if self.current <= 0:
            raise StopIteration
        value = self.current
        self.current -= 1
        return value

for number in CountDown(5):
    print(number)
```
**Expected Output:**
```
5
4
3
2
1
```
**Explanation:** `__iter__` returns the object itself, making it its own iterator. `__next__` computes and returns the next value each time it's called, and raises `StopIteration` once the countdown is complete, which is exactly the signal a `for` loop listens for to know when to stop iterating.

### Example 2: Generator Function with yield
```python
def fibonacci_generator(limit):
    a, b = 0, 1
    count = 0
    while count < limit:
        yield a
        a, b = b, a + b
        count += 1

for num in fibonacci_generator(8):
    print(num, end=" ")

print()

squares = (x ** 2 for x in range(1, 6))
print(list(squares))
```
**Expected Output:**
```
0 1 1 2 3 5 8 13 
[1, 4, 9, 16, 25]
```
**Explanation:** `fibonacci_generator` uses `yield` to produce one Fibonacci number at a time, pausing its internal state between calls rather than building the entire sequence upfront. The generator expression `(x ** 2 for x in range(1, 6))` works similarly to a list comprehension but produces values lazily; wrapping it in `list()` forces it to generate and collect all values at once.

## Real-World Use Cases
- Processing extremely large files or datasets line-by-line without loading everything into memory
- Generating infinite or very long sequences (e.g., an endless stream of sensor readings)
- Building data processing pipelines where each stage lazily processes and passes along values
- Implementing custom collection classes that support `for` loop iteration

## Features
- Generators automatically implement the iterator protocol, so you don't need to write `__iter__`/`__next__` manually
- Generator state (local variables, current position) is preserved between `yield` calls
- Generators can accept values sent back into them using `.send()`
- Built-in functions like `sum()`, `list()`, and `for` loops work seamlessly with any iterator or generator

## Advantages
- Dramatically reduces memory usage for large or infinite sequences, since values are produced one at a time
- Simplifies iterator creation compared to writing a full custom class with `__iter__`/`__next__`
- Enables elegant, readable pipelines for processing streaming data
- Naturally integrates with Python's `for` loops and other iteration tools

## Best Practices
- Prefer generator functions (`yield`) over building full lists when working with large datasets
- Use generator expressions instead of list comprehensions when you don't need to store all results at once
- Remember that a generator can only be iterated once; convert to a list if you need to reuse the sequence
- Reserve custom iterator classes for cases needing more control than a simple generator function provides

## Interview Questions
**Q1: What is the key difference between a regular function and a generator function?**
A: A regular function executes completely and returns a single value (or `None`) each time it's called, with no memory of its internal state between calls. A generator function contains at least one `yield` statement; when called, it returns a generator object without running any code immediately, and each call to `next()` resumes execution from where it last paused, retaining local variable state between yields, until the function completes or hits a `return`.

**Q2: Why are generators more memory-efficient than lists for large sequences?**
A: A list stores every element in memory simultaneously, so a list of a million items requires memory for all million values at once. A generator computes and yields one value at a time, on demand, and does not retain previously yielded values — meaning only the current value and a small amount of state need to be in memory at any moment, making generators ideal for processing very large or even infinite sequences.

## Practice Coding Exercises
1. Write a generator function `even_numbers(limit)` that yields even numbers from 2 up to (and including) the limit. Use it in a `for` loop to print the first 10 even numbers.
2. Create a custom iterator class `Repeater` that takes a value and a count, and yields that value the specified number of times when iterated over with a `for` loop.

## Quiz Questions
1. Which keyword is used to define a generator function?
   - A) return
   - B) yield
   - C) generate
   - D) iterate
   - **Answer: B**

2. What exception signals that an iterator has no more values?
   - A) IterationError
   - B) StopIteration
   - C) EndOfSequence
   - D) ValueError
   - **Answer: B**

3. What is the main advantage of generators over lists for large datasets?
   - A) Faster sorting
   - B) Lower memory usage
   - C) Built-in duplicate removal
   - D) Automatic type conversion
   - **Answer: B**

## Summary
Iterators and generators provide the foundation for Python's efficient, memory-friendly iteration model, with `yield` offering a simple way to produce values lazily. Next, you'll learn about decorators, a powerful way to modify or extend function behavior without changing their code.

\newpage

# Topic 20: Decorators

## Topic Overview
This topic covers decorators, a powerful Python feature that allows you to modify or extend the behavior of functions or methods without changing their actual code.

## Learning Objectives
By the end of this topic, learners will be able to:
- Understand functions as first-class objects
- Write and apply basic decorators
- Use `@wraps` to preserve function metadata
- Create decorators that accept arguments

## What Exactly Is It?
A decorator is a function that takes another function as input, adds some functionality to it, and returns a new function — all without modifying the original function's source code. Decorators rely on the fact that in Python, functions are first-class objects, meaning they can be passed around like any other value (assigned to variables, passed as arguments, returned from other functions). The `@decorator_name` syntax placed above a function definition is simply convenient shorthand for wrapping that function with the decorator.

## Key Concepts
- **First-class functions**: Functions can be assigned to variables, passed as arguments, and returned from other functions
- **`@decorator` syntax**: Shorthand for `function = decorator(function)`
- **Wrapper function**: The inner function inside a decorator that adds behavior around the original function call
- **`*args, **kwargs`**: Used inside wrapper functions so decorators work with any function signature
- **`functools.wraps`**: Preserves the original function's name and docstring when wrapped
- **Decorators with arguments**: A decorator factory — a function that returns a decorator, allowing configuration

## Program Examples

### Example 1: A Basic Timing Decorator
```python
import time
from functools import wraps

def timer(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.4f} seconds")
        return result
    return wrapper

@timer
def slow_square(n):
    time.sleep(0.5)
    return n ** 2

result = slow_square(6)
print("Result:", result)
```
**Expected Output (timing will vary slightly):**
```
slow_square took 0.5003 seconds
Result: 36
```
**Explanation:** `@timer` wraps `slow_square` so that every call is automatically timed without modifying `slow_square`'s own code. `*args, **kwargs` in `wrapper` ensure the decorator works regardless of what arguments the decorated function accepts. `@wraps(func)` preserves `slow_square`'s original name and docstring, which would otherwise be replaced by the wrapper's metadata.

### Example 2: A Decorator That Accepts Arguments (Decorator Factory)
```python
def repeat(times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(times):
                func(*args, **kwargs)
        return wrapper
    return decorator

@repeat(times=3)
def greet(name):
    print(f"Hello, {name}!")

greet("Zara")
```
**Expected Output:**
```
Hello, Zara!
Hello, Zara!
Hello, Zara!
```
**Explanation:** `repeat(times)` is a decorator factory — it doesn't decorate a function directly, but instead returns a decorator configured with the given `times` value. This extra layer of nesting allows `@repeat(times=3)` to pass a parameter into the decoration process, something a plain decorator (like `@timer` in the previous example) cannot do directly.

## Real-World Use Cases
- Logging function calls, arguments, and execution time for debugging or monitoring
- Enforcing authentication or permission checks before a function runs (common in web frameworks like Flask/Django)
- Caching expensive function results (`functools.lru_cache` is a built-in example)
- Validating input arguments automatically before the main function logic executes

## Features
- Multiple decorators can be stacked on a single function, applied bottom to top
- Python includes built-in decorators like `@staticmethod`, `@classmethod`, and `@property`
- `functools.lru_cache` is a ready-made decorator for memoizing function results
- Decorators can be applied to both standalone functions and class methods

## Advantages
- Adds reusable, cross-cutting functionality (logging, timing, caching) without cluttering core logic
- Keeps the original function's code clean and focused on its primary purpose
- Promotes the DRY principle by centralizing repeated behavior in one decorator
- Stackable, allowing multiple independent behaviors to be layered onto a single function

## Best Practices
- Always use `@functools.wraps(func)` inside custom decorators to preserve metadata
- Keep decorators general-purpose using `*args, **kwargs` unless intentionally restricting signatures
- Avoid overusing decorators for logic that would be clearer as a regular function call
- Document what a decorator does, since its effect isn't visible in the decorated function's own code

## Interview Questions
**Q1: What problem do decorators solve, and how do they rely on functions being first-class objects?**
A: Decorators solve the problem of adding reusable behavior — like logging, timing, or access control — to multiple functions without duplicating that logic inside each one or modifying the functions' source code directly. This works because Python treats functions as first-class objects: they can be passed as arguments to other functions and returned as values, which is exactly what a decorator does — it takes a function in, wraps it with additional behavior, and returns a new function.

**Q2: Why is `functools.wraps` important when writing a custom decorator?**
A: Without `functools.wraps`, the wrapper function returned by a decorator replaces the original function's metadata — its `__name__`, `__doc__`, and other attributes — with the wrapper's own, which can break introspection tools, documentation generators, and debugging since `help(decorated_function)` would show information about the generic wrapper instead of the actual function. `functools.wraps(func)` copies this metadata from the original function onto the wrapper, preserving the illusion that the decorated function looks like the original.

## Practice Coding Exercises
1. Write a decorator called `log_call` that prints the name of the function being called and its arguments before executing it, then apply it to a simple function of your choice.
2. Write a decorator factory `require_role(role)` that only allows a function to execute if a `user_role` keyword argument matches the required role; otherwise, it should print an "Access denied" message instead of running the function.

## Quiz Questions
1. What symbol is used to apply a decorator to a function?
   - A) #
   - B) @
   - C) &
   - D) %
   - **Answer: B**

2. What is the purpose of `functools.wraps`?
   - A) Speed up function execution
   - B) Preserve the original function's metadata
   - C) Convert a function into a generator
   - D) Catch exceptions automatically
   - **Answer: B**

3. What must a decorator function return?
   - A) A string
   - B) A boolean
   - C) A function (typically the wrapper)
   - D) Nothing (None)
   - **Answer: C**

## Summary
Decorators let you extend or modify function behavior cleanly and reusably, relying on Python's first-class function support. You learned to build basic decorators, preserve metadata with `functools.wraps`, and create configurable decorator factories. Next, you'll explore lambda functions along with `map`, `filter`, and `reduce` for functional-style programming.

\newpage
# Topic 21: Lambda, Map, Filter, Reduce

## Topic Overview
This topic introduces lambda functions — small, anonymous functions — and three functional programming tools that use them: `map()`, `filter()`, and `reduce()`.

## Learning Objectives
By the end of this topic, learners will be able to:
- Write lambda functions for simple, single-use logic
- Use `map()` to transform every item in an iterable
- Use `filter()` to select items matching a condition
- Use `reduce()` to combine items into a single cumulative result

## What Exactly Is It?
A lambda function is a small, anonymous (unnamed) function defined in a single line using the `lambda` keyword, typically used for short operations that don't warrant a full `def` function. `map()`, `filter()`, and `reduce()` are functional programming tools that operate on iterables: `map()` applies a function to every element, `filter()` keeps only elements that satisfy a condition, and `reduce()` (from the `functools` module) combines all elements into one accumulated value, such as a sum or product.

## Key Concepts
- **Lambda syntax**: `lambda arguments: expression`, e.g., `lambda x: x * 2`
- **`map(function, iterable)`**: Applies `function` to each item, returning a map object (convert to list to view)
- **`filter(function, iterable)`**: Keeps only items where `function` returns `True`
- **`reduce(function, iterable)`**: Cumulatively applies `function` to reduce the iterable to one value (requires `from functools import reduce`)
- **Anonymous vs named functions**: Lambdas have no name and are limited to a single expression, unlike `def` functions

## Program Examples

### Example 1: Lambda with map() and filter()
```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

doubled = list(map(lambda x: x * 2, numbers))
print(doubled)

evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)

names = ["alice", "bob", "charlie"]
capitalized = list(map(lambda name: name.capitalize(), names))
print(capitalized)
```
**Expected Output:**
```
[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
[2, 4, 6, 8, 10]
['Alice', 'Bob', 'Charlie']
```
**Explanation:** `map(lambda x: x * 2, numbers)` applies the doubling logic to every element and returns a map object, which is converted to a list to display. `filter(lambda x: x % 2 == 0, numbers)` keeps only the elements where the lambda returns `True` (i.e., even numbers). The third example shows a lambda calling a string method on each name.

### Example 2: Using reduce() to Aggregate Values
```python
from functools import reduce

numbers = [3, 7, 2, 9, 4]

total = reduce(lambda acc, x: acc + x, numbers)
print("Sum:", total)

product = reduce(lambda acc, x: acc * x, numbers)
print("Product:", product)

maximum = reduce(lambda acc, x: acc if acc > x else x, numbers)
print("Maximum:", maximum)
```
**Expected Output:**
```
Sum: 25
Product: 1512
Maximum: 9
```
**Explanation:** `reduce()` applies the lambda cumulatively: it starts with the first two elements, computes a result, then combines that result with the next element, and so on, until a single final value remains. For the maximum example, the lambda compares the running accumulator (`acc`) against each new value (`x`) and keeps whichever is larger, effectively implementing a custom `max()`.

## Real-World Use Cases
- Quickly transforming a list of records (e.g., extracting a field from each dictionary using `map()`)
- Filtering datasets based on business rules (e.g., selecting only orders above a certain value)
- Aggregating totals, such as summing invoice amounts or computing a running product
- Passing short custom logic as an argument to sorting functions, e.g., `sorted(data, key=lambda x: x["age"])`

## Features
- Lambdas can accept multiple arguments: `lambda x, y: x + y`
- `map()` and `filter()` return lazy iterator objects in Python 3, not lists, improving memory efficiency
- `reduce()` accepts an optional initial value as a third argument
- Lambdas are commonly used as the `key` argument in `sorted()`, `min()`, and `max()`

## Advantages
- Concise syntax for simple, throwaway functions, avoiding the overhead of a full `def` block
- `map()`/`filter()`/`reduce()` express data transformations declaratively, often more readably than manual loops
- Encourages a functional programming style that can reduce mutable state and side effects

## Best Practices
- Reserve lambdas for very simple, one-line expressions; use a regular `def` function for anything more complex
- Prefer list comprehensions over `map()`/`filter()` when the logic is simple, since they are often considered more Pythonic and readable
- Use `reduce()` sparingly — for common cases like sum or max, prefer Python's built-in `sum()`, `max()`, `min()` functions instead
- Always convert `map()`/`filter()` results to a `list()` if you need to inspect or reuse them multiple times

## Interview Questions
**Q1: What is a lambda function, and what limitations does it have compared to a regular function?**
A: A lambda function is an anonymous, inline function defined with the `lambda` keyword, consisting of a parameter list and a single expression whose result is automatically returned — it cannot contain multiple statements, loops, or a `return` keyword. Because of this restriction, lambdas are best suited for short, simple operations, while more complex logic requiring multiple lines or statements should be written as a regular `def` function.

**Q2: What is the difference between `map()`/`filter()` and list comprehensions, and which is generally preferred in Python?**
A: `map()` applies a function to every element of an iterable and `filter()` selects elements matching a condition, both returning lazy iterator objects; list comprehensions achieve the same transformations using inline `for`/`if` syntax within square brackets. Many Python developers consider list comprehensions more readable and "Pythonic" for straightforward transformations and filtering, reserving `map()`/`filter()` mainly for cases where a function reference (rather than a lambda) is being reused, or when working within a functional programming style.

## Practice Coding Exercises
1. Given a list of dictionaries representing products (each with `"name"` and `"price"` keys), use `map()` with a lambda to create a list of just the product names, and `filter()` with a lambda to select only products priced above $50.
2. Use `reduce()` to find the longest word in a list of strings (hint: compare word lengths inside the lambda).

## Quiz Questions
1. What keyword defines an anonymous function in Python?
   - A) func
   - B) def
   - C) lambda
   - D) anon
   - **Answer: C**

2. Which function is used to keep only elements matching a condition?
   - A) map()
   - B) filter()
   - C) reduce()
   - D) select()
   - **Answer: B**

3. Which module must be imported to use `reduce()`?
   - A) itertools
   - B) collections
   - C) functools
   - D) operator
   - **Answer: C**

## Summary
Lambda functions provide concise, anonymous logic, while `map()`, `filter()`, and `reduce()` enable a functional style of transforming and aggregating data. Next, you'll learn about regular expressions, a powerful tool for pattern matching and text processing.

\newpage
# Topic 22: Regular Expressions

## Topic Overview
This topic introduces regular expressions (regex) using Python's `re` module, a powerful tool for pattern matching and text processing.

## Learning Objectives
By the end of this topic, learners will be able to:
- Understand basic regex syntax and metacharacters
- Use `re.search()`, `re.match()`, and `re.findall()`
- Use `re.sub()` to replace matched patterns
- Use capturing groups to extract specific parts of a match

## What Exactly Is It?
A regular expression is a specialized pattern-matching syntax used to search for, validate, or manipulate text based on patterns rather than exact matches. Python provides this functionality through the built-in `re` module. Regex is invaluable for tasks like validating email formats, extracting phone numbers from text, or replacing patterns of text — going far beyond simple `.find()` or `.replace()` string methods, which only handle exact substrings.

## Key Concepts
- **Pattern**: A string describing what to search for, e.g., `r"\d+"` matches one or more digits
- **`re.search()`**: Finds the first match anywhere in the string
- **`re.match()`**: Checks for a match only at the beginning of the string
- **`re.findall()`**: Returns a list of all non-overlapping matches
- **`re.sub()`**: Replaces matched patterns with a replacement string
- **Metacharacters**: `.` (any character), `\d` (digit), `\w` (word character), `\s` (whitespace), `+` (one or more), `*` (zero or more), `?` (optional)
- **Capturing groups**: Parentheses `()` used to extract specific parts of a match

## Program Examples

### Example 1: Validating and Searching Text with re.search() and re.findall()
```python
import re

text = "Contact us at support@example.com or sales@example.org for help."

email_pattern = r"[\w.-]+@[\w.-]+\.\w+"

first_match = re.search(email_pattern, text)
print(first_match.group())

all_matches = re.findall(email_pattern, text)
print(all_matches)

phone = "Call 987-654-3210 today"
digits_only = re.findall(r"\d+", phone)
print(digits_only)
```
**Expected Output:**
```
support@example.com
['support@example.com', 'sales@example.org']
['987', '654', '3210']
```
**Explanation:** `re.search()` scans the whole string and returns the first match as a match object; `.group()` retrieves the actual matched text. `re.findall()` returns every match in the string as a list, which is why it captures both email addresses. The digits example shows `\d+` matching consecutive groups of digits, splitting the phone number into three separate segments due to the hyphens interrupting the digit sequences.

### Example 2: Replacing Text and Using Capturing Groups
```python
import re

text = "John: 25 years, Mary: 30 years, Sam: 22 years"

masked = re.sub(r"\d+", "[AGE]", text)
print(masked)

pattern = r"(\w+): (\d+) years"
matches = re.findall(pattern, text)
print(matches)

for name, age in matches:
    print(f"{name} is {age} years old")
```
**Expected Output:**
```
John: [AGE] years, Mary: [AGE] years, Sam: [AGE] years
[('John', '25'), ('Mary', '30'), ('Sam', '22')]
John is 25 years old
Mary is 30 years old
Sam is 22 years old
```
**Explanation:** `re.sub(r"\d+", "[AGE]", text)` replaces every sequence of digits with the placeholder `"[AGE]"`. Using capturing groups `(\w+)` and `(\d+)` inside the pattern, `re.findall()` returns a list of tuples, one per match, each containing the captured name and age separately — making it easy to unpack and process structured data extracted from unstructured text.

## Real-World Use Cases
- Validating user input formats: emails, phone numbers, postal codes, passwords
- Extracting structured data (dates, prices, IDs) from unstructured text or log files
- Cleaning and standardizing text data before analysis (removing extra whitespace, special characters)
- Search-and-replace operations across large bodies of text, such as redacting sensitive information

## Features
- Supports quantifiers (`{n,m}`), anchors (`^`, `$`), character classes (`[a-z]`), and alternation (`|`)
- `re.compile()` pre-compiles a pattern for reuse, improving performance in loops
- Supports named capturing groups: `(?P<name>\w+)` for more readable group access
- Flags like `re.IGNORECASE` allow case-insensitive matching

## Advantages
- Extremely powerful and flexible for complex text pattern matching, far beyond simple string methods
- One pattern can replace many lines of manual string-parsing logic
- Widely used across programming languages, so regex skills transfer beyond Python
- Supports both validation (does it match?) and extraction (what matched?) in one tool

## Best Practices
- Use raw strings (`r"..."`) for regex patterns to avoid conflicts with Python's own escape sequences
- Pre-compile patterns with `re.compile()` when reusing the same pattern many times, such as in a loop
- Keep patterns as simple and specific as possible; overly broad patterns can cause unexpected matches
- Test regex patterns thoroughly with edge cases, since they can be easy to get subtly wrong

## Interview Questions
**Q1: What is the difference between `re.match()` and `re.search()`?**
A: `re.match()` only checks for a match at the very beginning of the string — if the pattern doesn't match starting at index 0, it returns `None`, even if the pattern would match later in the string. `re.search()` scans through the entire string looking for the first location where the pattern matches, regardless of position, making it more broadly useful for finding a pattern anywhere in the text.

**Q2: What is a capturing group in regex, and why is it useful?**
A: A capturing group, created with parentheses `()` around part of a pattern, isolates a specific portion of a match so it can be retrieved separately rather than just getting the whole matched string. This is useful when extracting structured pieces of information from text — for example, separating a name and an age from a sentence like "John: 25 years" — since `re.findall()` with groups returns tuples of just the captured parts rather than the full matched text.

## Practice Coding Exercises
1. Write a function that validates whether a given string is a properly formatted email address using `re.match()` or `re.fullmatch()`, returning `True` or `False`.
2. Given a block of text containing multiple dates in the format `DD-MM-YYYY`, use `re.findall()` with capturing groups to extract each date's day, month, and year separately, then print them in `YYYY/MM/DD` format.

## Quiz Questions
1. Which regex metacharacter matches one or more digits?
   - A) \w+
   - B) \d+
   - C) \s+
   - D) .*
   - **Answer: B**

2. What does `re.sub()` do?
   - A) Searches for a pattern
   - B) Splits a string by a pattern
   - C) Replaces matched patterns with a new string
   - D) Validates a pattern only
   - **Answer: C**

3. Why should regex patterns typically be written as raw strings (r"...")?
   - A) They run faster
   - B) To avoid conflicts with Python's own escape sequences
   - C) They are required by the re module
   - D) To enable case-insensitive matching
   - **Answer: B**

## Summary
Regular expressions provide a powerful, flexible way to search, validate, and manipulate text based on patterns rather than exact matches. Next, you'll learn how Python handles dates and times using the `datetime` module.

\newpage
# Topic 23: Working with Dates & Time

## Topic Overview
This topic covers Python's `datetime` module, used to represent, manipulate, and format dates and times.

## Learning Objectives
By the end of this topic, learners will be able to:
- Create date and datetime objects
- Perform arithmetic on dates using `timedelta`
- Format dates into readable strings and parse strings into dates
- Compare dates and calculate differences between them

## What Exactly Is It?
The `datetime` module provides classes for working with dates and times, including `date` (year, month, day), `time` (hour, minute, second), and `datetime` (a combination of both). It also provides `timedelta`, representing a duration or difference between two dates/times. This module is essential whenever a program needs to track schedules, calculate ages, log timestamps, or handle any date-related logic.

## Key Concepts
- **`datetime.now()`**: Returns the current local date and time
- **`date(year, month, day)`**: Creates a specific date object
- **`timedelta`**: Represents a duration, e.g., `timedelta(days=7)`
- **`strftime()`**: Formats a datetime object into a custom string
- **`strptime()`**: Parses a string into a datetime object based on a format
- **Date arithmetic**: Adding/subtracting `timedelta` objects from dates, or subtracting two dates to get a `timedelta`

## Program Examples

### Example 1: Current Date/Time and Formatting
```python
from datetime import datetime

now = datetime.now()
print(now)

formatted = now.strftime("%B %d, %Y - %I:%M %p")
print(formatted)

birthday_str = "1995-08-14"
birthday = datetime.strptime(birthday_str, "%Y-%m-%d")
print(birthday.strftime("%A, %B %d, %Y"))
```
**Expected Output (actual date/time will vary):**
```
2026-07-19 14:32:10.123456
July 19, 2026 - 02:32 PM
Monday, August 14, 1995
```
**Explanation:** `datetime.now()` captures the current moment with full precision. `.strftime()` converts a datetime object into a custom-formatted string using format codes like `%B` (full month name) and `%I:%M %p` (12-hour time with AM/PM). `strptime()` performs the reverse operation, parsing a string into a datetime object based on a matching format pattern.

### Example 2: Date Arithmetic with timedelta
```python
from datetime import datetime, timedelta

today = datetime.now()
next_week = today + timedelta(days=7)
print("One week from now:", next_week.strftime("%Y-%m-%d"))

event_date = datetime(2026, 12, 25)
days_remaining = (event_date - today).days
print(f"Days until December 25, 2026: {days_remaining}")

deadline = today - timedelta(days=3)
print("Deadline was:", deadline.strftime("%Y-%m-%d"))
```
**Expected Output (values depend on the current date):**
```
One week from now: 2026-07-26
Days until December 25, 2026: 159
Deadline was: 2026-07-16
```
**Explanation:** `timedelta(days=7)` represents a 7-day duration that can be added to or subtracted from a `datetime` object to compute a new date. Subtracting two `datetime` objects (`event_date - today`) produces a `timedelta`, whose `.days` attribute gives the whole number of days between the two dates, useful for countdowns or deadline calculations.

## Real-World Use Cases
- Scheduling applications that calculate reminders, deadlines, or recurring events
- Logging timestamps for application events, transactions, or errors
- Calculating a person's age or the duration between two events
- Parsing dates from user input, files, or APIs into usable date objects

## Features
- Supports time zones via the `zoneinfo` module (Python 3.9+) or third-party `pytz`
- `date`, `time`, and `datetime` objects support comparison operators (`<`, `>`, `==`)
- `calendar` module complements `datetime` for calendar-related operations
- Format codes (`%Y`, `%m`, `%d`, `%H`, `%M`, `%S`, etc.) allow highly customizable formatting

## Advantages
- Provides a consistent, reliable way to handle dates without manual calculations
- Built-in arithmetic support (via `timedelta`) avoids error-prone manual date math
- Flexible formatting and parsing accommodate nearly any date string format
- Well-documented and part of the standard library — no extra installation required for basic use

## Best Practices
- Always specify a clear, unambiguous format string when parsing dates with `strptime()`
- Use timezone-aware datetime objects for applications spanning multiple regions
- Store dates in a standard format (like ISO 8601: `YYYY-MM-DD`) when saving to files or databases
- Avoid manual date math (adding "30 days" to a month) — use `timedelta` instead to handle edge cases correctly

## Interview Questions
**Q1: What is the difference between `strftime()` and `strptime()`?**
A: `strftime()` ("string format time") converts a `datetime` object into a formatted string according to a specified pattern, useful for displaying dates in a human-readable form. `strptime()` ("string parse time") does the opposite — it takes a string and a matching format pattern and converts it into a `datetime` object, useful for reading dates from user input, files, or APIs.

**Q2: How would you calculate the number of days between two dates in Python?**
A: You can subtract one `datetime` (or `date`) object from another, which produces a `timedelta` object representing the difference; accessing its `.days` attribute gives you the whole number of days between the two dates, for example `(end_date - start_date).days`. This approach automatically accounts for varying month lengths and leap years, unlike manual date arithmetic.

## Practice Coding Exercises
1. Write a program that asks the user for their birth date (as a string in `YYYY-MM-DD` format) and calculates their exact age in years as of today.
2. Write a program that takes a starting date and a number of business days to add (skip Saturdays and Sundays), then prints the resulting date, using a loop combined with `timedelta`.

## Quiz Questions
1. Which class represents a duration or difference between two dates?
   - A) datetime
   - B) date
   - C) timedelta
   - D) duration
   - **Answer: C**

2. Which method converts a datetime object into a formatted string?
   - A) strptime()
   - B) strftime()
   - C) format()
   - D) to_string()
   - **Answer: B**

3. What does `datetime.now()` return?
   - A) Today's date only
   - B) The current local date and time
   - C) A formatted string
   - D) A Unix timestamp only
   - **Answer: B**

## Summary
The `datetime` module gives Python programs a reliable, flexible way to represent, format, parse, and calculate with dates and times. Next, you'll learn about comprehensions in more depth, covering list, dictionary, and set comprehensions together.

\newpage
# Topic 24: Comprehensions (List/Dict/Set)

## Topic Overview
This topic consolidates and deepens Python's comprehension syntax across lists, dictionaries, and sets, providing a concise way to build collections from existing iterables.

## Learning Objectives
By the end of this topic, learners will be able to:
- Write list, dictionary, and set comprehensions confidently
- Apply conditional logic (if/else) within comprehensions
- Use nested comprehensions for multi-dimensional data
- Recognize when a comprehension improves or hurts readability

## What Exactly Is It?
A comprehension is a concise, single-line syntax for creating a new collection (list, dictionary, or set) by applying an expression to each item of an existing iterable, optionally filtering items with a condition. Instead of writing a multi-line loop with `.append()` or manual dictionary assignment, comprehensions express the same logic in one readable line: `[expression for item in iterable if condition]`.

## Key Concepts
- **List comprehension**: `[x * 2 for x in range(5)]`
- **Dictionary comprehension**: `{k: v for k, v in pairs}`
- **Set comprehension**: `{x % 3 for x in range(10)}`
- **Conditional filtering**: `[x for x in items if condition]`
- **Conditional expression inside comprehension**: `[x if condition else y for x in items]`
- **Nested comprehension**: A comprehension inside another, used for flattening or building grids

## Program Examples

### Example 1: List and Dictionary Comprehensions with Conditions
```python
numbers = range(1, 11)

labels = ["even" if n % 2 == 0 else "odd" for n in numbers]
print(labels)

squares_dict = {n: n ** 2 for n in numbers if n % 2 == 0}
print(squares_dict)

words = ["apple", "kiwi", "banana", "fig"]
lengths = {word: len(word) for word in words}
print(lengths)
```
**Expected Output:**
```
['odd', 'even', 'odd', 'even', 'odd', 'even', 'odd', 'even', 'odd', 'even']
{2: 4, 4: 16, 6: 36, 8: 64, 10: 100}
{'apple': 5, 'kiwi': 4, 'banana': 6, 'fig': 3}
```
**Explanation:** The first comprehension uses a conditional expression (`if/else` before the `for`) to label every number, keeping all elements. The second uses a filtering condition (`if` after the `for`) to only include even numbers as dictionary keys, mapping each to its square. The dictionary comprehension pattern `{word: len(word) for word in words}` builds a lookup table in a single line.

### Example 2: Set Comprehension and Nested (Flattening) Comprehension
```python
numbers = [1, 2, 2, 3, 4, 4, 5, 6, 6]
remainders = {n % 3 for n in numbers}
print(remainders)

matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened = [value for row in matrix for value in row]
print(flattened)

transposed = [[row[i] for row in matrix] for i in range(3)]
print(transposed)
```
**Expected Output:**
```
{0, 1, 2}
[1, 2, 3, 4, 5, 6, 7, 8, 9]
[[1, 4, 7], [2, 5, 8], [3, 6, 9]]
```
**Explanation:** The set comprehension computes `n % 3` for every number and automatically keeps only unique results. The flattening comprehension uses two `for` clauses in sequence (outer loop first, inner loop second) to unroll a nested list into a single flat list. The transpose example uses a comprehension inside a comprehension to swap rows and columns, effectively rotating the matrix.

## Real-World Use Cases
- Quickly transforming and filtering data pulled from APIs or databases
- Building lookup dictionaries from lists of records (e.g., mapping IDs to names)
- Deduplicating and categorizing data using set comprehensions
- Flattening nested JSON-like structures into simpler, flat lists for processing

## Features
- All three comprehension types support multiple `for` clauses and multiple `if` conditions
- Comprehensions create a new collection; they do not modify the original iterable
- Generator expressions `(x for x in ...)` are a closely related, memory-efficient variant
- Comprehensions can call functions on each item, not just simple expressions

## Advantages
- More concise and often faster than equivalent explicit loops
- Clearly expresses "build a new collection from this data" in a single readable line
- Reduces boilerplate code (`.append()` calls, temporary variables)
- Encourages a declarative style: describing what you want, not how to loop over it step-by-step

## Best Practices
- Keep comprehensions simple and readable; if a comprehension needs multiple nested loops and conditions, consider a regular loop instead
- Use meaningful variable names inside comprehensions, just as you would in a loop
- Prefer comprehensions over `map()`/`filter()` with lambdas for most everyday cases, as they're generally more Pythonic
- Avoid side effects (like printing or modifying external state) inside comprehensions — they should build a collection, not perform actions

## Interview Questions
**Q1: What is the difference between a filtering condition and a conditional expression in a list comprehension?**
A: A filtering condition, placed after the `for` clause (e.g., `[x for x in items if x > 0]`), determines whether an item is included in the resulting list at all — items that don't satisfy the condition are skipped entirely. A conditional expression, placed before the `for` clause (e.g., `[x if x > 0 else 0 for x in items]`), doesn't filter anything out; instead, it decides what value to include for every item, keeping the same number of elements as the original iterable.

**Q2: When should you avoid using a comprehension in favor of a regular loop?**
A: Comprehensions should be avoided when the logic becomes too complex to read on one (or a few) lines — for example, when there are multiple nested loops with several conditions, or when the body needs to perform side effects like logging, printing, or modifying external state rather than simply producing a value. In those cases, a traditional `for` loop with clear, separate statements is more readable and maintainable, even though it's more verbose.

## Practice Coding Exercises
1. Given a list of sentences, use a list comprehension to create a new list containing only the sentences that have more than 5 words.
2. Given a list of dictionaries representing students (each with `"name"` and `"grade"` keys), use a dictionary comprehension to build a new dictionary mapping each student's name to a boolean indicating whether they passed (`grade >= 60`).

## Quiz Questions
1. What does `[x for x in range(5) if x > 2]` produce?
   - A) [3, 4]
   - B) [0, 1, 2]
   - C) [0, 1, 2, 3, 4]
   - D) [2, 3, 4]
   - **Answer: A**

2. Which syntax correctly creates a dictionary comprehension?
   - A) [k: v for k, v in items]
   - B) {k: v for k, v in items}
   - C) (k: v for k, v in items)
   - D) <k: v for k, v in items>
   - **Answer: B**

3. What is the primary purpose of a comprehension?
   - A) To define a new function
   - B) To build a new collection from an existing iterable
   - C) To handle exceptions
   - D) To import a module
   - **Answer: B**

## Summary
Comprehensions offer a concise, expressive way to build lists, dictionaries, and sets from existing data, supporting filtering, transformation, and nesting. This completes the Intermediate section — next, you'll move into Advanced topics, beginning with multithreading and multiprocessing.

\newpage
# Topic 25: Multithreading & Multiprocessing

## Topic Overview
This topic covers Python's concurrency options — multithreading and multiprocessing — used to run multiple tasks simultaneously, and explains when each approach is appropriate.

## Learning Objectives
By the end of this topic, learners will be able to:
- Create and run threads using the `threading` module
- Create and run separate processes using the `multiprocessing` module
- Understand the Global Interpreter Lock (GIL) and its impact
- Choose between threading and multiprocessing based on the task type

## What Exactly Is It?
Multithreading allows a program to run multiple threads (lightweight sub-tasks) within the same process, sharing memory space, which is useful for I/O-bound tasks like network requests or file operations. Multiprocessing runs separate, independent processes, each with its own Python interpreter and memory space, which is necessary for CPU-bound tasks because Python's Global Interpreter Lock (GIL) prevents true parallel execution of Python bytecode across threads in a single process.

## Key Concepts
- **Thread**: A lightweight unit of execution within a process, sharing memory with other threads
- **Process**: An independent program instance with its own memory space
- **GIL (Global Interpreter Lock)**: A mutex that allows only one thread to execute Python bytecode at a time within a single process
- **I/O-bound tasks**: Tasks that spend most of their time waiting (network calls, file reads) — good fit for threading
- **CPU-bound tasks**: Tasks that require heavy computation — good fit for multiprocessing to bypass the GIL
- **`threading.Thread`**: Class used to create and start a new thread
- **`multiprocessing.Process`**: Class used to create and start a new process

## Program Examples

### Example 1: Multithreading for an I/O-Bound Task
```python
import threading
import time

def download_file(name, delay):
    print(f"Starting download: {name}")
    time.sleep(delay)
    print(f"Finished download: {name}")

files = [("file1.zip", 2), ("file2.zip", 1), ("file3.zip", 3)]
threads = []

start_time = time.time()
for name, delay in files:
    t = threading.Thread(target=download_file, args=(name, delay))
    threads.append(t)
    t.start()

for t in threads:
    t.join()

print(f"All downloads completed in {time.time() - start_time:.2f} seconds")
```
**Expected Output (order of start/finish lines may vary):**
```
Starting download: file1.zip
Starting download: file2.zip
Starting download: file3.zip
Finished download: file2.zip
Finished download: file1.zip
Finished download: file3.zip
All downloads completed in 3.01 seconds
```
**Explanation:** Each `threading.Thread` runs `download_file` concurrently, so the three simulated downloads overlap instead of running one after another — the total time is roughly equal to the longest single delay (3 seconds), not the sum of all delays (6 seconds). `.join()` ensures the main program waits for all threads to finish before printing the final message.

### Example 2: Multiprocessing for a CPU-Bound Task
```python
import multiprocessing
import time

def compute_squares(n):
    return [i * i for i in range(n)]

if __name__ == "__main__":
    numbers = [10_000_000, 10_000_000]

    start_time = time.time()
    with multiprocessing.Pool(processes=2) as pool:
        results = pool.map(compute_squares, numbers)

    print(f"Computed {len(results)} batches in {time.time() - start_time:.2f} seconds")
    print("First batch sample:", results[0][:5])
```
**Expected Output (timing varies by machine):**
```
Computed 2 batches in 1.85 seconds
First batch sample: [0, 1, 4, 9, 16]
```
**Explanation:** `multiprocessing.Pool` distributes the CPU-heavy `compute_squares` calls across separate processes, each with its own Python interpreter, allowing true parallel execution on multi-core CPUs — something threading cannot achieve for CPU-bound work due to the GIL. The `if __name__ == "__main__":` guard is required on some platforms to prevent child processes from recursively re-importing and re-running the script.

## Real-World Use Cases
- Downloading multiple files or making multiple API calls concurrently (threading)
- Processing large batches of images, videos, or data in parallel across CPU cores (multiprocessing)
- Running background tasks (like periodic health checks) alongside a main application (threading)
- Scientific computing and data processing pipelines that need to fully utilize multi-core hardware (multiprocessing)

## Features
- The `concurrent.futures` module offers a higher-level, simpler API (`ThreadPoolExecutor`, `ProcessPoolExecutor`) built on top of `threading`/`multiprocessing`
- `multiprocessing.Queue` and `Pipe` allow safe communication between processes
- Threads share memory, so shared data structures need synchronization primitives like `Lock` to avoid race conditions
- `asyncio` (covered later) provides an alternative concurrency model based on cooperative multitasking, well-suited for many I/O-bound tasks

## Advantages
- Threading improves responsiveness and throughput for I/O-bound programs without complex process management
- Multiprocessing achieves true parallelism, fully utilizing multi-core processors for CPU-bound work
- Both approaches allow programs to make better use of waiting time or available hardware resources
- `concurrent.futures` simplifies common patterns, reducing boilerplate code

## Best Practices
- Use multithreading for I/O-bound tasks (network, disk, database) where threads spend time waiting
- Use multiprocessing for CPU-bound tasks (heavy computation) to bypass the GIL and use multiple cores
- Always use `Lock` or other synchronization tools when multiple threads modify shared data
- Prefer the higher-level `concurrent.futures` module over raw `threading`/`multiprocessing` for simpler code when possible

## Interview Questions
**Q1: What is the Global Interpreter Lock (GIL), and how does it affect multithreading in Python?**
A: The GIL is a mutex built into the standard CPython interpreter that ensures only one thread executes Python bytecode at any given moment, even on a multi-core machine. This means multithreading in Python does not achieve true parallel computation for CPU-bound tasks — threads still take turns executing — but it does provide real concurrency benefits for I/O-bound tasks, since a thread waiting on a network call or disk operation releases the GIL, allowing other threads to run during that wait.

**Q2: When would you choose multiprocessing over multithreading, and why?**
A: You would choose multiprocessing for CPU-bound tasks — heavy computations like image processing, numerical simulations, or data crunching — because each process runs in its own memory space with its own Python interpreter, bypassing the GIL entirely and allowing genuine parallel execution across multiple CPU cores. Multithreading would not provide a real speedup for such tasks, since the GIL prevents true parallel execution of Python bytecode within a single process.

## Practice Coding Exercises
1. Write a program using `threading` that simulates three tasks (e.g., "reading email", "downloading updates", "syncing files") each taking a different amount of time (using `time.sleep`), and shows that they run concurrently rather than sequentially.
2. Write a program using `multiprocessing.Pool` that calculates the factorial of several large numbers in parallel and prints the results along with the total execution time, comparing it (in comments) to how long it would take running sequentially.

## Quiz Questions
1. What does the GIL prevent within a single Python process?
   - A) Any concurrency at all
   - B) True parallel execution of Python bytecode across threads
   - C) The use of multiple processes
   - D) Network requests
   - **Answer: B**

2. Which is generally better suited for CPU-bound tasks?
   - A) Threading
   - B) Multiprocessing
   - C) Neither helps
   - D) Only asyncio helps
   - **Answer: B**

3. Which module provides a higher-level API built on top of both threading and multiprocessing?
   - A) concurrent.futures
   - B) asyncio
   - C) itertools
   - D) collections
   - **Answer: A**

## Summary
Multithreading and multiprocessing enable Python programs to handle concurrent and parallel workloads, with threading suited to I/O-bound tasks and multiprocessing suited to CPU-bound tasks due to the GIL. Next, you'll go deeper into exception handling by building custom exception classes.

\newpage
# Topic 26: Advanced Exception Handling & Custom Exceptions

## Topic Overview
This topic builds on basic exception handling by covering exception chaining, multiple exception types, and creating custom exception classes for domain-specific error handling.

## Learning Objectives
By the end of this topic, learners will be able to:
- Create custom exception classes by subclassing `Exception`
- Chain exceptions to preserve original error context
- Handle multiple exception types cleanly
- Design an exception hierarchy for a real application

## What Exactly Is It?
While Python provides many built-in exceptions (`ValueError`, `TypeError`, etc.), real applications often need custom exceptions that represent domain-specific error conditions, such as `InsufficientFundsError` or `InvalidOrderError`. Custom exceptions are created by subclassing the built-in `Exception` class (or a more specific built-in exception), giving your error handling code clear, descriptive, and catchable error types that communicate exactly what went wrong in terms meaningful to your application.

## Key Concepts
- **Custom exception class**: `class MyError(Exception): pass`
- **Exception hierarchy**: Organizing related custom exceptions under a common base exception
- **Exception chaining**: Using `raise NewError(...) from original_error` to preserve the original cause
- **Multiple except clauses**: Handling different custom and built-in exceptions distinctly
- **Adding attributes to exceptions**: Storing extra data (like an error code) in a custom exception's `__init__`

## Program Examples

### Example 1: Creating and Using Custom Exceptions
```python
class InsufficientFundsError(Exception):
    def __init__(self, balance, amount):
        self.balance = balance
        self.amount = amount
        message = f"Cannot withdraw ${amount}: balance is only ${balance}"
        super().__init__(message)

class InvalidAmountError(Exception):
    pass

def withdraw(balance, amount):
    if amount <= 0:
        raise InvalidAmountError("Withdrawal amount must be positive")
    if amount > balance:
        raise InsufficientFundsError(balance, amount)
    return balance - amount

try:
    withdraw(100, 250)
except InsufficientFundsError as e:
    print(f"Transaction denied: {e}")
    print(f"Shortfall: ${e.amount - e.balance}")
except InvalidAmountError as e:
    print(f"Invalid input: {e}")
```
**Expected Output:**
```
Transaction denied: Cannot withdraw $250: balance is only $100
Shortfall: $150
```
**Explanation:** `InsufficientFundsError` subclasses `Exception` and overrides `__init__` to store `balance` and `amount` as attributes while also building a descriptive message passed to the parent class. This allows the `except` block to access both a human-readable message (via `str(e)`) and the specific numeric details (`e.balance`, `e.amount`) needed to calculate the shortfall, something a generic `ValueError` couldn't offer as cleanly.

### Example 2: Exception Chaining and an Exception Hierarchy
```python
class AppError(Exception):
    """Base exception for this application."""
    pass

class DatabaseError(AppError):
    pass

class RecordNotFoundError(DatabaseError):
    pass

def fetch_user(user_id, database):
    try:
        return database[user_id]
    except KeyError as original_error:
        raise RecordNotFoundError(f"No user with id {user_id}") from original_error

users = {1: "Alice", 2: "Bob"}

try:
    fetch_user(99, users)
except DatabaseError as e:
    print(f"Database issue: {e}")
    print(f"Original cause: {e.__cause__}")
```
**Expected Output:**
```
Database issue: No user with id 99
Original cause: 99
```
**Explanation:** `RecordNotFoundError` inherits from `DatabaseError`, which inherits from a common `AppError` base — this hierarchy means catching `DatabaseError` also catches the more specific `RecordNotFoundError`, giving flexible handling at different levels of specificity. Using `raise ... from original_error` chains the new exception to the original `KeyError`, preserving it in the `__cause__` attribute so debugging information isn't lost even though a more descriptive, application-specific exception is raised.

## Real-World Use Cases
- Building clear, catchable error types for APIs (e.g., `AuthenticationError`, `RateLimitExceededError`)
- Representing domain-specific business rule violations (e.g., `OutOfStockError`, `InvalidCouponError`)
- Creating a layered exception hierarchy so calling code can catch broadly or narrowly as needed
- Preserving original error context when translating low-level exceptions into higher-level, meaningful ones

## Features
- Custom exceptions can carry arbitrary extra data as attributes, beyond just a message
- Exception hierarchies allow catching a broad category (parent) or a specific case (child)
- `raise ... from ...` explicitly links exceptions, visible in the traceback as "the above exception was the direct cause of..."
- Exceptions can override `__str__` for fully custom string representations

## Advantages
- Makes error handling code more expressive and specific to the application's domain
- Enables catching related errors broadly via a shared base exception, or narrowly via specific subclasses
- Exception chaining preserves full debugging context instead of losing the original error
- Improves API usability for other developers who consume your code's exceptions

## Best Practices
- Always subclass `Exception` (not `BaseException` directly) for application-level custom exceptions
- Create a common base exception for your application/module, with more specific exceptions inheriting from it
- Use `raise ... from original_error` when translating a low-level exception into a higher-level one, to preserve context
- Keep exception messages clear and actionable, telling the user or developer what went wrong and, if possible, how to fix it

## Interview Questions
**Q1: Why would you create a custom exception hierarchy rather than using Python's built-in exceptions everywhere?**
A: A custom exception hierarchy lets you represent domain-specific error conditions with clear, descriptive names (like `InsufficientFundsError` rather than a generic `ValueError`), making error-handling code more self-documenting and precise. It also allows calling code to catch errors at different levels of granularity — catching a broad base exception like `DatabaseError` handles all database-related issues generically, while catching a specific subclass like `RecordNotFoundError` allows for more tailored handling of that particular case.

**Q2: What does `raise NewException(...) from original_error` accomplish, and why is it useful?**
A: This syntax explicitly chains a new exception to an original one, setting the new exception's `__cause__` attribute to the original exception. It's useful because when you catch a low-level exception (like a `KeyError`) and raise a more descriptive, higher-level exception in its place, you don't want to lose the original error's context — the chaining preserves the full traceback and cause, making debugging significantly easier than if the original exception were silently discarded.

## Practice Coding Exercises
1. Create a custom exception `NegativeQuantityError` and use it in an inventory function that raises this exception if a requested quantity to remove from stock is negative, including the invalid quantity as an attribute on the exception.
2. Design a small exception hierarchy for a simple order-processing system with a base `OrderError` and two subclasses, `PaymentDeclinedError` and `OutOfStockError`. Write a function that raises the appropriate exception based on simulated conditions, and demonstrate catching both the base and specific exception types.

## Quiz Questions
1. What class should custom application exceptions typically inherit from?
   - A) BaseException
   - B) Exception
   - C) RuntimeError only
   - D) object
   - **Answer: B**

2. What does `raise NewError(...) from original_error` primarily accomplish?
   - A) Suppresses the original error
   - B) Chains the new exception to the original for context
   - C) Converts the new error into a warning
   - D) Automatically logs the error to a file
   - **Answer: B**

3. If `RecordNotFoundError` inherits from `DatabaseError`, catching `DatabaseError` will also catch:
   - A) Only DatabaseError itself, not subclasses
   - B) RecordNotFoundError as well, since it's a subclass
   - C) All exceptions in the program
   - D) Nothing, subclasses must be caught separately
   - **Answer: B**

## Summary
Custom exceptions and exception chaining let you build clear, domain-specific, and well-organized error handling for real applications. Next, you'll learn about context managers, which formalize the resource-management pattern you've already seen with the `with` statement for files.

\newpage
# Topic 27: Context Managers

## Topic Overview
This topic explains context managers in depth — the mechanism behind the `with` statement — and shows how to create custom context managers using classes and the `contextlib` module.

## Learning Objectives
By the end of this topic, learners will be able to:
- Explain how the `with` statement and context managers work together
- Create a custom context manager using `__enter__` and `__exit__`
- Create a custom context manager using the `@contextmanager` decorator
- Apply context managers to manage resources beyond files

## What Exactly Is It?
A context manager is an object that defines the setup and teardown behavior for a block of code, guaranteeing that cleanup happens even if an error occurs inside the block. It works through two special methods: `__enter__`, called when entering the `with` block, and `__exit__`, called when leaving it (whether normally or due to an exception). This is the same mechanism that makes `with open(file) as f:` automatically close files — and you can apply the same pattern to manage any resource, like database connections, locks, or timers.

## Key Concepts
- **`with` statement**: Ensures a context manager's setup and teardown run automatically
- **`__enter__`**: Called at the start of the `with` block; its return value is bound to the `as` variable
- **`__exit__`**: Called at the end of the block, receives exception info if one occurred, and can suppress it by returning `True`
- **`contextlib.contextmanager`**: A decorator that turns a generator function into a context manager using `yield`
- **Multiple context managers**: Can be combined in one `with` statement using commas

## Program Examples

### Example 1: A Custom Context Manager Using a Class
```python
import time

class Timer:
    def __enter__(self):
        self.start = time.time()
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        self.end = time.time()
        print(f"Elapsed time: {self.end - self.start:.4f} seconds")
        return False

with Timer() as t:
    total = sum(i * i for i in range(1_000_000))

print("Sum computed:", total)
```
**Expected Output (timing will vary slightly):**
```
Elapsed time: 0.0821 seconds
Sum computed: 333332833333500000
```
**Explanation:** `__enter__` records the start time and returns `self`, bound to `t` via `as t`. `__exit__` always runs when the `with` block ends, calculating and printing the elapsed time regardless of whether the code inside raised an exception. Returning `False` from `__exit__` means any exception that occurred should propagate normally rather than being suppressed.

### Example 2: A Context Manager Using @contextmanager
```python
from contextlib import contextmanager

@contextmanager
def managed_resource(name):
    print(f"Acquiring resource: {name}")
    resource = {"name": name, "active": True}
    try:
        yield resource
    finally:
        resource["active"] = False
        print(f"Releasing resource: {name}")

with managed_resource("Database Connection") as res:
    print(f"Using {res['name']}, active={res['active']}")

print("Resource block finished")
```
**Expected Output:**
```
Acquiring resource: Database Connection
Using Database Connection, active=True
Releasing resource: Database Connection
Resource block finished
```
**Explanation:** The `@contextmanager` decorator turns a generator function into a context manager: code before `yield` acts as `__enter__`, and code after `yield` (inside `finally`) acts as `__exit__`, guaranteeing the release logic runs even if an exception occurs inside the `with` block. This approach is often more concise than writing a full class with `__enter__`/`__exit__` methods for simple cases.

## Real-World Use Cases
- Managing database connections, ensuring they're always closed even if a query fails
- Acquiring and releasing locks in multithreaded code safely
- Temporarily changing settings (like a working directory or logging level) and reliably restoring them afterward
- Measuring execution time of code blocks for performance profiling

## Features
- `__exit__` receives exception type, value, and traceback, allowing conditional handling or suppression of specific errors
- Multiple context managers can be combined: `with open(a) as f1, open(b) as f2:`
- `contextlib` also provides `suppress()`, `closing()`, and other ready-made context manager utilities
- Async context managers (`async with`) exist for use in asynchronous code

## Advantages
- Guarantees cleanup code runs, reducing resource leaks and related bugs
- Cleanly separates setup/teardown logic from the main logic of the `with` block
- `@contextmanager` offers a concise, function-based alternative to writing full classes
- Makes intent clear: code inside `with` clearly represents a managed, temporary resource usage

## Best Practices
- Prefer `@contextmanager` for simple context managers; use a class-based approach when more state or multiple methods are needed
- Always wrap the `yield` in a `try/finally` within `@contextmanager` functions to guarantee cleanup even on errors
- Return `False` (or nothing) from `__exit__` unless you specifically intend to suppress exceptions
- Use built-in context managers (`open()`, `threading.Lock()`) instead of manual acquire/release patterns whenever available

## Interview Questions
**Q1: What are `__enter__` and `__exit__` used for in a custom context manager class?**
A: `__enter__` is called automatically when execution enters a `with` block; it typically performs setup (like opening a connection or acquiring a lock) and its return value becomes the object bound to the `as` variable. `__exit__` is called when execution leaves the `with` block, whether normally or due to an exception, and typically performs cleanup (closing a connection, releasing a lock); it receives information about any exception that occurred and can suppress it by returning `True`.

**Q2: What is the advantage of using `@contextmanager` from the `contextlib` module over writing a full class-based context manager?**
A: `@contextmanager` lets you write a context manager as a single generator function using `yield` to separate setup code (before `yield`) from teardown code (after `yield`, ideally in a `finally` block), which is often more concise and readable than defining a full class with separate `__enter__` and `__exit__` methods. It's best suited for simpler cases; a class-based approach is preferable when the context manager needs to maintain more complex state or expose additional methods.

## Practice Coding Exercises
1. Write a class-based context manager `SuppressErrors` that catches and silently ignores any exception of a specified type raised inside its `with` block, printing a message about what was suppressed.
2. Using `@contextmanager`, write a context manager `temporary_setting(settings_dict, key, temp_value)` that temporarily changes a dictionary value for the duration of the `with` block and restores the original value afterward, even if an exception occurs.

## Quiz Questions
1. Which special method is called when entering a `with` block?
   - A) __start__
   - B) __enter__
   - C) __init__
   - D) __open__
   - **Answer: B**

2. What does returning `True` from `__exit__` accomplish?
   - A) Nothing special
   - B) Suppresses any exception that occurred in the block
   - C) Restarts the with block
   - D) Raises a new exception
   - **Answer: B**

3. Which decorator turns a generator function into a context manager?
   - A) @contextmanager
   - B) @staticmethod
   - C) @wraps
   - D) @property
   - **Answer: A**

## Summary
Context managers formalize reliable setup and teardown behavior around a block of code, whether written as a class with `__enter__`/`__exit__` or more concisely with `@contextmanager`. Next, you'll learn how to connect Python programs to databases for persistent data storage.

\newpage
# Topic 28: Working with Databases (SQLite via Python)

## Topic Overview
This topic introduces database connectivity in Python using the built-in `sqlite3` module, covering how to create tables, insert data, and run queries.

## Learning Objectives
By the end of this topic, learners will be able to:
- Connect to a SQLite database from Python
- Create tables and insert records using SQL through Python
- Query data and fetch results into Python objects
- Use parameterized queries to prevent SQL injection

## What Exactly Is It?
SQLite is a lightweight, file-based relational database engine that requires no separate server process, making it ideal for learning and small-to-medium applications. Python's built-in `sqlite3` module allows you to connect to a `.db` file, execute SQL statements, and retrieve results directly as Python data structures — combining Python's programming flexibility with SQL's powerful data querying and storage capabilities, without needing to install any third-party database software.

## Key Concepts
- **`sqlite3.connect()`**: Opens a connection to a database file (creating it if it doesn't exist)
- **Cursor**: An object used to execute SQL commands and fetch results (`connection.cursor()`)
- **`.execute()`**: Runs a single SQL statement
- **Parameterized queries**: Using `?` placeholders to safely insert values, preventing SQL injection
- **`.fetchone()`/`.fetchall()`**: Retrieve query results as tuples
- **`.commit()`**: Saves changes made to the database permanently

## Program Examples

### Example 1: Creating a Table and Inserting Data
```python
import sqlite3

connection = sqlite3.connect("school.db")
cursor = connection.cursor()

cursor.execute("""
    CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        grade INTEGER
    )
""")

students = [("Amir", 88), ("Bella", 92), ("Chen", 76)]
cursor.executemany("INSERT INTO students (name, grade) VALUES (?, ?)", students)

connection.commit()
print(f"{cursor.rowcount} rows affected in the last operation")
connection.close()
```
**Expected Output:**
```
3 rows affected in the last operation
```
**Explanation:** `CREATE TABLE IF NOT EXISTS` ensures the table is only created once, avoiding errors on repeated runs. `.executemany()` efficiently inserts multiple rows using a list of tuples, with `?` placeholders preventing raw string concatenation of values into the SQL — a critical defense against SQL injection attacks. `.commit()` writes the changes permanently to the database file.

### Example 2: Querying Data with Parameterized Filters
```python
import sqlite3

connection = sqlite3.connect("school.db")
cursor = connection.cursor()

cursor.execute("SELECT name, grade FROM students WHERE grade > ?", (80,))
top_students = cursor.fetchall()

print("Students with grade above 80:")
for name, grade in top_students:
    print(f"- {name}: {grade}")

cursor.execute("SELECT AVG(grade) FROM students")
average = cursor.fetchone()[0]
print(f"Class average: {average:.2f}")

connection.close()
```
**Expected Output:**
```
Students with grade above 80:
- Amir: 88
- Bella: 92
Class average: 85.33
```
**Explanation:** The query uses a `?` placeholder with the value `80` passed as a tuple, which safely substitutes the value without risking SQL injection, unlike directly formatting user input into the query string. `.fetchall()` returns every matching row as a list of tuples, which can be unpacked directly in the `for` loop. `.fetchone()` retrieves a single row (here, the average grade computed by SQL's `AVG()` function).

## Real-World Use Cases
- Building small to medium desktop or CLI applications needing persistent local storage
- Prototyping database-driven applications before scaling to a full database server (PostgreSQL, MySQL)
- Storing application configuration, logs, or cached data in a lightweight, file-based format
- Embedded systems and mobile applications where a full database server isn't practical

## Features
- SQLite databases are single files, making them easy to back up, copy, or transport
- `sqlite3` supports transactions, allowing multiple operations to be committed or rolled back together
- Query results can be mapped to named-access rows using `connection.row_factory = sqlite3.Row`
- ORMs (Object-Relational Mappers) like SQLAlchemy build on top of raw database connections for higher-level, object-based database access

## Advantages
- No separate database server installation or configuration required, since `sqlite3` is part of the standard library
- Combines the power of SQL querying with Python's data processing capabilities
- Parameterized queries provide built-in protection against SQL injection
- Well-suited for learning database concepts before moving to production-grade database systems

## Best Practices
- Always use parameterized queries (`?` placeholders) instead of formatting values directly into SQL strings
- Use `with sqlite3.connect(...) as connection:` or explicit `.commit()`/`.close()` to properly manage the connection lifecycle
- Wrap related operations in a single transaction and commit once, rather than committing after every statement, for better performance
- For larger or multi-user applications, consider a full database server (PostgreSQL, MySQL) instead of SQLite

## Interview Questions
**Q1: Why should you always use parameterized queries instead of directly formatting values into a SQL string?**
A: Directly formatting user-provided values into a SQL string (e.g., using an f-string to build a query) opens the door to SQL injection, where malicious input can alter the intended SQL command and potentially expose, modify, or delete data it shouldn't have access to. Parameterized queries, using `?` placeholders with values passed separately, ensure the database driver treats the values strictly as data, never as executable SQL code, closing off this entire class of vulnerability.

**Q2: What is the purpose of `.commit()` when working with `sqlite3`, and what happens if you forget to call it?**
A: `.commit()` permanently saves any changes made during the current transaction (inserts, updates, deletes) to the database file. If you forget to call `.commit()`, those changes remain part of an uncommitted transaction and will be lost if the connection is closed or the program ends without committing — meaning your `INSERT` or `UPDATE` statements would appear to succeed within the session but not actually persist to the database file.

## Practice Coding Exercises
1. Create a SQLite database with a `books` table (`id`, `title`, `author`, `year`). Write a program that inserts five books and then queries and prints all books published after the year 2000.
2. Write a program that connects to the `students` table from the examples above and adds an `update_grade(student_name, new_grade)` function using a parameterized `UPDATE` statement, then verifies the update by querying the student's new grade.

## Quiz Questions
1. What SQL clause prevents an error if a table already exists?
   - A) IF EXISTS
   - B) IF NOT EXISTS
   - C) CREATE ONLY
   - D) UNIQUE
   - **Answer: B**

2. What is the primary purpose of using `?` placeholders in a query?
   - A) To speed up query execution
   - B) To prevent SQL injection
   - C) To format numbers automatically
   - D) To allow multiple database connections
   - **Answer: B**

3. Which method saves changes permanently to a SQLite database?
   - A) .save()
   - B) .commit()
   - C) .flush()
   - D) .write()
   - **Answer: B**

## Summary
The `sqlite3` module lets Python programs create, query, and manage lightweight relational databases without external dependencies, using parameterized queries for safety. Next, you'll learn how to work with structured file formats like JSON, CSV, and XML for data interchange.

\newpage
# Topic 29: File I/O with JSON/CSV/XML

## Topic Overview
This topic covers reading and writing structured data formats — JSON, CSV, and XML — which are widely used for data exchange between systems.

## Learning Objectives
By the end of this topic, learners will be able to:
- Read and write JSON data using the `json` module
- Read and write CSV files using the `csv` module
- Parse basic XML data using `xml.etree.ElementTree`
- Choose the appropriate format for a given data exchange scenario

## What Exactly Is It?
JSON (JavaScript Object Notation), CSV (Comma-Separated Values), and XML (Extensible Markup Language) are three of the most common formats for storing and exchanging structured data between applications, especially over the web. Python's standard library includes built-in modules — `json`, `csv`, and `xml.etree.ElementTree` — that let you convert between these text-based formats and native Python data structures like dictionaries and lists, without needing any third-party dependencies for basic use cases.

## Key Concepts
- **`json.dumps()`/`json.loads()`**: Convert Python objects to/from JSON strings
- **`json.dump()`/`json.load()`**: Write/read JSON directly to/from files
- **`csv.reader`/`csv.writer`**: Read/write CSV files as lists of rows
- **`csv.DictReader`/`csv.DictWriter`**: Read/write CSV files using dictionaries with column names as keys
- **`xml.etree.ElementTree`**: Parses XML into a tree of elements that can be navigated and searched

## Program Examples

### Example 1: Reading and Writing JSON
```python
import json

data = {
    "name": "Acme Corp",
    "employees": 150,
    "departments": ["Sales", "Engineering", "Support"],
    "active": True
}

with open("company.json", "w") as file:
    json.dump(data, file, indent=4)

with open("company.json", "r") as file:
    loaded_data = json.load(file)

print(loaded_data["name"])
print(loaded_data["departments"])
print(type(loaded_data))
```
**Expected Output:**
```
Acme Corp
['Sales', 'Engineering', 'Support']
<class 'dict'>
```
**Explanation:** `json.dump(data, file, indent=4)` writes the Python dictionary to a file as nicely formatted JSON text, with `indent=4` making it human-readable. `json.load(file)` reads that JSON text back and automatically converts it into an equivalent Python dictionary, preserving nested lists and correct data types like booleans, demonstrating how naturally JSON maps to Python's built-in structures.

### Example 2: Reading and Writing CSV with DictReader/DictWriter
```python
import csv

rows = [
    {"name": "Fatima", "department": "Sales", "salary": 55000},
    {"name": "George", "department": "Engineering", "salary": 72000}
]

with open("employees.csv", "w", newline="") as file:
    writer = csv.DictWriter(file, fieldnames=["name", "department", "salary"])
    writer.writeheader()
    writer.writerows(rows)

with open("employees.csv", "r") as file:
    reader = csv.DictReader(file)
    for row in reader:
        print(f"{row['name']} works in {row['department']}, earning ${row['salary']}")
```
**Expected Output:**
```
Fatima works in Sales, earning $55000
George works in Engineering, earning $72000
```
**Explanation:** `csv.DictWriter` writes rows using dictionaries, with `.writeheader()` adding a header row based on `fieldnames` and `.writerows()` adding the data rows beneath it. `csv.DictReader` reads the file back and treats the first row as column headers automatically, yielding each subsequent row as a dictionary — this is generally more convenient than the plain `csv.reader`, which returns rows as unlabeled lists.

## Real-World Use Cases
- Exchanging data with web APIs, which almost universally use JSON as their format
- Importing/exporting spreadsheet-like data (CSV) between Excel, databases, and Python scripts
- Parsing configuration files or legacy data feeds provided in XML format
- Saving application settings or state in a human-readable, easily editable JSON file

## Features
- `json` supports nested structures of dictionaries, lists, strings, numbers, and booleans natively
- `csv` module handles quoting and escaping of special characters (commas within fields, etc.) automatically
- `ElementTree` supports XPath-like search expressions (`.find()`, `.findall()`) to navigate XML trees
- `json.dumps(..., indent=N)` and similar options make output more readable for humans

## Advantages
- All three formats are widely supported across virtually every programming language and platform
- Built-in modules mean no extra installation is needed for common file interchange formats
- JSON's structure closely mirrors Python dictionaries and lists, making conversion nearly seamless
- CSV remains the standard for tabular data exchange with spreadsheet applications

## Best Practices
- Always open CSV files with `newline=""` on write to prevent extra blank lines on some platforms
- Use `json.dump`/`json.load` for file operations rather than manually combining `dumps()`/`loads()` with separate file reads/writes
- Validate and handle missing or malformed fields gracefully when parsing external JSON, CSV, or XML data
- Prefer JSON for nested/hierarchical data and CSV for flat, tabular data

## Interview Questions
**Q1: What is the difference between `json.dumps()`/`json.loads()` and `json.dump()`/`json.load()`?**
A: `json.dumps()` converts a Python object into a JSON-formatted string in memory, and `json.loads()` parses a JSON string back into a Python object — both operate purely on strings. `json.dump()` and `json.load()` do the same conversions but work directly with file objects, writing JSON straight to a file or reading and parsing JSON directly from a file, without you needing to manually read the file content into a string first.

**Q2: Why is `csv.DictReader` often preferred over the plain `csv.reader`?**
A: `csv.reader` returns each row as a plain list of string values with no labels, requiring you to remember the correct column index for each field, which is error-prone and hard to read. `csv.DictReader` automatically uses the first row as column headers and returns each subsequent row as a dictionary, letting you access fields by name (e.g., `row["name"]`), which is clearer, less error-prone, and more resilient to column reordering.

## Practice Coding Exercises
1. Write a program that reads a list of product dictionaries (name, price, quantity) and saves them to a JSON file, then reads the file back and calculates the total inventory value (sum of price × quantity for all products).
2. Write a program that reads a CSV file of exam scores (name, score) using `csv.DictReader`, calculates the class average, and writes a new CSV file containing only the students who scored above average, using `csv.DictWriter`.

## Quiz Questions
1. Which function converts a Python dictionary into a JSON-formatted string?
   - A) json.load()
   - B) json.dumps()
   - C) json.parse()
   - D) json.read()
   - **Answer: B**

2. Which CSV class reads rows into dictionaries using the header row as keys?
   - A) csv.reader
   - B) csv.writer
   - C) csv.DictReader
   - D) csv.Parser
   - **Answer: C**

3. Which module is used to parse XML in Python's standard library?
   - A) xml.etree.ElementTree
   - B) xml.parser
   - C) json
   - D) csv
   - **Answer: A**

## Summary
JSON, CSV, and XML are essential formats for exchanging structured data, and Python's standard library provides straightforward tools for reading and writing all three. Next, you'll learn the basics of networking in Python, including sockets and making HTTP requests.

\newpage
# Topic 30: Networking Basics (Sockets, Requests)

## Topic Overview
This topic introduces basic networking in Python, covering low-level socket programming and high-level HTTP requests using the popular `requests` library.

## Learning Objectives
By the end of this topic, learners will be able to:
- Explain what sockets are and create a simple client-server example
- Make HTTP GET and POST requests using the `requests` library
- Parse JSON responses from web APIs
- Handle common networking errors gracefully

## What Exactly Is It?
Networking in Python spans two levels: low-level socket programming, using the built-in `socket` module to establish raw TCP/UDP connections between machines, and high-level HTTP communication, typically done with the third-party `requests` library to interact with web servers and APIs. Sockets are the foundational building blocks that protocols like HTTP are built on top of, but for most application-level tasks (calling a web API), developers use `requests` rather than working with raw sockets directly.

## Key Concepts
- **Socket**: An endpoint for sending/receiving data across a network, created with `socket.socket()`
- **Client-server model**: A server listens for connections; a client connects to request or send data
- **`requests.get()`/`requests.post()`**: Send HTTP GET/POST requests to a URL
- **Response object**: Contains `.status_code`, `.json()`, `.text`, and `.headers`
- **Timeouts**: Preventing a request from hanging indefinitely using the `timeout` parameter
- **Error handling**: Catching `requests.exceptions.RequestException` for network failures

## Program Examples

### Example 1: A Simple Socket Client-Server Example
```python
# server.py
import socket

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(("localhost", 65432))
server.listen(1)
print("Server listening on port 65432...")

conn, addr = server.accept()
print(f"Connected by {addr}")
data = conn.recv(1024).decode()
print(f"Received: {data}")
conn.sendall("Message received!".encode())
conn.close()
```
```python
# client.py
import socket

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client.connect(("localhost", 65432))
client.sendall("Hello, Server!".encode())
response = client.recv(1024).decode()
print(f"Server replied: {response}")
client.close()
```
**Expected Output (server terminal, then client terminal):**
```
Server listening on port 65432...
Connected by ('127.0.0.1', 54321)
Received: Hello, Server!
```
```
Server replied: Message received!
```
**Explanation:** The server creates a socket, binds it to a local address and port, and calls `.listen()` to wait for incoming connections. The client creates its own socket and calls `.connect()` to the same address/port, then both sides use `.sendall()` and `.recv()` to exchange encoded byte data — this low-level exchange is the foundation that higher-level protocols like HTTP are built upon.

### Example 2: Making HTTP Requests with the requests Library
```python
import requests

response = requests.get("https://api.github.com/users/octocat", timeout=5)

if response.status_code == 200:
    data = response.json()
    print(f"Username: {data['login']}")
    print(f"Public repos: {data['public_repos']}")
else:
    print(f"Request failed with status code: {response.status_code}")

try:
    requests.get("https://invalid-domain-xyz123.com", timeout=3)
except requests.exceptions.RequestException as e:
    print(f"Network error occurred: {type(e).__name__}")
```
**Expected Output (actual repo count will vary):**
```
Username: octocat
Public repos: 8
Network error occurred: ConnectionError
```
**Explanation:** `requests.get()` sends an HTTP GET request to the specified URL, and `.json()` automatically parses a JSON response body into a Python dictionary. The `timeout` parameter prevents the request from hanging indefinitely if the server is slow or unreachable. Wrapping a request in a `try-except` for `requests.exceptions.RequestException` catches broad networking issues like DNS failures or connection timeouts gracefully.

## Real-World Use Cases
- Calling third-party web APIs to fetch weather data, currency rates, or social media information
- Building simple client-server applications for internal tools or games
- Web scraping and automated data collection (combined with parsing libraries)
- Health-check scripts that periodically ping servers to confirm they are online

## Features
- `socket` supports both TCP (reliable, connection-based) and UDP (faster, connectionless) protocols
- `requests` automatically handles redirects, cookies, and connection pooling
- `requests` supports headers, authentication, and query parameters as simple function arguments
- Response objects provide convenient properties like `.ok` (True if status code < 400)

## Advantages
- `requests` dramatically simplifies HTTP communication compared to Python's lower-level `urllib` or raw sockets
- Socket programming provides full control for custom network protocols and applications
- Both approaches are supported natively or via a widely trusted, well-documented third-party library
- JSON integration in `requests` streamlines working with modern web APIs

## Best Practices
- Always set a `timeout` on `requests` calls to avoid indefinitely hanging programs
- Check `response.status_code` (or use `response.raise_for_status()`) before assuming a request succeeded
- Close sockets explicitly (or use a `with` block) to release network resources properly
- Use `requests` for standard HTTP/API interactions; reserve raw sockets for custom, low-level protocols

## Interview Questions
**Q1: What is the difference between low-level socket programming and using a library like `requests`?**
A: Socket programming works at a lower level, directly managing raw byte streams over TCP/UDP connections, giving full control but requiring you to manually implement details like message framing, encoding, and protocol logic. The `requests` library operates at a higher level specifically for HTTP, handling connection management, encoding, redirects, and JSON parsing automatically, making it far simpler and faster to use for typical web API interactions, though it doesn't offer the low-level flexibility of raw sockets.

**Q2: Why is it important to set a `timeout` when making requests with the `requests` library?**
A: Without a timeout, a request that never receives a response — due to a slow, unresponsive, or unreachable server — will cause your program to hang indefinitely, which can freeze an application or waste resources waiting. Setting a `timeout` value ensures the request will raise an exception after a specified number of seconds if no response is received, allowing your program to handle the failure gracefully instead of hanging forever.

## Practice Coding Exercises
1. Write a simple socket-based client-server program where the client sends a message to the server, and the server responds by reversing the string and sending it back.
2. Write a program using `requests` that fetches data from a public API (e.g., a random joke or quote API), extracts and prints a specific field from the JSON response, and handles potential network errors gracefully with a try-except block.

## Quiz Questions
1. Which method sends an HTTP GET request using the requests library?
   - A) requests.fetch()
   - B) requests.get()
   - C) requests.send()
   - D) requests.load()
   - **Answer: B**

2. What does `.json()` do on a requests Response object?
   - A) Converts the response into raw bytes
   - B) Parses the JSON response body into a Python object
   - C) Sends a new JSON request
   - D) Validates the JSON schema
   - **Answer: B**

3. What is the purpose of setting a timeout on a network request?
   - A) To speed up the server
   - B) To prevent the program from hanging indefinitely
   - C) To encrypt the request
   - D) To automatically retry failed requests
   - **Answer: B**

## Summary
Networking in Python ranges from low-level socket programming to high-level HTTP requests via the `requests` library, both essential for building connected applications. Next, you'll learn about virtual environments and package management to keep project dependencies organized and isolated.

\newpage
# Topic 31: Python Virtual Environments & Package Management

## Topic Overview
This topic covers virtual environments and package management, essential tools for isolating project dependencies and avoiding version conflicts between different Python projects.

## Learning Objectives
By the end of this topic, learners will be able to:
- Explain why virtual environments are necessary
- Create and activate a virtual environment using `venv`
- Install, freeze, and manage dependencies with `pip`
- Use a `requirements.txt` file to reproduce a project's environment

## What Exactly Is It?
A virtual environment is an isolated Python installation for a specific project, with its own set of installed packages separate from the system-wide Python installation and other projects. This solves a common problem: if Project A needs version 1.0 of a library and Project B needs version 2.0 of the same library, installing both globally would cause a conflict. Python's built-in `venv` module creates these isolated environments, and `pip` (Python's package installer) is used within them to install, upgrade, and manage packages specific to that project.

## Key Concepts
- **`venv`**: Python's built-in module for creating virtual environments
- **Activation**: Switching your shell to use the virtual environment's isolated Python and pip
- **`pip install package_name`**: Installs a package into the currently active environment
- **`pip freeze`**: Lists all installed packages and their exact versions
- **`requirements.txt`**: A text file listing project dependencies, used to recreate an environment elsewhere
- **`pip install -r requirements.txt`**: Installs all dependencies listed in a requirements file

## Program Examples

### Example 1: Creating and Using a Virtual Environment (Command Line)
```bash
# Create a virtual environment named "venv"
python -m venv venv

# Activate it (macOS/Linux)
source venv/bin/activate

# Activate it (Windows)
venv\Scripts\activate

# Confirm the isolated Python is active
which python
```
**Expected Output (macOS/Linux example):**
```
/Users/yourname/project/venv/bin/python
```
**Explanation:** `python -m venv venv` creates a new folder called `venv` containing an isolated copy of the Python interpreter and its own `site-packages` directory for installed libraries. After activation, the `which python` command confirms the shell is now using the Python interpreter inside the `venv` folder rather than the system-wide one, meaning any packages installed will only affect this project.

### Example 2: Installing Packages and Creating a requirements.txt
```bash
# With the virtual environment active, install packages
pip install requests pandas

# Save the exact installed versions to a file
pip freeze > requirements.txt

# View the contents of requirements.txt
cat requirements.txt
```
**Expected Output (example contents of requirements.txt):**
```
certifi==2024.7.4
charset-normalizer==3.3.2
idna==3.7
numpy==2.0.1
pandas==2.2.2
python-dateutil==2.9.0
pytz==2024.1
requests==2.32.3
six==1.16.0
urllib3==2.2.2
```
```bash
# On another machine, recreate the exact same environment
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```
**Explanation:** `pip freeze > requirements.txt` captures the precise versions of every installed package (including sub-dependencies like `numpy`, which `pandas` relies on), producing a file that fully describes the project's dependencies. Running `pip install -r requirements.txt` on a different machine installs the exact same package versions, ensuring the project behaves identically across development, testing, and production environments.

## Real-World Use Cases
- Ensuring every developer on a team uses the same package versions, avoiding "works on my machine" bugs
- Deploying applications to servers with a reproducible, isolated dependency set
- Working on multiple Python projects simultaneously that require conflicting library versions
- Sharing open-source projects where contributors need to easily set up an identical environment

## Features
- `venv` is built into Python 3.3+, requiring no separate installation
- Alternative tools like `conda`, `pipenv`, and `poetry` offer additional environment and dependency management features
- Virtual environments can be deleted and recreated at any time without affecting the system Python
- `pip list` shows currently installed packages in the active environment

## Advantages
- Prevents dependency conflicts between different projects on the same machine
- Makes projects portable and reproducible across different computers and environments
- Keeps the global/system Python installation clean and unaffected by project-specific packages
- Simplifies onboarding new developers, since `requirements.txt` documents exactly what's needed

## Best Practices
- Always create a new virtual environment for each project, rather than installing packages globally
- Commit `requirements.txt` (but not the `venv` folder itself) to version control
- Regenerate `requirements.txt` whenever dependencies change, using `pip freeze`
- Deactivate the virtual environment (`deactivate` command) when switching to a different project

## Interview Questions
**Q1: Why are virtual environments necessary in Python development?**
A: Virtual environments solve the problem of dependency conflicts between different projects — if Project A requires an older version of a library while Project B requires a newer, incompatible version, installing both globally would cause one project to break. A virtual environment creates an isolated space with its own installed packages for each project, so different projects on the same machine can have completely independent, non-conflicting sets of dependencies and versions.

**Q2: What is the purpose of a `requirements.txt` file, and how is it typically generated and used?**
A: A `requirements.txt` file lists a project's dependencies, usually including exact version numbers, so that the exact same environment can be recreated on another machine, by another developer, or in a production deployment. It's typically generated by running `pip freeze > requirements.txt` inside an activated virtual environment, which captures every currently installed package and its version, and is later used with `pip install -r requirements.txt` to install those exact packages elsewhere.

## Practice Coding Exercises
1. Create a new virtual environment for a sample project, activate it, install the `requests` package, and generate a `requirements.txt` file. Then write a short script using `requests` to verify the installation worked.
2. Simulate handing off a project to a teammate: deactivate your current environment, delete the virtual environment folder, then recreate it from scratch using only the `requirements.txt` file you generated, confirming the same packages are installed afterward.

## Quiz Questions
1. Which built-in module is used to create virtual environments in Python 3?
   - A) virtualenv
   - B) venv
   - C) envmanager
   - D) pipenv (built-in)
   - **Answer: B**

2. Which command captures all installed packages and their versions into a file?
   - A) pip list > requirements.txt
   - B) pip freeze > requirements.txt
   - C) pip export > requirements.txt
   - D) pip save > requirements.txt
   - **Answer: B**

3. What is the main benefit of using a virtual environment per project?
   - A) Faster code execution
   - B) Avoiding dependency conflicts between projects
   - C) Automatic code formatting
   - D) Built-in unit testing
   - **Answer: B**

## Summary
Virtual environments and `pip` allow developers to isolate and reproduce project dependencies reliably, avoiding conflicts and simplifying collaboration. Next, you'll learn how to write automated tests for your Python code using `unittest` and `pytest`.

\newpage
# Topic 32: Unit Testing (unittest/pytest)

## Topic Overview
This topic introduces automated testing in Python using the built-in `unittest` framework and the popular third-party `pytest` framework.

## Learning Objectives
By the end of this topic, learners will be able to:
- Write basic test cases using `unittest`
- Write simpler, more concise tests using `pytest`
- Use assertions to verify expected behavior
- Run test suites and interpret test results

## What Exactly Is It?
Unit testing is the practice of writing small, automated tests that verify individual pieces of code (usually functions) behave as expected. Python's standard library includes `unittest`, a full-featured testing framework based on classes and assertion methods, while `pytest`, a widely adopted third-party library, offers a simpler, more Pythonic syntax using plain functions and the standard `assert` statement. Both frameworks let you catch bugs early, confirm code changes don't break existing functionality, and document expected behavior through the tests themselves.

## Key Concepts
- **Test case**: A single test verifying one specific behavior or scenario
- **Assertion**: A statement that checks whether a condition is true, failing the test if not
- **`unittest.TestCase`**: The base class for writing tests using the standard library
- **`assertEqual()`, `assertTrue()`, `assertRaises()`**: Common `unittest` assertion methods
- **`pytest`**: A third-party framework using plain `assert` statements and simple function-based tests
- **Test discovery**: Automatically finding and running all test files/functions matching a naming pattern

## Program Examples

### Example 1: Writing Tests with unittest
```python
# calculator.py
def add(a, b):
    return a + b

def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b
```
```python
# test_calculator.py
import unittest
from calculator import add, divide

class TestCalculator(unittest.TestCase):
    def test_add_positive_numbers(self):
        self.assertEqual(add(2, 3), 5)

    def test_add_negative_numbers(self):
        self.assertEqual(add(-2, -3), -5)

    def test_divide_by_zero_raises_error(self):
        with self.assertRaises(ValueError):
            divide(10, 0)

    def test_divide_normal_case(self):
        self.assertEqual(divide(10, 2), 5.0)

if __name__ == "__main__":
    unittest.main()
```
**Expected Output (running `python test_calculator.py`):**
```
....
----------------------------------------------------------------------
Ran 4 tests in 0.001s

OK
```
**Explanation:** Each method starting with `test_` inside a class inheriting from `unittest.TestCase` is treated as an individual test. `assertEqual()` checks that two values match, while `assertRaises(ValueError)` verifies that calling `divide(10, 0)` correctly raises the expected exception. The four dots in the output represent four passing tests, and "OK" confirms the entire suite succeeded.

### Example 2: Writing Simpler Tests with pytest
```python
# test_calculator_pytest.py
from calculator import add, divide
import pytest

def test_add_positive_numbers():
    assert add(2, 3) == 5

def test_add_negative_numbers():
    assert add(-2, -3) == -5

def test_divide_by_zero_raises_error():
    with pytest.raises(ValueError):
        divide(10, 0)

def test_divide_normal_case():
    assert divide(10, 2) == 5.0
```
**Expected Output (running `pytest test_calculator_pytest.py -v`):**
```
test_calculator_pytest.py::test_add_positive_numbers PASSED
test_calculator_pytest.py::test_add_negative_numbers PASSED
test_calculator_pytest.py::test_divide_by_zero_raises_error PASSED
test_calculator_pytest.py::test_divide_normal_case PASSED

======================== 4 passed in 0.02s ========================
```
**Explanation:** `pytest` tests are plain functions (no class or inheritance required) using Python's built-in `assert` statement directly, making the syntax noticeably simpler than `unittest`. `pytest.raises(ValueError)` serves the same purpose as `unittest`'s `assertRaises`, verifying that the expected exception is raised. The `-v` (verbose) flag shows each individual test's name and pass/fail status.

## Real-World Use Cases
- Verifying that business logic functions (pricing, validation, calculations) behave correctly
- Preventing regressions — ensuring new code changes don't break previously working functionality
- Enabling confident refactoring, since a passing test suite confirms behavior hasn't changed
- Integrating with CI/CD pipelines to automatically run tests before deploying code

## Features
- `pytest` automatically discovers test files/functions matching the `test_*.py` / `test_*` naming convention
- `pytest` supports fixtures (`@pytest.fixture`) for reusable setup/teardown logic across tests
- `unittest` supports `setUp()`/`tearDown()` methods to run before/after each test
- Both frameworks support skipping tests, marking expected failures, and grouping related tests

## Advantages
- Automated tests catch bugs early, often before code even reaches production
- Provides living documentation of how functions are expected to behave
- Enables safer refactoring and faster development cycles with immediate feedback
- `pytest`'s concise syntax reduces boilerplate compared to `unittest`

## Best Practices
- Write tests for both normal ("happy path") cases and edge cases/error conditions
- Keep each test focused on verifying one specific behavior
- Name tests descriptively so failures are immediately understandable (e.g., `test_divide_by_zero_raises_error`)
- Run the full test suite regularly, ideally automatically before every code merge or deployment

## Interview Questions
**Q1: What is the difference between `unittest` and `pytest`, and why might a team choose one over the other?**
A: `unittest` is part of Python's standard library and requires tests to be written as methods inside a class inheriting from `unittest.TestCase`, using specific assertion methods like `assertEqual()`. `pytest` is a third-party framework that allows tests to be plain functions using Python's native `assert` statement, resulting in more concise, readable test code, plus additional features like fixtures and powerful test discovery. Teams often choose `pytest` for its simpler syntax and richer feature set, while `unittest` requires no extra installation since it's built in.

**Q2: Why is it good practice to test error conditions (like invalid input) in addition to normal expected behavior?**
A: Testing only the "happy path" (expected, valid inputs) leaves error-handling code unverified, meaning bugs in exception handling, validation logic, or edge cases could go unnoticed until they cause problems in production. Explicitly testing error conditions — such as confirming that dividing by zero raises a `ValueError` — ensures that your code fails safely and predictably when given invalid input, which is just as important as verifying correct behavior for valid input.

## Practice Coding Exercises
1. Write a function `is_valid_password(password)` that returns `True` only if a password is at least 8 characters long and contains at least one digit. Write a `pytest` test suite covering valid passwords, too-short passwords, and passwords without digits.
2. Write `unittest` tests for a `Stack` class (with `push`, `pop`, and `is_empty` methods) verifying correct behavior when pushing items, popping items, and popping from an empty stack (which should raise an appropriate exception).

## Quiz Questions
1. Which base class do unittest test cases typically inherit from?
   - A) unittest.Test
   - B) unittest.TestCase
   - C) unittest.Assertions
   - D) unittest.Suite
   - **Answer: B**

2. What statement does pytest use for assertions, unlike unittest's assertion methods?
   - A) verify
   - B) check
   - C) assert
   - D) expect
   - **Answer: C**

3. What is the primary purpose of unit tests?
   - A) To make code run faster
   - B) To verify that individual pieces of code behave as expected
   - C) To automatically fix bugs
   - D) To generate documentation only
   - **Answer: B**

## Summary
Unit testing with `unittest` or `pytest` allows developers to verify code correctness automatically, catch regressions early, and refactor with confidence. Next, you'll learn how to consume external web APIs in more depth, building on the networking basics covered earlier.

\newpage