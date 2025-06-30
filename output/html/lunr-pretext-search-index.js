var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": ""
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Dedication",
  "number": "",
  "title": "Dedication",
  "body": " For ...  "
},
{
  "id": "frontmatter-5",
  "level": "1",
  "url": "frontmatter-5.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " I would like to thank... TEST!!!  "
},
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": "   About this book:  "
},
{
  "id": "IntroToLogic",
  "level": "1",
  "url": "IntroToLogic.html",
  "type": "Section",
  "number": "1.1",
  "title": "Intro To Logic",
  "body": " Intro To Logic   Logic   When we say sentences like \"I will have a coffee or a donut\" or \"If a number is even and divisible by three then it is divisible by six\" we want to make sure we all agree on the precise meaning of the sentence. In this section, we will:    introduce the topic of logical statements  give precise meaning to common english words like \"and\", \"or\", \"all\", \"some\" \"if\", and \"then\"  determine exactly when logical statements are true (and when they are false) and how to show this  introduce various related statements to \"if-then\" statements.    As we move forward in our study we will have a common \"language\" for expressing mathematical ideas.     The Basics  One of the most important aspects of mathematics is communication. As much as it's important to solve problems and master arithmetic and algebraic skills, it's just as important to be able to communicate your answers (or questions) to others so that everyone has the same understanding of what is being said mathematically.  In mathematics we really care about the truth of sentences that we write or say. We introduce the following concepts:  A statement is a sentence that is either always true or always false (but not both).  \"Ottawa is the capital of Canada\" is a true statement.  \" \" is a false statement.   Non-Examples \"What time is it?\" is a sentence that is not a statement. It is simply a question and cannot be given a truth value of true or false. Similarly, \"Go do you homework\" is a command, and not a statement.   Sometimes we want sentences to have a variable in them so that when we fill in the variable with a value it becomes a statement.  An open sentence is a sentence with a variable such that the sentence becomes a statement when you fill in a value into the variable.  \" \" is an open sentence. It is true when or and false for any other numbers.  \"Winnipeg is the capital city of Canadian province P\" is an open sentence. It is true when P = \"Manitoba\" and false for all other Canadian provinces.     Notes For a Deeper Understanding     In open sentences, we usually restrict the allowable inputs for variables. The set of allowable inputs is called the domain . In the first example above, it's implicit that we only want to be a number, and not, say, a colour, or telephone, or anything else! If it's not enitrely clear what the domiain of an open sentence is, we should tell people what the domain is.    We want statements to have exactly one truth value; either True(T) or False(F). If we know a sentence is a statement and it's not true, it must be false. The easiest way to think about this is by asking yourself \"am I being lied to?\" If the answer is no, then the statement is true (even if it doesn't really apply or make sense).      Put exercise here    And, Or, and Not  In the English language, there is a lot of ambiguity in the words that we say. Consider the following two sentences:   Your hamburger combo comes with fries or onion rings.    You can check a free bag if you are have elite status or you purchased a business class ticket.   In both of these examples, the word \"or\" has a different meaning. In the first, \"or\" is used exclusively; you can have fries or onion rings but not both. In the second, it is used inclusively; you would expect that you would get to check a free bag if you had elite status and a business class ticket.  In mathematics, we aim to be as precise as possible with our language. We want to make sure that everyone understands the exact same ideas when we express ourselves, especially in determining when a statement is true or false. The mathematical community has agreed upon precise meanings for words such as \"and\", \"or\", \"not\", \"all\", \"some\", and \"if-then\" (among others). Let's learn about them now. In the following definition we use and as variables to mean any two statements:   If and are statements, then:  the statement \"  and  \" is true exactly when is true and is true. Otherwise it is false.  the statement \"  or  \" is false exactly when is false and is false. Otherwise it is true.      Let \"I will have a donair for dinner\" and \"I will have pizza for dinner\". Determine if the statements \" and \" and \" or \" are true when:    I had both a donair and pizza for dinner    I had a donair for dinner, but not pizza    I had pizza for dinner, but not a donair    I had neither a donair or pizza for dinner.      and :   T    F    F    F      or :   T    T    T    F        If is a statement, then the negation of , written is a statment with the opposite truth value of (but with the same context). If is an open sentence, then is an open sentence with the opposite truth value for each variable input.  If \"2 is a prime number\" (which is true) then \"2 is not a prime number\" (which is false).  If over the domain of counting numbers (which is true when and false otherwise) then (which is false when and true otherwise). You could also write as , or in many other logically equivalent ways.    If over the domain of counting numbers, explain why isn't the negation of .   When , is false, since 5 is not less than 5. However is also false when since 5 is not greater than 5. Since these open sentences do not have opposite truth values for every possible input, one cannot be the negation of the other.    We can write down more complex expressions using combinations of \"and\", \"or\", and \"not\". To help us determine when these complex statements are true, we can use a truth table to look at these compound statements piece by piece:   If and are two (usually compound) statements, we say that they are logically equivalent when their truth values always agree given the truth values of the constituent parts.    Supplementary Video      Quantified Statements When we talk about mathematical ideas, we want to express how many objects they apply to. We do this by using quantifiers:  Universal quantifiers are words that signify every object in our domain (that is, every object under consideration). These are words like \"all\", \"for all\", \"every\", \"no\", \"none\", and \"each\".  Existential quantifiers are words that signify at least one object in our domain. These are words and phrases like \"there is\", \"some\", \"at least one\", and \"there exists\".   Some universally quantified statements are:   All cats are mammals    Each whole number is odd    No polygons have exactly two sides    Every whole number has a non-negative square       Some existentially quantified statements are:   There is an odd integer    Some cats are grey    At least one fraction is equal to 1    There exists a prime number with a factor of 6       You may have noticed that these quantified statements are a combination of a quantifier (universal or existental) and an open sentence, thought sometimes when written in English the variable can be hidden. For example, \"there is an odd integer\" can be reworded to \"there is an integer such that is odd.\"   In the two examples above, write the quantified statement using a combination of a quantifier (use only \"For All\" or \"There is\") and an open sentence. Make sure to include a variable. Then, determine the truth value of the quantified statement.   You may have a different wording, but one choice would be:   For all cats , is a mammal (T)    For all whole numbers , is odd (F)    For all polygons , does not have exactly two sides (T) , ,    For all whole numbers , (T)   Note that, for 3, we changed \"No are \", where was an open sentence, to \"All are \".    You may have a slightly different wording, but one choice would be:   There is an integer such that is odd. (T)    There is a cat such that is grey. (T)    There is a fraction such that (T)    There is a prime number such that is divisible by 6 (F)   Later in this chapter we will learn how to write \"is an odd number\" and \"is divisible by 6\" more mathematically, using algebra.     Notes for a Deeper Understanding     A universally quantified statement can be vacuously true if there are no objects that apply to the statement. For example, \"all unicorns are named George\" is not lying to you since you can't find a unicorn not named George, so we consider statements like this true.    Other than vacuously true statements, if a universally quantified statement is true so is the \"extentially\" quantified version. For example, \"all polygons have at least three sides\" is true, so \"some polygons have at least three sides\" is true too! Remember, existential quantifiers only care of an object exists, not how many.      We can negate quantified statements as well. We do this regularly in our daily lives, but let's try and pinpoint what is going on:   A friend tells you that all cats are blue. This is obviously a false statement! Suppose you wanted to reply to your friend with the correct negated (true) statement. Which of the following could you reply with?    Some cats are blue    Some cats are not blue    All cats are not blue    There is a cat that isn't blue    No cats are blue     Statements 2 and 4 are correct. Be careful with statements 3 and 5; the reason we know not all cats are blue is that we've seen cats that are not blue. There may be a cat out there that is blue that we've never seen, so we can't say for sure that no cats are blue.     A friend tells you that some cats have wings. This, like the exercise above, is obviously a false statement! Suppose you wanted to reply to your friend with the correct negated (true) statement. Which of the following could you reply with?    All cats have wings    No cats have wings    Some cats do not have wings    All cats do not have wings     Statements 2 and 4 are correct. Note the form of these two statements: statement 2 is \"No P are Q\" and statement 4 is \"All P are not Q\". As mentioned above, these are logically equivalent.    Note that in the previous two exercises, there was a pattern to negating a quantified statement. In general, this holds for negating any quantified statement.  To negate a quantified statement of the type \"All P are Q\" or \"Some P are Q\":   Switch the type of quantifier to the other    Negate the open sentence part of the quantified statement.     Remember that you can rewrite \"No P are Q\" as \"All P are not Q\". Using this, you can negate \"No P are Q\" to \"Some P are Q\" (and vice versa).   Notes for a Deeper Understanding  It might be clear, but it should be noted that for any statement or open sentence it's true that is logically equivalent to . So, much like negatives, two negations cancel each other out. Since quantified statements are indeed statements, this holds for them as well.      Viewing Quantified Statements as a Diagram  It's quite helpful to view these quantified statements as a diagram. Since most students are familiar with the idea of a Venn diagram (which are circles representing groups of objects), this is the tool we will use to help us visualize these statements.  We want to be able to represent both universally- and existentially quantified statements. For both types, we first need to draw a box representing the domain of all possible objects under consideration:    First Image      For universally quantified statements (e.g., \"All A are B\" or as a concrete example \"All cats are mammals\") we want a circle representing all objects that satisfy condition A (all cats in our example).    Second Image    Now, we want a circle to represent all objects that satisfy B (in our example, all mammals). Note that since we wish to show all A are B, we want to draw this circle so that all of the A objects are also included in the B circle:    Third Image      For existentially quantified statements (e.g., \"Some A are B\" or as a concrete example \"Some cats are grey\") we want a circle representing all objects that satisfy condition A (all cats in our example).    Fourth Image    Now, we want a circle to represent all objects that satisfy B (in out example, things that are grey). Note that there could be cats that are not grey, and grey things that are not cats, so we need to draw the diagram so that they only partially overlap. We also know that there is definitely at least one A that is B (cat that is grey) since the statement tells us so, therefore we can put a little dot in the intersection to represent that object (the grey cat).    Fifth Image      There is an alternate way of representing a universally quantified statement with overlapping circles. We will hatch out the area where we know is empty (the area that is A but not B, or in our example the area that is cats that are not mammals):   Using the ideas above, draw a diagram representing the statement \"No A are B\".   We could represent this in (at least) two ways. One way is as two non-overlapping circles:    No A are B    Or as intersecting circles with the intersection hatch out to indicate it is empty.   No A are B Ver 2         Expressing Even and Odd Numbers Algebraically  In the coming sections, we will be using even and odd numbers as examples of quantified and conditional statements. For example, we can say \"All pairs of whole numbers that are both odd have a sum that is even and a product that is odd\".  To determine the truth values of these statements, it's not enough to only look at some examples, as we'll see in the upcoming section . So we will have to learn to express the idea of even and odd numbers it terms of the property that makes them even and odd.   How would you explain or show to someone that the number 12 is even? How about that 15 is odd? Can you extend these ideas to any even or odd number?   Of course, there are many ways of doing this, but one way is to draw a picture. There is a very good chance that you would do the same thing! Let's start by showing 12 is even:    2=2x6    Here we took 12 dots and organized them as 6 rows of 2. Since 12 can be grouped evenly into rows of 2, we know that 12 is even. Hence, we can write   In general, the number of rows of 2 isn't particularly important to say that a number is even; it's the fact that we can group the number into *some amount* of rows of 2. Usually we'll express this as rows of 2. So for a even whole number , we know for some whole number .      2k=2xk     To show 15 is odd, you probably drew a picture similar to this:    15=2x7+1    Here we took the 15 dots and organized them into 7 rows of 2, but we had 1 dot remaining where we were unable to complete a full row of two. Hence, we can write   Like for even numbers, the number of rows of 2 isn't particularly important to say that a number is odd; it's the fact that we can group the number into as many rows of 2 as possible, we always have 1 left over. Usually we'll express this as rows of 2 + 1 remaining. So for a odd whole number , we know for some whole number .  In picture form:  15=2x7+1      To summarize: let be a whole number.   If is an even number then for some whole number .    If is an odd number then for some whole number       Notes for a Deeper Understanding     The number 0 is even since .    Even really just means \"divisible by 2\". We can (and will in subsequent chapters) extend this idea to express a number being divisible by some other number meaning for some whole number . The idea of \"odd\" extends similarly, though you can have more than one part remaining. This is basically the idea of remainders when doing division.    We can also extend these ideas to integers as well (that is, positive and negative counting numbers, including 0).       Supplementary Video: Even and Odd Numbers     "
},
{
  "id": "objectives-structures",
  "level": "2",
  "url": "IntroToLogic.html#objectives-structures",
  "type": "Objectives",
  "number": "1.1",
  "title": "Logic",
  "body": " Logic   When we say sentences like \"I will have a coffee or a donut\" or \"If a number is even and divisible by three then it is divisible by six\" we want to make sure we all agree on the precise meaning of the sentence. In this section, we will:    introduce the topic of logical statements  give precise meaning to common english words like \"and\", \"or\", \"all\", \"some\" \"if\", and \"then\"  determine exactly when logical statements are true (and when they are false) and how to show this  introduce various related statements to \"if-then\" statements.    As we move forward in our study we will have a common \"language\" for expressing mathematical ideas.   "
},
{
  "id": "subsec-LogicObj-4",
  "level": "2",
  "url": "IntroToLogic.html#subsec-LogicObj-4",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "A statement is a sentence that is either always true or always false (but not both).  \"Ottawa is the capital of Canada\" is a true statement.  \" \" is a false statement.   Non-Examples \"What time is it?\" is a sentence that is not a statement. It is simply a question and cannot be given a truth value of true or false. Similarly, \"Go do you homework\" is a command, and not a statement.  "
},
{
  "id": "subsec-LogicObj-6",
  "level": "2",
  "url": "IntroToLogic.html#subsec-LogicObj-6",
  "type": "Definition",
  "number": "1.1.4",
  "title": "",
  "body": "An open sentence is a sentence with a variable such that the sentence becomes a statement when you fill in a value into the variable.  \" \" is an open sentence. It is true when or and false for any other numbers.  \"Winnipeg is the capital city of Canadian province P\" is an open sentence. It is true when P = \"Manitoba\" and false for all other Canadian provinces.   "
},
{
  "id": "assemblage-Logic-2",
  "level": "2",
  "url": "IntroToLogic.html#assemblage-Logic-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "domain "
},
{
  "id": "subsec-LogicObj-8",
  "level": "2",
  "url": "IntroToLogic.html#subsec-LogicObj-8",
  "type": "Checkpoint",
  "number": "1.1.6",
  "title": "",
  "body": "Put exercise here "
},
{
  "id": "subsec-AndOrNot-4",
  "level": "2",
  "url": "IntroToLogic.html#subsec-AndOrNot-4",
  "type": "Definition",
  "number": "1.1.7",
  "title": "",
  "body": " If and are statements, then:  the statement \"  and  \" is true exactly when is true and is true. Otherwise it is false.  the statement \"  or  \" is false exactly when is false and is false. Otherwise it is true.    "
},
{
  "id": "subsec-AndOrNot-5",
  "level": "2",
  "url": "IntroToLogic.html#subsec-AndOrNot-5",
  "type": "Checkpoint",
  "number": "1.1.8",
  "title": "",
  "body": " Let \"I will have a donair for dinner\" and \"I will have pizza for dinner\". Determine if the statements \" and \" and \" or \" are true when:    I had both a donair and pizza for dinner    I had a donair for dinner, but not pizza    I had pizza for dinner, but not a donair    I had neither a donair or pizza for dinner.      and :   T    F    F    F      or :   T    T    T    F      "
},
{
  "id": "subsec-AndOrNot-6",
  "level": "2",
  "url": "IntroToLogic.html#subsec-AndOrNot-6",
  "type": "Definition",
  "number": "1.1.9",
  "title": "",
  "body": " If is a statement, then the negation of , written is a statment with the opposite truth value of (but with the same context). If is an open sentence, then is an open sentence with the opposite truth value for each variable input.  If \"2 is a prime number\" (which is true) then \"2 is not a prime number\" (which is false).  If over the domain of counting numbers (which is true when and false otherwise) then (which is false when and true otherwise). You could also write as , or in many other logically equivalent ways.  "
},
{
  "id": "subsec-AndOrNot-7",
  "level": "2",
  "url": "IntroToLogic.html#subsec-AndOrNot-7",
  "type": "Checkpoint",
  "number": "1.1.12",
  "title": "",
  "body": " If over the domain of counting numbers, explain why isn't the negation of .   When , is false, since 5 is not less than 5. However is also false when since 5 is not greater than 5. Since these open sentences do not have opposite truth values for every possible input, one cannot be the negation of the other.   "
},
{
  "id": "subsec-AndOrNot-8",
  "level": "2",
  "url": "IntroToLogic.html#subsec-AndOrNot-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "truth table "
},
{
  "id": "subsec-AndOrNot-9",
  "level": "2",
  "url": "IntroToLogic.html#subsec-AndOrNot-9",
  "type": "Definition",
  "number": "1.1.13",
  "title": "",
  "body": " If and are two (usually compound) statements, we say that they are logically equivalent when their truth values always agree given the truth values of the constituent parts.  "
},
{
  "id": "TestFig",
  "level": "2",
  "url": "IntroToLogic.html#TestFig",
  "type": "Figure",
  "number": "1.1.14",
  "title": "",
  "body": " Supplementary Video   "
},
{
  "id": "subsec-Quantifiers-2",
  "level": "2",
  "url": "IntroToLogic.html#subsec-Quantifiers-2",
  "type": "Definition",
  "number": "1.1.15",
  "title": "",
  "body": " Universal quantifiers are words that signify every object in our domain (that is, every object under consideration). These are words like \"all\", \"for all\", \"every\", \"no\", \"none\", and \"each\".  Existential quantifiers are words that signify at least one object in our domain. These are words and phrases like \"there is\", \"some\", \"at least one\", and \"there exists\".   Some universally quantified statements are:   All cats are mammals    Each whole number is odd    No polygons have exactly two sides    Every whole number has a non-negative square       Some existentially quantified statements are:   There is an odd integer    Some cats are grey    At least one fraction is equal to 1    There exists a prime number with a factor of 6      "
},
{
  "id": "subsec-Quantifiers-4",
  "level": "2",
  "url": "IntroToLogic.html#subsec-Quantifiers-4",
  "type": "Checkpoint",
  "number": "1.1.18",
  "title": "",
  "body": " In the two examples above, write the quantified statement using a combination of a quantifier (use only \"For All\" or \"There is\") and an open sentence. Make sure to include a variable. Then, determine the truth value of the quantified statement.   You may have a different wording, but one choice would be:   For all cats , is a mammal (T)    For all whole numbers , is odd (F)    For all polygons , does not have exactly two sides (T) , ,    For all whole numbers , (T)   Note that, for 3, we changed \"No are \", where was an open sentence, to \"All are \".    You may have a slightly different wording, but one choice would be:   There is an integer such that is odd. (T)    There is a cat such that is grey. (T)    There is a fraction such that (T)    There is a prime number such that is divisible by 6 (F)   Later in this chapter we will learn how to write \"is an odd number\" and \"is divisible by 6\" more mathematically, using algebra.   "
},
{
  "id": "assemblage-Quantifiers-2",
  "level": "2",
  "url": "IntroToLogic.html#assemblage-Quantifiers-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vacuously true "
},
{
  "id": "subsec-Quantifiers-7",
  "level": "2",
  "url": "IntroToLogic.html#subsec-Quantifiers-7",
  "type": "Checkpoint",
  "number": "1.1.19",
  "title": "",
  "body": " A friend tells you that all cats are blue. This is obviously a false statement! Suppose you wanted to reply to your friend with the correct negated (true) statement. Which of the following could you reply with?    Some cats are blue    Some cats are not blue    All cats are not blue    There is a cat that isn't blue    No cats are blue     Statements 2 and 4 are correct. Be careful with statements 3 and 5; the reason we know not all cats are blue is that we've seen cats that are not blue. There may be a cat out there that is blue that we've never seen, so we can't say for sure that no cats are blue.   "
},
{
  "id": "subsec-Quantifiers-8",
  "level": "2",
  "url": "IntroToLogic.html#subsec-Quantifiers-8",
  "type": "Checkpoint",
  "number": "1.1.20",
  "title": "",
  "body": " A friend tells you that some cats have wings. This, like the exercise above, is obviously a false statement! Suppose you wanted to reply to your friend with the correct negated (true) statement. Which of the following could you reply with?    All cats have wings    No cats have wings    Some cats do not have wings    All cats do not have wings     Statements 2 and 4 are correct. Note the form of these two statements: statement 2 is \"No P are Q\" and statement 4 is \"All P are not Q\". As mentioned above, these are logically equivalent.   "
},
{
  "id": "subsec-QuantVenn-2",
  "level": "2",
  "url": "IntroToLogic.html#subsec-QuantVenn-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Venn diagram "
},
{
  "id": "subsec-QuantVenn-7",
  "level": "2",
  "url": "IntroToLogic.html#subsec-QuantVenn-7",
  "type": "Checkpoint",
  "number": "1.1.21",
  "title": "",
  "body": " Using the ideas above, draw a diagram representing the statement \"No A are B\".   We could represent this in (at least) two ways. One way is as two non-overlapping circles:    No A are B    Or as intersecting circles with the intersection hatch out to indicate it is empty.   No A are B Ver 2    "
},
{
  "id": "subsec-EvenOdd-4",
  "level": "2",
  "url": "IntroToLogic.html#subsec-EvenOdd-4",
  "type": "Checkpoint",
  "number": "1.1.22",
  "title": "",
  "body": " How would you explain or show to someone that the number 12 is even? How about that 15 is odd? Can you extend these ideas to any even or odd number?   Of course, there are many ways of doing this, but one way is to draw a picture. There is a very good chance that you would do the same thing! Let's start by showing 12 is even:    2=2x6    Here we took 12 dots and organized them as 6 rows of 2. Since 12 can be grouped evenly into rows of 2, we know that 12 is even. Hence, we can write   In general, the number of rows of 2 isn't particularly important to say that a number is even; it's the fact that we can group the number into *some amount* of rows of 2. Usually we'll express this as rows of 2. So for a even whole number , we know for some whole number .      2k=2xk     To show 15 is odd, you probably drew a picture similar to this:    15=2x7+1    Here we took the 15 dots and organized them into 7 rows of 2, but we had 1 dot remaining where we were unable to complete a full row of two. Hence, we can write   Like for even numbers, the number of rows of 2 isn't particularly important to say that a number is odd; it's the fact that we can group the number into as many rows of 2 as possible, we always have 1 left over. Usually we'll express this as rows of 2 + 1 remaining. So for a odd whole number , we know for some whole number .  In picture form:  15=2x7+1     "
},
{
  "id": "subsec-EvenOdd-5",
  "level": "2",
  "url": "IntroToLogic.html#subsec-EvenOdd-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "even number odd number "
},
{
  "id": "EvenOddVid",
  "level": "2",
  "url": "IntroToLogic.html#EvenOddVid",
  "type": "Figure",
  "number": "1.1.24",
  "title": "",
  "body": " Supplementary Video: Even and Odd Numbers   "
},
{
  "id": "sec-ConditionalStatements",
  "level": "1",
  "url": "sec-ConditionalStatements.html",
  "type": "Section",
  "number": "1.2",
  "title": "Conditional Statements",
  "body": " Conditional Statements   What is a Conditional Statement   One of the most important type of statements in mathematics is the conditional statements or, more colloqually, if-then statement . These statements are of the form \"if P then Q\". We call P the condition and Q the conclusion of the conditional statement, or simply the if-part and then-part. We want to know when these statements are true or false, so let's explore this now:    Your professor tells you \"if you get 100 percent on the next midterm then I will give you a dollar\". In which of the following four situations is the professor lying to you (remember, we say a statement is false if it is indeed a lie):     You get 100 percent, and your professor does give you a dollar    You get 100 percent, and your professor does not give you a dollar    You do not get 100 percent, and your professor does give you a dollar    You do not get 100 percent, and your professor does not give you a dollar      The only situation where your professor is lying to you is in situaion 2. Situaion 1 is obviously true, and the statement does not really apply to situations 3 and 4 as the if-part isn't satisfied. We call the statement vacuously true in these two situations.    Of course, there is nothing special about the meaning of the if-part and then-part in the previous example. In general we can say that an if-then statement is false when the if-part is true and the then-part is false, and it is true otherwise. Now we can construct a truth table for \"it P then Q\":   Truth Table for \"if P then Q\"   Truth Table for \"if P then Q\"      Justifying Conditional Statements  In math, we're more concerned with if-then statements where both the if-part and then-part are open sentences with variables. For example \"if is an odd integer then is also odd.\" In these cases, there's an assumed universal quantifier before these: \"for all integers if is odd then is odd.\" We don't usually write the quantifier, but it's there in the background. Since it's a universially quantified statement, we want it to be true for all inputs into our variables.  Remembering that an if-then statement is only false when the if-part is true and the then-part is false, an if-then statement like the one above is true exactly when there are no inputs that make the if-part true and the then-part false.  To prove an if-then statement is true, we need to show that the \"dreaded case\", where the if-part is true and the then-part is false, never happens. There are three main ways to do this:   Assume the if-part is true, and show that the then part *must* be true. Thus the \"dreaded case\" is impossible. This is called a direct proof .    Assume the then-part is false, and show that the if-part *must* be false. Thus the \"dreaded case\" is impossible.    Assume that there is an input that gives the \"dreaded case\" (where the if-part is true and the thenn-part is false) and show that some sort of contradition arises where mathemathics \"breaks\".   We will mainly focus on direct proofs in this book, though there are a few times where we will see a proof of another type. When we come across those, we will remind everyone of the logic behind those types of proofs.   Supplementary video: conditional statements     Notes for Additional Understanding  We will mainly focus on direct proofs, though there will be times when we look at the other two types. We will revisit the logic behind those two types when the need arises.   Let's look at some examples of direct proofs.   Show that the following statements are true using direct proofs:   if is an even integer then is even    if and are odd integers then is even    The sum of any six consecutive integers is always odd. (hint: can you reword this as an if-then statement?)      We need to:   assume that is even and    show that must be even.   So let's assume that is even. This means that for some integer . We need to show that is even, thus where the expression in the brackets must be an integer. Now that we have our set-up, we can prove this result. Consider . By our assumption: We know how we need the expression to look algebraically ( as ), so we use our creativity to get there:   Since is an integer, we are done. We have shown that we can always express in the form of an even integer, and this is what we wanted to prove.    We need to:   Assume that and are odd and    Show that must be even.   So let's write our assumption in terms of the algebraic definition of what it means for a number to be odd. So let and for some integers .     Caution!!  CAUTION!! A very common mistake that students make is to use the same variable for the integers in the two above expressions (e.g. and for some integer ). Note that this would mean that and would be the same number (depending on the choice of ). We want and to be possibly different numbers, so we need two different variables to be able to express this.  We need to show that where the bracket is some integer. Now that we have our set-up we can prove the result.  Consider . By our assumption, . We know how we need the expression to look, so we can use our creativity to get there: Since the expression in the brackets is the sum of integers, the bracket simplifies to an integer. So we've written in the form we like and we are done.    As the hint says, it might be easiest to reword this as an if-then statement first. One way to do this is If are consecutive integers, then is odd.   Now that we have a conditional statement we need to:   Assume our integers are consecutive and    Show their sum is odd    So let's write our assumption algebraically: Since the variables are just names for our numbers, let's let be the smallest integer, be the next smallest, and so on. Since they're all consecutive:   and similarly  and  Now we need to show that we can always write where the bracket is some integer. Let's try to use our creativity to get there:  Consider . Using our assumption and noting the form we want to get, we can do the following: We know we want the expression to be of the form so we can \"pull out\" a 1, and hopefully what is left will have a common factor of 2 so we can factor it out:   Since the expression in brackets is integers multiplied and added together, it is an integer, and thus the sum is odd. We have finished our proof.       Why Proofs Are Important  A good question that you have probably thought about is \"why do we even need to prove results like in the previous section?\" and \"If I show a few examples is that emough to prove a result?\" Let's explore these ideas:   Is the conditional statement \"if is a whole number then is a prime number\" always true? Remember, a prime number is a number divisibile by exactly two numbers, 1 and itself.   It is not! However, it may take a while to find a counterexample. If we let we find that is indeed prime. For example, if then and you can check that 53 is a prime number. However, when , we have that and so is not a prime number.    The moral of the story here is that just doing a bunch of examples isn't enough to guarantee a statement is always true. It's possible that you haven't found a case where the result doesn't hold though a case does indeed exist.  Additionally, proofs can give you more information about *why* a result is true. If you study the structure of a proof, in many cases it can give you insight into the precise reasons why a result holds. We'll explore this idea in many proofs to come!       Counterexamples  When we were learning about conditional statements, we discussed when conditional statements were false. Remember, these are false exactly when the if-part true and the then-part is false.   We call an object that makes the if-part true and the then-part false a counterexample to the conditional statement.   Whenever we can find a counterexample, we know that the conditional statement is a false one.   The statement \"if and are odd counting numbers then is even\" is a false conditional statement since it has the counterexample and . Here, the if-part is true (both 3 and 5 are odd numbers) but the then-part is false ( is not an even number). Note that this is only one of many (in fact infinitely many counterexamples).  The statement \"if is an integer (positive or negative counting number, or zero)\" then is non-negative\" is a false conditional statement. Here, is a counterexample since is an integer (if-part true) but (then-part false). Note that this is the only counterexample for this conditional statement.   Even though the first example has infinitely many counterexamples and the second only has one, they are still both considered false in the same way, and that way is \"not always true\". There is no \"degree of falseness\".   Notes for Additional Understanding  In the case where a conditional statement is true for some, but not all, elements in the domain of the statement, it's possible to reword the statement to limit the domain so that it is now true. For example, we can change the second example above to \"If is a non-zero integer then is non-negative\" to make a true conditional statement.    Find a counterexample for each of the following false conditional statements:   If is a Canadian provincial capital then it is the city that has the largest population in the province.    If are consecutive counting numbers, then their sum is odd.    If is a polygon with four sides then all angles inside are less than 180 degrees.      As of 2022, the counterexamples are Fredericton (Moncton and Saint John are larger), Quebec City (Montreal [among others] is larger), Regina (Saskatoon is larger), Edmonton (Calgary is larger), and British Columbia (Vancouver [among others] is larger).    There are infinitely many sets of 5 consecutive numbers where the sum is even. In fact, any whose smallest number is even will have an even sum (can you prove this?).    One such counterexample is a chevron, where there is one internal angle greater than 180 degrees.     A usual rule in most Canadian provinces is \"If you are drinking alcohol then you must be at least 19 years old\". Which of the following people may be violating this rule?    A 20 year old    A person drinking a beer    A person drinking water    A 16 year old    Intuitively, most people know that you would need to check the person drinking beer, and the 16 year old. The person drinking a beer may be under 19, and the 16 year old may be drinking alcohol. Let's analyse this using the idea of a counterexample:    The 20 year old satisfies the condition \"then-part true\". Since the only time a conditional statement is false is when the \"if-part\" is true and the \"then-part\" false, this can never be a counterexample.    The person drinking a beer satisfies the condition \"if-part true\". If they also satisfy \"then-part false\" (so they are under 19 years old) then they would be a counterexample to the rule. You would check this person.    The person drinking water satisfies \"if-part false\". Just like with 1, there is no possibility thay they can be a counterexample.    The 16 year old satisfies \"then part false\". If they are also drinking (the \"if-part\" true) then they are a counterexample. You would check this person.     Even though this was an easy question when you're familliar with the context, many people find reasoning like this *very* challenging to do. Try the next exercise using the same technique as the previous example.   Each of the following cards have a letter on one side and a number on the other. Here is a rule: “if a card has a D on one side, then it has a 3 on the other”. Your task is to select all those cards, but only those cards, which you would have to turn over in order to find out whether the rule is true or false. Which cards would you select? Try your best to explain your reasoning.  Wason Selection Task Cards     Just like the previous example, we need to check situations when either:   The \"if-part\" is true: if the then-part is false we have a counterexample, and    The \"then-part\" is false: if the if-part is true we have a counterexample.     The cards that satisfy this are the D (the-if part is true) to see if there is a 3 on the other side, and the 9 (the then-part is false) to see if there is not a D on the other side.  Note the A and the 3 can not be counterexamples. There is no way for the if-part to be true and the then-part to be false.         The Relationship Between Conditional and Existential Statements  If you think about it, conditional statements with a variable are actually universally quantified statements! There is an implied quantifier hidden in the conditional statement itself. For example, the conditional statement (with the domain of all animals )\"if is a cat then is a mammal\" is interpreted to mean \"for all animals, if is a cat then is a mammal\".  We can view this as logically equivalent to the statement \"all cats are mammals\" (again with the domain of all animals), and we can see the link from the Venn diagram of the statement to all true possibilities for the conditional statement:    All Cats are Mammals    Note that the three distinct areas in that diagram represent one of the true possibilities of the conditional statement. The area that does *not* appear is the \"dreaded row;\" when the if-part is true and the then-part is false. This illustrates that there are no counterexamples for conditional statements that are always true.   Reword each conditional statement as a universally quantified statement. Then draw a Venn diagram representing each conditional statement as a universally quantified statement, indentify each of the regions, and give an example of an element in each region:    If is a whole number with a ones-digit of 0 then is divisible by 5. (domain: all whole numbers)    If is a fraction with the numerator then cannot be reduced (i.e. is already in least terms as there is no common factor of and ) (domiain: all fractions with counting number numerators and denominators)    If is a number whose English name has four letters, then is odd or less than eight. (domain: all counting numbers). Make this diagram with three circles: all numbers with four letter in their name, all numbers less than eight, and all odd numbers.     Reworded: \"All whole numbers with a ones-digit of 0 are divisible by 5\"    All whole numbers with a ones-digit of 0 are divisible by 5    Regions:   Numbers with 0 as the ones digit and divisible by 5: if-part true and then-part true (ex 10)    Numbers with a digit other than 0 as the ones digit and divisible by 5: if-part false and then-part true (ex 35)    Numbers with a digit other than 0 as the ones digit and not divisible by 5: if-part false and then-part false (ex 27)       Reworded: All fractions with the numerator cannot be reduced.  Diagram:  Regions:   Fractions of the form in lowest terms: if-part true and then-part true (ex )    Fractions not of the form in lowest terms: if-part false and then-part true (ex )    Fractions not of the form and not in lowest terms: if-part false and then-part false (ex )       Reworded: All numbers with English names consisting of four letters is odd or less than eight.  Diagram (this one is a little more complicated!):  Note that the three main regions can be broken down into subregions:   Numbers with English names consisting of four letters that are odd or less than eight: if-part true and then-part true   odd and not less than eight (ex 9)    not odd and less than eight (ex 4)    both odd and less than eight (ex 5)       Numbers with English names not consisting of four letters that are odd or less than eight: if-part false and then-part true   odd and not less than eight (ex 11)    not odd and less than eight (ex 6)    both odd and less than eight (ex 3)       Numbers with English names not consisting of four letters that are not odd and not less than eight: if-part false and then-part false (ex: 12)         Other Forms of Conditional Statements  There are some important related statements to a conditional statement \"if P then Q\" (for example, if I walk to work then I wear a jacket ). These are the converse where we flip the order of P and Q: if Q then P (if I wear a jacket then I walk to work). The inverse is when we negate both P and Q: if (not P) then (not Q) (if I do not walk to work then I do not wear a jacket). The contrapositive is where we both reverse the order and negate both parts: if (not Q) then (not P): (if I do not wear a jacket then I do not walk to work).  Let's formalize these as a definition:   Let S=\"if P then Q\" be a conditional statement for some P and Q. Then the conditional statement \"if Q then P is the converse \" of S, the conditional statement \"if (not P) then (not Q)\" is the inverse of S, and the conditional statement \"if (not Q) then (not P)\" is the contrapositive of S.     We can show that the contrapositive is logically equivalent to the original statement. Let's do it using a truth table:    Truth Table for \"If P then Q\"    You can see that no matter what the truth values for P and Q, the truth value of the original statement \"if P then Q\" and the contrapositive statement \"If (not Q) then (not P)\" agree. So, if we want, we can reword a conditional statement to its contrapositive.  Also, note that the contrapositive of the contrapositive is the original statement; the statements get negated again to bring them back to their original truth values, and the if-part and then-part get swapped back as well.   Show that the converse and inverse of a conditional statement are logically equivalent.     Truth table for converse and inverse of \"If P then Q\"    You can see that no matter what the truth values for P and Q, the truth value of the converse statement \"if Q then P\" and the inverse statement \"If (not P) then (not Q)\" agree.     Write the converse, inverse, and contrapositive of the following statements. Determine the truth value of each conditional statement:    If T is a polygon with three sides, then T is a triangle.    If L a whole number with a ones-digit of 2 or 4, then L is even.     Original: If T is a polygon with three sides, then T is a triangle. (T)  Converse: If T is a triangle then it is a polygon with three sides (T)  Inverse: If T is a polygon with more than three sides then T is not a triangle (T)  Contrapositive: If T is not a triangle then T is a polygon with more than three sides (T)    Note that the if-part of this statement is a compound, so we have to be careful negating it. If we let A = \"have a ones digit of 2\" and B = \"have a ones digit of 4\", we can either say \"has a ones digit other than 2 or 4\" [not (A or B)] or we can say \"does not have a ones digit of 2 and does not have a ones digit of 4\" [(not A) and (not B)]. We will use the first, but the second is equally correct.    Original: If L a whole number with a ones-digit of 2 or 4, then L is even. (T)    Converse: If L is an even whole number then its ones-digit is 2 or 4 (F; counterexample 12)    Inverse: If L is an whole number with a ones-digit other than 2 or 4 then it is odd. (F; counterexample 12)    Contrapositive: If L is an odd whole number, then its ones digit is something other than 2 or 4. (T)        Biconditional Sentences  Look at the previous examples in . Notice in the first example, the original statement and its converse were true (and, it follows that the inverse and contrapositive are true too!). However, in the second, only the original statement was true. Let's view these as Venn diagrams:    If a triangle then a three sided polygon Venn Diagram    If a three sided polygon then a triangle Venn Diagram    If a number ending in 2 or 4 then even Venn Diagram    In the second example, we know there are numbers with ones-digit that aren't 2 or 4 that are still even, so we can think of numbers that do have a ones-digit of 2 or 4 as only a part (later we'll call it a subest ) of the even numbers. For example, 10 is a counterexample to \"If Q then P\" for this example.  Looking at the first example, we want both Venn diagrams to be true. The only way for this to be possible is if both circles are actually the same circle! That's because the two ideas of polygons with three sides and triangles are really the same thing.  Biconditional Venn Diagram for Triangles and Three Sided Polygons  These situations are very special, and we can think of one part as just a \"rewording\" of the idea of the other part. Formally, we call statements where both the original statement and its converse are true biconditional statements and we write it as \"P if and only if Q\", which means \"(if P then Q) *and* (if Q then P)\".  Let's look a a truth table of the biconditional statement:    Truth Table for Biconditional    Here you can see that the biconditional statement is true exactly when its truth values match. So it can never be the case that one of P or Q is true and the other false. This idea will inform how we go about proving biconditional statements.   Which of the following statements can be expressed as true biconditional statements? If so, reword the conditional as a biconditional, and if not, give a counterexample to show why not.    If is an even whole number then is also an even whole number.    (Let be integers). If both and are positive, then is positive.     This can be a true biconditional statement. We can say: a whole number is even if and only if is even.    This can not be a true biconditional statement. The converse \"if is positive then and are positive\" has counterexamples. One is when and .    When we want to prove the biconditional statement \"P if and only if Q\", we do it in two proofs: first, we prove \"if P then Q\"; second, we prove \"if Q then P\". Note that sometimes it's easier to use a logically equivalent form to prove a results (e.g. you can prove the inverse instead of the converse since they are logically equivalent).  Prove \" a whole number is even if and only if is even.\"  Let's do \"if is even then is even\" first. Then we'll find that it's easier to prove the inverse statement \"if is odd then is odd\" than the converse.    Let be even. Then for some whole number . We want to show that which would show that it is always even when is even. Consider Since is a whole number, we have written as an even whole number.    Let be odd. Then for some whole number . We want to show that which would show that it is always odd when is odd. Consider Since is a whole number, we have written as an odd whole number.    Since we showed that both the original statement and its inverse are true, we have showed the biconditional statement is true.        "
},
{
  "id": "sec-ConditionalStatements-2-2-1",
  "level": "2",
  "url": "sec-ConditionalStatements.html#sec-ConditionalStatements-2-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "conditional statements if-then statement condition conclusion "
},
{
  "id": "sec-ConditionalStatements-2-3",
  "level": "2",
  "url": "sec-ConditionalStatements.html#sec-ConditionalStatements-2-3",
  "type": "Checkpoint",
  "number": "1.2.1",
  "title": "",
  "body": " Your professor tells you \"if you get 100 percent on the next midterm then I will give you a dollar\". In which of the following four situations is the professor lying to you (remember, we say a statement is false if it is indeed a lie):     You get 100 percent, and your professor does give you a dollar    You get 100 percent, and your professor does not give you a dollar    You do not get 100 percent, and your professor does give you a dollar    You do not get 100 percent, and your professor does not give you a dollar      The only situation where your professor is lying to you is in situaion 2. Situaion 1 is obviously true, and the statement does not really apply to situations 3 and 4 as the if-part isn't satisfied. We call the statement vacuously true in these two situations.   "
},
{
  "id": "IfThenTruthTable",
  "level": "2",
  "url": "sec-ConditionalStatements.html#IfThenTruthTable",
  "type": "Figure",
  "number": "1.2.2",
  "title": "",
  "body": " Truth Table for \"if P then Q\"   Truth Table for \"if P then Q\"   "
},
{
  "id": "subsec-JustifyingConditionalStatements-4",
  "level": "2",
  "url": "sec-ConditionalStatements.html#subsec-JustifyingConditionalStatements-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "direct proof "
},
{
  "id": "vid-ConditionalStatements",
  "level": "2",
  "url": "sec-ConditionalStatements.html#vid-ConditionalStatements",
  "type": "Figure",
  "number": "1.2.3",
  "title": "",
  "body": " Supplementary video: conditional statements   "
},
{
  "id": "subsec-JustifyingConditionalStatements-8",
  "level": "2",
  "url": "sec-ConditionalStatements.html#subsec-JustifyingConditionalStatements-8",
  "type": "Checkpoint",
  "number": "1.2.4",
  "title": "",
  "body": " Show that the following statements are true using direct proofs:   if is an even integer then is even    if and are odd integers then is even    The sum of any six consecutive integers is always odd. (hint: can you reword this as an if-then statement?)      We need to:   assume that is even and    show that must be even.   So let's assume that is even. This means that for some integer . We need to show that is even, thus where the expression in the brackets must be an integer. Now that we have our set-up, we can prove this result. Consider . By our assumption: We know how we need the expression to look algebraically ( as ), so we use our creativity to get there:   Since is an integer, we are done. We have shown that we can always express in the form of an even integer, and this is what we wanted to prove.    We need to:   Assume that and are odd and    Show that must be even.   So let's write our assumption in terms of the algebraic definition of what it means for a number to be odd. So let and for some integers .     Caution!!  CAUTION!! A very common mistake that students make is to use the same variable for the integers in the two above expressions (e.g. and for some integer ). Note that this would mean that and would be the same number (depending on the choice of ). We want and to be possibly different numbers, so we need two different variables to be able to express this.  We need to show that where the bracket is some integer. Now that we have our set-up we can prove the result.  Consider . By our assumption, . We know how we need the expression to look, so we can use our creativity to get there: Since the expression in the brackets is the sum of integers, the bracket simplifies to an integer. So we've written in the form we like and we are done.    As the hint says, it might be easiest to reword this as an if-then statement first. One way to do this is If are consecutive integers, then is odd.   Now that we have a conditional statement we need to:   Assume our integers are consecutive and    Show their sum is odd    So let's write our assumption algebraically: Since the variables are just names for our numbers, let's let be the smallest integer, be the next smallest, and so on. Since they're all consecutive:   and similarly  and  Now we need to show that we can always write where the bracket is some integer. Let's try to use our creativity to get there:  Consider . Using our assumption and noting the form we want to get, we can do the following: We know we want the expression to be of the form so we can \"pull out\" a 1, and hopefully what is left will have a common factor of 2 so we can factor it out:   Since the expression in brackets is integers multiplied and added together, it is an integer, and thus the sum is odd. We have finished our proof.    "
},
{
  "id": "subsec-WhyProofsAreImportant-3",
  "level": "2",
  "url": "sec-ConditionalStatements.html#subsec-WhyProofsAreImportant-3",
  "type": "Example",
  "number": "1.2.5",
  "title": "",
  "body": " Is the conditional statement \"if is a whole number then is a prime number\" always true? Remember, a prime number is a number divisibile by exactly two numbers, 1 and itself.   It is not! However, it may take a while to find a counterexample. If we let we find that is indeed prime. For example, if then and you can check that 53 is a prime number. However, when , we have that and so is not a prime number.   "
},
{
  "id": "subsec-Counterexamples-2",
  "level": "2",
  "url": "sec-ConditionalStatements.html#subsec-Counterexamples-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "counterexample "
},
{
  "id": "subsec-Counterexamples-3",
  "level": "2",
  "url": "sec-ConditionalStatements.html#subsec-Counterexamples-3",
  "type": "Example",
  "number": "1.2.7",
  "title": "",
  "body": " The statement \"if and are odd counting numbers then is even\" is a false conditional statement since it has the counterexample and . Here, the if-part is true (both 3 and 5 are odd numbers) but the then-part is false ( is not an even number). Note that this is only one of many (in fact infinitely many counterexamples).  The statement \"if is an integer (positive or negative counting number, or zero)\" then is non-negative\" is a false conditional statement. Here, is a counterexample since is an integer (if-part true) but (then-part false). Note that this is the only counterexample for this conditional statement.  "
},
{
  "id": "subsec-Counterexamples-6",
  "level": "2",
  "url": "sec-ConditionalStatements.html#subsec-Counterexamples-6",
  "type": "Checkpoint",
  "number": "1.2.8",
  "title": "",
  "body": " Find a counterexample for each of the following false conditional statements:   If is a Canadian provincial capital then it is the city that has the largest population in the province.    If are consecutive counting numbers, then their sum is odd.    If is a polygon with four sides then all angles inside are less than 180 degrees.      As of 2022, the counterexamples are Fredericton (Moncton and Saint John are larger), Quebec City (Montreal [among others] is larger), Regina (Saskatoon is larger), Edmonton (Calgary is larger), and British Columbia (Vancouver [among others] is larger).    There are infinitely many sets of 5 consecutive numbers where the sum is even. In fact, any whose smallest number is even will have an even sum (can you prove this?).    One such counterexample is a chevron, where there is one internal angle greater than 180 degrees.   "
},
{
  "id": "subsec-Counterexamples-7",
  "level": "2",
  "url": "sec-ConditionalStatements.html#subsec-Counterexamples-7",
  "type": "Example",
  "number": "1.2.9",
  "title": "",
  "body": " A usual rule in most Canadian provinces is \"If you are drinking alcohol then you must be at least 19 years old\". Which of the following people may be violating this rule?    A 20 year old    A person drinking a beer    A person drinking water    A 16 year old    Intuitively, most people know that you would need to check the person drinking beer, and the 16 year old. The person drinking a beer may be under 19, and the 16 year old may be drinking alcohol. Let's analyse this using the idea of a counterexample:    The 20 year old satisfies the condition \"then-part true\". Since the only time a conditional statement is false is when the \"if-part\" is true and the \"then-part\" false, this can never be a counterexample.    The person drinking a beer satisfies the condition \"if-part true\". If they also satisfy \"then-part false\" (so they are under 19 years old) then they would be a counterexample to the rule. You would check this person.    The person drinking water satisfies \"if-part false\". Just like with 1, there is no possibility thay they can be a counterexample.    The 16 year old satisfies \"then part false\". If they are also drinking (the \"if-part\" true) then they are a counterexample. You would check this person.    "
},
{
  "id": "subsec-Counterexamples-9",
  "level": "2",
  "url": "sec-ConditionalStatements.html#subsec-Counterexamples-9",
  "type": "Checkpoint",
  "number": "1.2.10",
  "title": "",
  "body": " Each of the following cards have a letter on one side and a number on the other. Here is a rule: “if a card has a D on one side, then it has a 3 on the other”. Your task is to select all those cards, but only those cards, which you would have to turn over in order to find out whether the rule is true or false. Which cards would you select? Try your best to explain your reasoning.  Wason Selection Task Cards     Just like the previous example, we need to check situations when either:   The \"if-part\" is true: if the then-part is false we have a counterexample, and    The \"then-part\" is false: if the if-part is true we have a counterexample.     The cards that satisfy this are the D (the-if part is true) to see if there is a 3 on the other side, and the 9 (the then-part is false) to see if there is not a D on the other side.  Note the A and the 3 can not be counterexamples. There is no way for the if-part to be true and the then-part to be false.   "
},
{
  "id": "subsec-CondExist-6",
  "level": "2",
  "url": "sec-ConditionalStatements.html#subsec-CondExist-6",
  "type": "Checkpoint",
  "number": "1.2.11",
  "title": "",
  "body": " Reword each conditional statement as a universally quantified statement. Then draw a Venn diagram representing each conditional statement as a universally quantified statement, indentify each of the regions, and give an example of an element in each region:    If is a whole number with a ones-digit of 0 then is divisible by 5. (domain: all whole numbers)    If is a fraction with the numerator then cannot be reduced (i.e. is already in least terms as there is no common factor of and ) (domiain: all fractions with counting number numerators and denominators)    If is a number whose English name has four letters, then is odd or less than eight. (domain: all counting numbers). Make this diagram with three circles: all numbers with four letter in their name, all numbers less than eight, and all odd numbers.     Reworded: \"All whole numbers with a ones-digit of 0 are divisible by 5\"    All whole numbers with a ones-digit of 0 are divisible by 5    Regions:   Numbers with 0 as the ones digit and divisible by 5: if-part true and then-part true (ex 10)    Numbers with a digit other than 0 as the ones digit and divisible by 5: if-part false and then-part true (ex 35)    Numbers with a digit other than 0 as the ones digit and not divisible by 5: if-part false and then-part false (ex 27)       Reworded: All fractions with the numerator cannot be reduced.  Diagram:  Regions:   Fractions of the form in lowest terms: if-part true and then-part true (ex )    Fractions not of the form in lowest terms: if-part false and then-part true (ex )    Fractions not of the form and not in lowest terms: if-part false and then-part false (ex )       Reworded: All numbers with English names consisting of four letters is odd or less than eight.  Diagram (this one is a little more complicated!):  Note that the three main regions can be broken down into subregions:   Numbers with English names consisting of four letters that are odd or less than eight: if-part true and then-part true   odd and not less than eight (ex 9)    not odd and less than eight (ex 4)    both odd and less than eight (ex 5)       Numbers with English names not consisting of four letters that are odd or less than eight: if-part false and then-part true   odd and not less than eight (ex 11)    not odd and less than eight (ex 6)    both odd and less than eight (ex 3)       Numbers with English names not consisting of four letters that are not odd and not less than eight: if-part false and then-part false (ex: 12)      "
},
{
  "id": "subsec-OtherFormsCondSt-2",
  "level": "2",
  "url": "sec-ConditionalStatements.html#subsec-OtherFormsCondSt-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "converse inverse contrapositive "
},
{
  "id": "subsec-OtherFormsCondSt-3",
  "level": "2",
  "url": "sec-ConditionalStatements.html#subsec-OtherFormsCondSt-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "converse inverse contrapositive "
},
{
  "id": "subsec-OtherFormsCondSt-8",
  "level": "2",
  "url": "sec-ConditionalStatements.html#subsec-OtherFormsCondSt-8",
  "type": "Checkpoint",
  "number": "1.2.13",
  "title": "",
  "body": " Show that the converse and inverse of a conditional statement are logically equivalent.     Truth table for converse and inverse of \"If P then Q\"    You can see that no matter what the truth values for P and Q, the truth value of the converse statement \"if Q then P\" and the inverse statement \"If (not P) then (not Q)\" agree.   "
},
{
  "id": "Bicond1",
  "level": "2",
  "url": "sec-ConditionalStatements.html#Bicond1",
  "type": "Example",
  "number": "1.2.14",
  "title": "",
  "body": " Write the converse, inverse, and contrapositive of the following statements. Determine the truth value of each conditional statement:    If T is a polygon with three sides, then T is a triangle.    If L a whole number with a ones-digit of 2 or 4, then L is even.     Original: If T is a polygon with three sides, then T is a triangle. (T)  Converse: If T is a triangle then it is a polygon with three sides (T)  Inverse: If T is a polygon with more than three sides then T is not a triangle (T)  Contrapositive: If T is not a triangle then T is a polygon with more than three sides (T)    Note that the if-part of this statement is a compound, so we have to be careful negating it. If we let A = \"have a ones digit of 2\" and B = \"have a ones digit of 4\", we can either say \"has a ones digit other than 2 or 4\" [not (A or B)] or we can say \"does not have a ones digit of 2 and does not have a ones digit of 4\" [(not A) and (not B)]. We will use the first, but the second is equally correct.    Original: If L a whole number with a ones-digit of 2 or 4, then L is even. (T)    Converse: If L is an even whole number then its ones-digit is 2 or 4 (F; counterexample 12)    Inverse: If L is an whole number with a ones-digit other than 2 or 4 then it is odd. (F; counterexample 12)    Contrapositive: If L is an odd whole number, then its ones digit is something other than 2 or 4. (T)     "
},
{
  "id": "subsec-BiconditionalSentences-4",
  "level": "2",
  "url": "sec-ConditionalStatements.html#subsec-BiconditionalSentences-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "subest "
},
{
  "id": "subsec-BiconditionalSentences-5",
  "level": "2",
  "url": "sec-ConditionalStatements.html#subsec-BiconditionalSentences-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "biconditional statements "
},
{
  "id": "subsec-BiconditionalSentences-9",
  "level": "2",
  "url": "sec-ConditionalStatements.html#subsec-BiconditionalSentences-9",
  "type": "Checkpoint",
  "number": "1.2.15",
  "title": "",
  "body": " Which of the following statements can be expressed as true biconditional statements? If so, reword the conditional as a biconditional, and if not, give a counterexample to show why not.    If is an even whole number then is also an even whole number.    (Let be integers). If both and are positive, then is positive.     This can be a true biconditional statement. We can say: a whole number is even if and only if is even.    This can not be a true biconditional statement. The converse \"if is positive then and are positive\" has counterexamples. One is when and .   "
},
{
  "id": "subsec-BiconditionalSentences-11",
  "level": "2",
  "url": "sec-ConditionalStatements.html#subsec-BiconditionalSentences-11",
  "type": "Example",
  "number": "1.2.16",
  "title": "",
  "body": "Prove \" a whole number is even if and only if is even.\"  Let's do \"if is even then is even\" first. Then we'll find that it's easier to prove the inverse statement \"if is odd then is odd\" than the converse.    Let be even. Then for some whole number . We want to show that which would show that it is always even when is even. Consider Since is a whole number, we have written as an even whole number.    Let be odd. Then for some whole number . We want to show that which would show that it is always odd when is odd. Consider Since is a whole number, we have written as an odd whole number.    Since we showed that both the original statement and its inverse are true, we have showed the biconditional statement is true.   "
},
{
  "id": "sec-Sets",
  "level": "1",
  "url": "sec-Sets.html",
  "type": "Section",
  "number": "1.3",
  "title": "Sets",
  "body": " Sets   Intro To Sets  We often talk about collections of objects, like whole numbers, or integers, or polygons, or triangles. So far, we've dealt with these just with words but it was pretty repetitive and clumsy. It would be nice (and it is important!) if we had some rules for talking about collections of objects.  In this section, we do introduce our language for collections of objects and their members. We also look at how to combine collections and the relationship between our language for collections and logic.     A set is a collection of objects, called elements , with some rules attached:   Elements do not occur more than once in a set.    The order in which the elements are listed does not matter.        Often, sets are written with capital letters, like , and so on, and elements of these sets are written with lower case letters, like , and so on. If an object is an element of a set we write . If is not an element of , we write .  There are a few different ways of telling people what elements are in a set. We can:   List the elements; e.g.     Describe the elements in words; e.g.     Decribe the elements using mathematical notation; e.g.    We call the final method set builder notation and read the \" \" symbol as the phrase \"such that\". So, in words, we would read this set builder notation as \"whole numbers such that is between 1 and 5, inclusive\", or some other phrase with an equivalent meaning (for example, greater than or equal to 1 and less than or equal to 5).  List all of the elements of these sets, which are initially given in a text description or in set builder notation: \\                         . Note that 11 is not included as 11 is not less than 11.    It's probably easiest to check this by trial and error. The smallest value of that satisfies this condition is (as but ). And the largest value that satisfies this condition is as but . So .    You might have to know a bit of hockey to know this, but you can look this up in a table on, say, Wikipedia. Thus     There are *no* prime numbers besides 2 that have an even square, as for any odd number is also odd. So     Remember that sets do not have an order to their elements. It's simply a list of what the set contains. A good analogy for a set is a bag containing the elements in your set:    Bag analogy of a set    Note that in the previous exercise, we came across the set with no elements. We call this the empty set and write it as or with   It's very useful to be able to talk about sets contained in other sets. We call these subsets. More generally, let A and B be two sets. If all elements of B are also elements of A, then we say B is a subset of A, and we write    Notice that the definition of a subset contains a quantifier. Use the idea of negation of quantifiers to determine when B is not a subset of A, written .   Remember, to negate a quantifier, we change the quantifier type, and negate the open sentence. So means \"There is an element in B that is not in A.\" In the language of counterexamples, this says that there is a counterexample to the definition of subsets.    You can view the idea of a subset using Venn diagrams. In the diagram below, B is a subset of A:    Subset Venn diagram    Let's look at a few examples of subsets to help us understand how the concept works:   Let's define the following sets:                        Let's check if . If we find one element that is in B but not in A, then . Note that but . We've found a counterexample to the definition of a subset, thus   Is ? We can see that all of the element of C, that is 1,2,4, and 6, are also elements of A. Thus   Is ? Yes! This is \"vacuously true\" as there is no counterexample to the definition of subset. Alternatively you can view it the following way: The statement is not true, as there is no element of D that is not an element of A. So if is false, it must be that its negation is true.  Is ? Of course! Every element of A is also an element of A (obviously!).   Another concept that is important to us is the number of elements in a set A, which we call the cardinality of A. We write this .  Let's let A,B,C, and D be the sets above. Also let . Then .   Notes for Additional Understanding  There's no limit to the types of objects sets can contain, and can even contain other sets. There is a lot more to be said about sets (there is an entire branch of mathematics dedicated to studying them), but it's beyond the scope of this book.    Another important concept is when two sets have the same elements. We say that sets A and B are equal , and write if A and B have exactly the same elements. Alternatively, we can say that when and .   Let and . Since all prime numbers less than 10 are 2,3,5 and 7, we have that .   There are a few sets of numbers that we talk about quite a lot (you've probably noticed that so far). Since they are so commonly used, mathematicians have some notation for these, and we'll use this throughout the rest of the textbook to save time and space.    We let and call it the set of natural numbers , or counting numbers .    We let and call it the set of natural numbers with zero , or whole numbers .    We let and call it the set of integers . Note that some other textbooks might use the symbol instead, but is most common.    We let and call it the set of rational numbers . Note that this is saying that the set contains all fractions with integer numerators and denominators, but we cannot have a denominator of 0.    We let be the set of real numbers . This set includes numbers like and all others.    From the following diagram you can see that these sets are listed in a \"subset ordering\", that is .    Inclusion Diagram of Number Sets     Let A,B,C be sets that aren't the empty set (so ). Show that if and then .   Note the this is an if-then statement. So we need to show that it's never the case that the if-part is true and the then-part is false. But, in the definition of subsets we have additional if-then statements as well, so we have to be careful with these \"nested\" conditional statements.  Let's assume the if-part is true: that and . So this means that if then (since A is a subset of B) and if then (since B is a subset of C).  We need to show that the then-part is true; that A is a subset of C, so if then .  So now, using the if-part assumption, let's show that the then-part is true. Let . By our assumption that we know . Now, by the second part of our assumption, that we know that .  Since we started with an element of A and showed that it must be an element of C, we have shown the then-part; that , and this means we've proved that the if-then statement is always true.  Note that you can see this visually using the following Venn diagram:    Inclusiong diagram for A, B, and C above      Looking at the Venn diagram for subsets, you may have realized that it's the same as the diagram for conditional statements, which is very related to the universal quantifiers. In fact, they are very related concepts, and we can view the same Venn diagram with these three lenses.  For example, we can phrase the same idea in three ways:   All cats are mammals  If something is a cat, then it is a mammal.  Cats are a subset of mammals.     Let's label the same Venn diagram using the three viewpoints:  INSERT VENN DIAGRAM    Combining Sets  An important thing we wish to do is to be able to talk about set operations. These are very related to logical operations from the previous section.  Sometimes we like to keep track of when objects (like numbers) satisfy all conditions, and other times we like when they satisfy at least one. And another thing we like to talk about is when objects satisfy one condition, but not another. Let's introduce some notation for this:   PUT EXAMPLE HERE THAT SHOWS WHY THESE ARE IMPORTANT     Let A and B be two sets. Then the union of A and B, written is the set of all elements that are either in A or B (or both). In set notation we write       Let A and B be two sets. Then the intersection of A and B, written is the set of all elements that are in both A and B. In set notation we write and       Let A and B be two sets. Then the difference of A and B, written is the set of all elements that are in A but not in B. In set notation we write > and     Finally, we like to talk about *all* objects that do not satisfy a rule. However, we have to be careful that we limit the objects just to those that we're interested in talking about.    We call the set of all possible objects we wish to consider the universe , and usually denote this set by the letter .      Let A be a set. We say the set compliment , written , is the set of all elements in the universe not in A. In set notation,      Suppose we were only interested in the counting numbers up to 10. Let's define the universe and the following sets:              Then   Here are some Venn diagram showing the sets above:    Venn Diagram for sets above      Let the universe and define the following sets:     For each set:   Describe the set in words    Give an example of an element contained in the set    Give an example of an element not contained in the set (but still in the universe!)                                  Since elements in an intersection need to satisfy *both* being a member of A and B, we have that .  A possible example of an element in this set is a triangle with one angle of 100 degrees:  An obtuse traingle  An possible example of an element not in this set is a square:  A square      Since elements in an intersection need to satisfy *either* being a member of A or B, we have that . However, triangles are polygons of at most 5 sides (they have three), we have that and thus we can express and note .    Venn diagram of polygons of at most 5 sides and triangles    An example of an element of the set is the square:  Picture of a square  and a non-example would be a hexagon since it has more than 5 sides:  Picture of a hexagon      Since elements in complement are all elements not in the original set, we have that . In a future Geometry chapter we will show that this set will only contain certain triangles and quadrilaterals (polygons with 4 sides).  An example of an element in the set is a square, since it has all angles of measure exactly 90 degrees (and not larger):  Picture of a square  A non-example is a triangle with one angle with measure 100 degrees:  Picture of an obtuse triangle      Since elements in the set difference need to satisfy being a member of C but not B, we have that . Again, in a future chapter we will show that   Note that the examples and non-examples from the previous part work for this set as well.    Elements in the set difference need to satisfy being a member of A but not A. However there are, of course, *no* elements that are both a member and not a member of a set. Thus, we have that .  Note that since the set is empty, no polygon is an example of an element in the set, and every polygon is a non-example.       "
},
{
  "id": "subsec-IntroToSets-4",
  "level": "2",
  "url": "sec-Sets.html#subsec-IntroToSets-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "set elements "
},
{
  "id": "subsec-IntroToSets-6",
  "level": "2",
  "url": "sec-Sets.html#subsec-IntroToSets-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "set builder notation "
},
{
  "id": "subsec-IntroToSets-7",
  "level": "2",
  "url": "sec-Sets.html#subsec-IntroToSets-7",
  "type": "Checkpoint",
  "number": "1.3.2",
  "title": "",
  "body": "List all of the elements of these sets, which are initially given in a text description or in set builder notation: \\                         . Note that 11 is not included as 11 is not less than 11.    It's probably easiest to check this by trial and error. The smallest value of that satisfies this condition is (as but ). And the largest value that satisfies this condition is as but . So .    You might have to know a bit of hockey to know this, but you can look this up in a table on, say, Wikipedia. Thus     There are *no* prime numbers besides 2 that have an even square, as for any odd number is also odd. So    "
},
{
  "id": "subsec-IntroToSets-10",
  "level": "2",
  "url": "sec-Sets.html#subsec-IntroToSets-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "empty set "
},
{
  "id": "subsec-IntroToSets-12",
  "level": "2",
  "url": "sec-Sets.html#subsec-IntroToSets-12",
  "type": "Example",
  "number": "1.3.3",
  "title": "",
  "body": " Notice that the definition of a subset contains a quantifier. Use the idea of negation of quantifiers to determine when B is not a subset of A, written .   Remember, to negate a quantifier, we change the quantifier type, and negate the open sentence. So means \"There is an element in B that is not in A.\" In the language of counterexamples, this says that there is a counterexample to the definition of subsets.   "
},
{
  "id": "subsec-IntroToSets-16",
  "level": "2",
  "url": "sec-Sets.html#subsec-IntroToSets-16",
  "type": "Example",
  "number": "1.3.4",
  "title": "",
  "body": " Let's define the following sets:                        Let's check if . If we find one element that is in B but not in A, then . Note that but . We've found a counterexample to the definition of a subset, thus   Is ? We can see that all of the element of C, that is 1,2,4, and 6, are also elements of A. Thus   Is ? Yes! This is \"vacuously true\" as there is no counterexample to the definition of subset. Alternatively you can view it the following way: The statement is not true, as there is no element of D that is not an element of A. So if is false, it must be that its negation is true.  Is ? Of course! Every element of A is also an element of A (obviously!).  "
},
{
  "id": "subsec-IntroToSets-17",
  "level": "2",
  "url": "sec-Sets.html#subsec-IntroToSets-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cardinality "
},
{
  "id": "subsec-IntroToSets-18",
  "level": "2",
  "url": "sec-Sets.html#subsec-IntroToSets-18",
  "type": "Example",
  "number": "1.3.5",
  "title": "",
  "body": "Let's let A,B,C, and D be the sets above. Also let . Then . "
},
{
  "id": "subsec-IntroToSets-20",
  "level": "2",
  "url": "sec-Sets.html#subsec-IntroToSets-20",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equal "
},
{
  "id": "subsec-IntroToSets-21",
  "level": "2",
  "url": "sec-Sets.html#subsec-IntroToSets-21",
  "type": "Example",
  "number": "1.3.6",
  "title": "",
  "body": " Let and . Since all prime numbers less than 10 are 2,3,5 and 7, we have that .  "
},
{
  "id": "subsec-IntroToSets-23-1-1",
  "level": "2",
  "url": "sec-Sets.html#subsec-IntroToSets-23-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "natural numbers counting numbers "
},
{
  "id": "subsec-IntroToSets-23-2-1",
  "level": "2",
  "url": "sec-Sets.html#subsec-IntroToSets-23-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "natural numbers with zero whole numbers "
},
{
  "id": "subsec-IntroToSets-23-3-1",
  "level": "2",
  "url": "sec-Sets.html#subsec-IntroToSets-23-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integers "
},
{
  "id": "subsec-IntroToSets-23-4-1",
  "level": "2",
  "url": "sec-Sets.html#subsec-IntroToSets-23-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rational numbers "
},
{
  "id": "subsec-IntroToSets-23-5-1",
  "level": "2",
  "url": "sec-Sets.html#subsec-IntroToSets-23-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "real numbers "
},
{
  "id": "subsec-IntroToSets-26",
  "level": "2",
  "url": "sec-Sets.html#subsec-IntroToSets-26",
  "type": "Checkpoint",
  "number": "1.3.7",
  "title": "",
  "body": " Let A,B,C be sets that aren't the empty set (so ). Show that if and then .   Note the this is an if-then statement. So we need to show that it's never the case that the if-part is true and the then-part is false. But, in the definition of subsets we have additional if-then statements as well, so we have to be careful with these \"nested\" conditional statements.  Let's assume the if-part is true: that and . So this means that if then (since A is a subset of B) and if then (since B is a subset of C).  We need to show that the then-part is true; that A is a subset of C, so if then .  So now, using the if-part assumption, let's show that the then-part is true. Let . By our assumption that we know . Now, by the second part of our assumption, that we know that .  Since we started with an element of A and showed that it must be an element of C, we have shown the then-part; that , and this means we've proved that the if-then statement is always true.  Note that you can see this visually using the following Venn diagram:    Inclusiong diagram for A, B, and C above     "
},
{
  "id": "subsec-CombiningSets-4",
  "level": "2",
  "url": "sec-Sets.html#subsec-CombiningSets-4",
  "type": "Example",
  "number": "1.3.8",
  "title": "",
  "body": " PUT EXAMPLE HERE THAT SHOWS WHY THESE ARE IMPORTANT  "
},
{
  "id": "def-Union",
  "level": "2",
  "url": "sec-Sets.html#def-Union",
  "type": "Definition",
  "number": "1.3.9",
  "title": "",
  "body": "  Let A and B be two sets. Then the union of A and B, written is the set of all elements that are either in A or B (or both). In set notation we write    "
},
{
  "id": "def-Intersection",
  "level": "2",
  "url": "sec-Sets.html#def-Intersection",
  "type": "Definition",
  "number": "1.3.10",
  "title": "",
  "body": "  Let A and B be two sets. Then the intersection of A and B, written is the set of all elements that are in both A and B. In set notation we write and    "
},
{
  "id": "def-SetDifference",
  "level": "2",
  "url": "sec-Sets.html#def-SetDifference",
  "type": "Definition",
  "number": "1.3.11",
  "title": "",
  "body": "  Let A and B be two sets. Then the difference of A and B, written is the set of all elements that are in A but not in B. In set notation we write > and    "
},
{
  "id": "def-universe",
  "level": "2",
  "url": "sec-Sets.html#def-universe",
  "type": "Definition",
  "number": "1.3.12",
  "title": "",
  "body": "  We call the set of all possible objects we wish to consider the universe , and usually denote this set by the letter .   "
},
{
  "id": "def-setcompliment",
  "level": "2",
  "url": "sec-Sets.html#def-setcompliment",
  "type": "Definition",
  "number": "1.3.13",
  "title": "",
  "body": "  Let A be a set. We say the set compliment , written , is the set of all elements in the universe not in A. In set notation,    "
},
{
  "id": "subsec-CombiningSets-11",
  "level": "2",
  "url": "sec-Sets.html#subsec-CombiningSets-11",
  "type": "Example",
  "number": "1.3.14",
  "title": "",
  "body": " Suppose we were only interested in the counting numbers up to 10. Let's define the universe and the following sets:              Then   Here are some Venn diagram showing the sets above:    Venn Diagram for sets above    "
},
{
  "id": "subsec-CombiningSets-12",
  "level": "2",
  "url": "sec-Sets.html#subsec-CombiningSets-12",
  "type": "Checkpoint",
  "number": "1.3.15",
  "title": "",
  "body": " Let the universe and define the following sets:     For each set:   Describe the set in words    Give an example of an element contained in the set    Give an example of an element not contained in the set (but still in the universe!)                                  Since elements in an intersection need to satisfy *both* being a member of A and B, we have that .  A possible example of an element in this set is a triangle with one angle of 100 degrees:  An obtuse traingle  An possible example of an element not in this set is a square:  A square      Since elements in an intersection need to satisfy *either* being a member of A or B, we have that . However, triangles are polygons of at most 5 sides (they have three), we have that and thus we can express and note .    Venn diagram of polygons of at most 5 sides and triangles    An example of an element of the set is the square:  Picture of a square  and a non-example would be a hexagon since it has more than 5 sides:  Picture of a hexagon      Since elements in complement are all elements not in the original set, we have that . In a future Geometry chapter we will show that this set will only contain certain triangles and quadrilaterals (polygons with 4 sides).  An example of an element in the set is a square, since it has all angles of measure exactly 90 degrees (and not larger):  Picture of a square  A non-example is a triangle with one angle with measure 100 degrees:  Picture of an obtuse triangle      Since elements in the set difference need to satisfy being a member of C but not B, we have that . Again, in a future chapter we will show that   Note that the examples and non-examples from the previous part work for this set as well.    Elements in the set difference need to satisfy being a member of A but not A. However there are, of course, *no* elements that are both a member and not a member of a set. Thus, we have that .  Note that since the set is empty, no polygon is an example of an element in the set, and every polygon is a non-example.    "
},
{
  "id": "test-5",
  "level": "1",
  "url": "test-5.html",
  "type": "Section",
  "number": "1.4",
  "title": "Supplemental Exercises",
  "body": " Supplemental Exercises   Joe says \"Dolphins are mammals or live primarily underwater.\" Is his statement true?    Which of the following are statements?    It rained yesterday.    All cars have engines.    Did you see the game last night?    All dogs go to Heaven.    This statement is false.    Come visit sometime.      Which of the following are open sentences? For each open sentence, identify its domain.         Dog D is a mastiff.    Vitamin C helps prevent scurvy.    The statement P is both true and false.    Some countries have kings.    No one lives in a house.    For each open sentence above, give a value of the variable that makes the statement true.    Layla says \"Statement P is false.\" How does the truth value of this open sentence depend on the truth value of the variable P?    Draw a truth table for each of the following.    The cow is awake and the pig is asleep.    Stores accept cash or credit as payment.    Education prepares you for a career or is a poor way to spend your time.    Anna and Jordan are not happy.      Write a negation of each of the following.    Gravity is not a force.    City C has a population of at least 10 million.    Harold ate a burger and fries for lunch.    There is at least one penguin that has never seen Antarctica.    Everyone on campus is a student or a staff-member.    No beverage is hot and sweet.     "
},
{
  "id": "test-5-2",
  "level": "2",
  "url": "test-5.html#test-5-2",
  "type": "Checkpoint",
  "number": "1.4.1",
  "title": "",
  "body": " Joe says \"Dolphins are mammals or live primarily underwater.\" Is his statement true?  "
},
{
  "id": "test-5-3",
  "level": "2",
  "url": "test-5.html#test-5-3",
  "type": "Checkpoint",
  "number": "1.4.2",
  "title": "",
  "body": " Which of the following are statements?    It rained yesterday.    All cars have engines.    Did you see the game last night?    All dogs go to Heaven.    This statement is false.    Come visit sometime.    "
},
{
  "id": "test-5-4",
  "level": "2",
  "url": "test-5.html#test-5-4",
  "type": "Checkpoint",
  "number": "1.4.3",
  "title": "",
  "body": " Which of the following are open sentences? For each open sentence, identify its domain.         Dog D is a mastiff.    Vitamin C helps prevent scurvy.    The statement P is both true and false.    Some countries have kings.    No one lives in a house.    For each open sentence above, give a value of the variable that makes the statement true.  "
},
{
  "id": "test-5-5",
  "level": "2",
  "url": "test-5.html#test-5-5",
  "type": "Checkpoint",
  "number": "1.4.4",
  "title": "",
  "body": " Layla says \"Statement P is false.\" How does the truth value of this open sentence depend on the truth value of the variable P?  "
},
{
  "id": "test-5-6",
  "level": "2",
  "url": "test-5.html#test-5-6",
  "type": "Checkpoint",
  "number": "1.4.5",
  "title": "",
  "body": " Draw a truth table for each of the following.    The cow is awake and the pig is asleep.    Stores accept cash or credit as payment.    Education prepares you for a career or is a poor way to spend your time.    Anna and Jordan are not happy.    "
},
{
  "id": "test-5-7",
  "level": "2",
  "url": "test-5.html#test-5-7",
  "type": "Checkpoint",
  "number": "1.4.6",
  "title": "",
  "body": " Write a negation of each of the following.    Gravity is not a force.    City C has a population of at least 10 million.    Harold ate a burger and fries for lunch.    There is at least one penguin that has never seen Antarctica.    Everyone on campus is a student or a staff-member.    No beverage is hot and sweet.    "
},
{
  "id": "sec-Equality",
  "level": "1",
  "url": "sec-Equality.html",
  "type": "Section",
  "number": "2.1",
  "title": "Equality",
  "body": " Equality   Intro To Equality  In our mathematical career we have used the equals symbol \"=\" countless times. In this section, we talk about what it actually means and its implications. We'll focus on equality of numbers, but know that equality is a concept that is used in many different concepts in mathematics;m for example, two sets can be equal, or two polygons can be equal.    We say that two numbers and are equal , and write , if and only if they are the same quantity. Note that they may be expressed in different ways.     Here are a few examples stating what we mean.    . This means that these two expressions are the same number (in this case ) written in different ways.    Another important and common example is equality of fractions. We will explore this more later in the book, but we know that .    If we write , this means that whenever we see the quantity again in our problem, we can say that it is the same as the number . Thus we can \"substitute\" for whenever we like.      A good idea is to think of equality as a balance. If both sides are equal, then the balance will be balanced; neither side will be heavier than the other.    A balance showing equality and both sides of the balance at the same height    If one side of the equation, then we have an inequality since the two sides do not equal each other. If the left hand side (LHS) is the heavier side then we say that the LHS is greater than the right hand side (RHS). If the RHS is larger, than we say that the LHS is less than the RHS. Note that the symbol to denote either greater than and less than has the more open side toward the larger quantity, somewhat matching up with the idea of the balance.  Using the balance analogy greater than looks like:  Greater than balance model  and less than looks like:  Less than balance model     Properties Of Equality  There are a few properties of equality that are important and intuitive, but for completeness we write them down here:   Properties of Equality     Reflexivity: for all numbers ,     Symmetry: if then     Transitivity: if and then        Notes for Additional Understanding  Note that the three properties above are used to define another, more general, concept in mathematics called an equivalence relation . Informally, this is a type of relation, but it calls objects equaivalent if they behave the same way in only ways that you are interested in working with. For more information, see any discrete mathematics textbook.    The most important property of equality when doing mathematics is that you can always substitute one expression for another equal to it. In fact, this is how many algebraic equations are solved, and arithmetic expressions simplified. We regularly do this whenever we simplify an arithmetic expression, but many of us do not realize we are doing a substitution when we do it! For example, if we are calculating the expression , we know that . Since these two quantities equal each other, we can substitute any time we see the expression . Doing this, we get , and we know that So, putting it all together we have that . We can view this idea using the balance model descibed above:    Balance model of 4*7-3=25    We use this idea when solving equations as well. Suppose we know that and we're asked to calculate . Since and are indeed equal we can substitude a where ever we see the variable . Doing so we obtain . Similarly to above we can simplify this to . And thus when . Again, we can use a balance model to show this process:    Balance model of 3x-16=11 when x=9    Another important property to equality is that two expressions remain equal when we do the same arithmetic operations to them. For example, if we know we can subtract 5 from both of these and the resulting expressions equal: .    Balance model of a-5=b-5 when a=b    Or for another example, we could divide both sides by 2, and then .   Balance model of a\/2=b\/2 when a=b   This is an incredibly powerful idea that allows us to solve equations for a unknown quantities.  Let's define these more precisely so we can refer to them later.       If is some mathematical expression involving the symbol , and is the same expression as with all 's' replaced with 's. If then . We call this the principle of substitution.     If is an equation, and is any number (or variable that represents a number) then                   as long as    We call this the property of arithmetic equality.        The next example will talk about how the above properties of equality allow us to solve equations using two methods.   Suppose we know that Angela is thirty years younger than her father. Also, that in ten years, Angela will be half the age of her father at that time. Let's determine Angela's current age, and her father's current age.  First, we ask \"what quantities are we interested in, but are unknown?\". In this example, we are interested in Angela's current age and her father's current age. To help us write these algebraically, let's give these quantities variable names (and we need to be specific about what these variables stand for, so that readers, and ourselves, do not get confused.)  Let Angela's current age (in years), and let Angela's father's current age (in years).  Since Angela is thirty year's younger than her father, we need to think about how to translate this to an algebraic statement. We can think of trying to reword this sentence to have the concept of equality in it. For example, we could say \"Angela's age plus thirty years is the same age as her father\" or \"If you subtract thirty years from her father's age, it will be Angela's age\" or something else. Using the first rewording, we can make the algebraic equation   For the second sentence, we need to be careful; remember that this holds in ten years time. So Angela's age in ten years is and her father's is . Now we know that in ten years, Angela will be half the age of her father, which means if you double her age then, it will be equal to her father's age. So we can write   Now, in our problem both equations are things that are true, so we can use both at the same time. Here we can use substitution to replace the in the second equation with since these quantities equal in the first equation. This way, we will end up with an equation with only one unknown\/variable, which we can solve using the properties of arithmetic of equal expressions.   Expanding the bracket on the left hand side:   Subtracting and from both sides (this will have our variable only on one side and our constants only on the other)   So we know that Angela's current age is years old. We can then use the first equation to find her father's current age using substitution again:    and thus Angela's father's current age is years old.    "
},
{
  "id": "def-Equality",
  "level": "2",
  "url": "sec-Equality.html#def-Equality",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  We say that two numbers and are equal , and write , if and only if they are the same quantity. Note that they may be expressed in different ways.   "
},
{
  "id": "subsec-IntroToEquality-4",
  "level": "2",
  "url": "sec-Equality.html#subsec-IntroToEquality-4",
  "type": "Example",
  "number": "2.1.2",
  "title": "",
  "body": " Here are a few examples stating what we mean.    . This means that these two expressions are the same number (in this case ) written in different ways.    Another important and common example is equality of fractions. We will explore this more later in the book, but we know that .    If we write , this means that whenever we see the quantity again in our problem, we can say that it is the same as the number . Thus we can \"substitute\" for whenever we like.     "
},
{
  "id": "subsec-IntroToEquality-7",
  "level": "2",
  "url": "sec-Equality.html#subsec-IntroToEquality-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inequality is greater than is less than "
},
{
  "id": "assemblage-EquivalenceRelation-2",
  "level": "2",
  "url": "sec-Equality.html#assemblage-EquivalenceRelation-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equivalence relation "
},
{
  "id": "subsec-IntroToEquality-10",
  "level": "2",
  "url": "sec-Equality.html#subsec-IntroToEquality-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "substitute "
},
{
  "id": "def-PropertiesOfEquality",
  "level": "2",
  "url": "sec-Equality.html#def-PropertiesOfEquality",
  "type": "Definition",
  "number": "2.1.3",
  "title": "",
  "body": "     If is some mathematical expression involving the symbol , and is the same expression as with all 's' replaced with 's. If then . We call this the principle of substitution.     If is an equation, and is any number (or variable that represents a number) then                   as long as    We call this the property of arithmetic equality.       "
},
{
  "id": "subsec-IntroToEquality-22",
  "level": "2",
  "url": "sec-Equality.html#subsec-IntroToEquality-22",
  "type": "Example",
  "number": "2.1.4",
  "title": "",
  "body": " Suppose we know that Angela is thirty years younger than her father. Also, that in ten years, Angela will be half the age of her father at that time. Let's determine Angela's current age, and her father's current age.  First, we ask \"what quantities are we interested in, but are unknown?\". In this example, we are interested in Angela's current age and her father's current age. To help us write these algebraically, let's give these quantities variable names (and we need to be specific about what these variables stand for, so that readers, and ourselves, do not get confused.)  Let Angela's current age (in years), and let Angela's father's current age (in years).  Since Angela is thirty year's younger than her father, we need to think about how to translate this to an algebraic statement. We can think of trying to reword this sentence to have the concept of equality in it. For example, we could say \"Angela's age plus thirty years is the same age as her father\" or \"If you subtract thirty years from her father's age, it will be Angela's age\" or something else. Using the first rewording, we can make the algebraic equation   For the second sentence, we need to be careful; remember that this holds in ten years time. So Angela's age in ten years is and her father's is . Now we know that in ten years, Angela will be half the age of her father, which means if you double her age then, it will be equal to her father's age. So we can write   Now, in our problem both equations are things that are true, so we can use both at the same time. Here we can use substitution to replace the in the second equation with since these quantities equal in the first equation. This way, we will end up with an equation with only one unknown\/variable, which we can solve using the properties of arithmetic of equal expressions.   Expanding the bracket on the left hand side:   Subtracting and from both sides (this will have our variable only on one side and our constants only on the other)   So we know that Angela's current age is years old. We can then use the first equation to find her father's current age using substitution again:    and thus Angela's father's current age is years old.  "
},
{
  "id": "sec-ProblemSolving",
  "level": "1",
  "url": "sec-ProblemSolving.html",
  "type": "Section",
  "number": "2.2",
  "title": "Problem Solving",
  "body": " Problem Solving   In order to solve problems, it helps to be comfortable solving algebraic equations. In this section we will first talk about solving algebraic equations of a certain type (called linear equations), solving multiple linear equations at the same time, and then talking about some problem solving strategies that you can use to try and get a handle on a problem where the answer and\/or approach isn't immediately obvious.  First, let's give somewhat careful definitions of the objects we care about in equations, and the types of equations we wish to solve. For this section, all coefficients of variables will be integers (that is, positive or negative whole numbers) but some of the solutions to our equations may be rational numbers. In general, these techniques will work with any real numbers in most situations.    An expression is a combination of mathematical symbols without a relational symbol (e.g. ) symbol relating it to another combination of mathematical symbols. A term is an expression that does not include a addition or subtraction operation (outside of necessary brackets). A coefficient of a term that includes a variable is the number that variable is multiplied by. Terms only containing numbers are called constants.   An equation is two equal expressions with an equal sign between them. To solve an equation for a variable means to perform arithemtic operations on both sides of the equation (while maintaining equality) so that the equation is now in the form . Note that if there is only one variable, specifying the variable is usually omitted.    Consider the equation which is made of two expressions, and . In the term on the left hand side (or LHS) of the coefficient is , and in the term on the right hand side (or RHS) of the equation the coefficient is (here, we are viewing as . We will be more precise about this later in the book.)  Sometimes we can have unknown coefficients even in terms with variables, but we specify that these are indeed coefficients. For example, we could have the expression where we are thinking of as our variables and as our coefficients.      An equation over one (or more) variables is called a linear equation exactly when every term of the equation has at most one variable in it, and that variable has an exponent of .     is a linear equation since each term has (at most) one copy of .  Similarly, is another linear equation since both and have exactly one copy of in them, and has no 's or 's.  Now a non-example: is *not* a linear equation. Here there are two problems (onte that just one is enough to disqualify it from being a linear equation): the first term has two variables in it, and . Also the second term has two copies of multiplied together, since by the definition of exponents       Solving One Equation  Before we get into the idea of translating a \"real world\" problem into the language of mathematics, we'll go over some very important skills to solve many of these problems, which is solving linear equations (or systems of equations). Let's start with the simplest of cases: solving one equation with one variable.  Let be the symbol for our variable, and let be our coefficients. After collecting like terms, any linear equation can be written in the form . As long as we can follow these following steps (called an algorithm) to solve for our variable .    Subtract and from both sides of the equation. This gives us       Divide everything on both sides by the coefficient . This gives us   Cancelling out the we have     We could just memorize the formula above, but there are so many different situations that arise in mathematics that it isn't feasable to remember everything. However, if you have a strong knowledge of the ideas behind equality and arithmetic of equations, you can recreate this when the need arises.   Let's solve . The easiest way to view this is asking \"what number can I add to 5 to get 8\". We can formally solve for here by subtracting 5 from both sides:  We can solve this using the general algorithm above by viewing the equation as . Then   We can solve by first expanding out the brackets and then combining like terms so that the equation is in the standard form given in the algorithm:  Noting that we can view the RHS of the equation as , we can now use our algorithm above, giving us   We can check our answers by substituting our solution for the variable and making sure that equality holds. For the second equation we have    Since we do indeed have equality our solution is correct.   Solve the following linear equations. Check your work by substituting your answer into the original equation and checking that equality holds.                                                      Intro to Systems Of Equations  In many scenarios, we are given two (or more) relationships between two (or more) unknown quantities and we need to use these to find the unknown quantities that satisfy these relationships.   A typical problem might look like this:  On Monday, you spend to buy two medium coffees and one pizza burger. On Tuesday, you spend to buy three medium coffees and two pizza burgers. How much is one medium coffee, and how much is one pizza burger?  Let's define the price of a medium coffee (dollars) and the price of a pizza burger (dollars). We can translate the two sentences above to the equations    Here, we can check that if a medium coffee is $2.50 and a pizza burger is $4, that is and , both equations are satisfied, and thus both of the sentences above are true:     In this section, we will learn some methods of solving problems like finding these quantities in the example above. Note that we will limit our study to situations with linear equations and variables (which we call \"2 by 2 systems of equations\") but these methods can be expanded to solve larger systems.  First of all, let's define a system of equations. Note that unless otherwise stated, all equations are linear equations.    A system of equations is a set of equations where equality holds in each of these simultaneously; that is, all equations are true at the same time.    The two equations in the previous example are a system of equations. We know that two coffees and two pizza burgers coming to $9 is true, and we also know that similarly for the other equation. So both equations are true simultaneously.      Substitution  We can use the ideas of equality to help us solve systems of equations. Remember from REFERENCE, when two expressions equal, we can substitute one for the other whenever it is convenient. The idea is that since we know how to solve one equation with one variable, so we want to convert a 2 by 2 system of equations into one equation with one variable via substitution. Let's look at the example in the previous section:  REFERENCE  We have the system    Notice that both equations have the variables and in them. If we could \"substitute out\" one of the variables in terms of the other by first solving one of the equations for one of the variables, then we would be in a familiar situation with one equation and one variable. This will be our goal.  There isn't a \"correct\" choice of variable to solve for (any will indeed do!) we notice it seems easiest to solve for in the fist equation, as it has a coefficient of , so we do not have to divide at the end to solve for . Solving for in the first equation we have   Now any time we see a in an equation we can replace, or \"substitute\" it with . Let's do this substitution in the second equation:   Here we have one equation with the one variable , so we can use the steps to solve this from the previous section:       Describe the steps in each line of the previous part of this example.   Now that we know we can substitute this in to either equation to solve for our other unknown, We will substitute this into the first equation:      Describe the steps in each line of the previous part of this example.   Now that we have values for all of our variables, we have solved this system of equations. We can check our work by substituting both values into the other equation to make sure equality does indeed hold (as we want both equations to be true simultaneously.)     Since we do indeed achieve equality in both equations, we have our solution.  Let's write these steps as an algorithm:    Choose one of the variables in one of the equations.    Solve the equation for this variable.    Substitute this into the second equation for the solved variable. You now have one equation with at most one variable. If you have no variables left, you either have infinitely many solutions or no solutions (we will be able to tell which later in the chapter).    If it still exists, solve this equation for the variable. You should have some number. If there are no variables left, go to REFERENCE.    Substitute this number into either equation and solve for the remaining variable.    Check your work by substituting the solved values for both variables into the other equation from the previous part. If you do indeed have equality, your solution is a soloution for the system of equations.   Solve the following systems of equations. Check your work to make sure the solution is correct:              Elimination  There is another method for solving systems of equations that involves cleverly adding or subtracting multiples of one equation from another. We will explore why this method works, but first we will see the method in action:   Let's look at the same example as in the previous sections; that is, the system of equations    Let's subtract two times the first equation from the second equation (we'll write this as II - 2I, where I is the first equation and II is the second) by performing the operations on either side of the equals sign separately; when we do that, we will \"eliminate\" the variable from the second equation, and then we'll be left with one equation with one variable:      Now that we know we can substitute that in to either equation and solve for , similarly to the previous example. Thus we have .   As you can see, both methods give the same answer (which is a good thing, of course!). But why does this method work? We will give an example in the case of subtraction, but any operation will work. Note that in practice, addition and subtraction are the most useful in these scenarios.  Imagine we had a system of two equations. We will call the left hand sides of the first and second equation and , repsctively. Similarly, we will call the right hand sides and . (Note that in our previous example and ). We can view the system in general as  and  By the property of arithmetic equality, we can subtract from both sides of Equation I. Thus:   Now since we can use the property of substitution to substitute for in the right hand side:   Thus, we have subtracted Equation II from Equation I and showed thar the idea of elimination makes sense.   Use the above explanation as a guide to justify that if and then .   A few notes:   The method of elimination is more useful when you have larger systems of equations with more equations and\/or more variables. In the case, substitution is generally easy enough to do. However, it is good practice to be able to us the elimination method, as it is extremely more efficient and useful than substitution in these larger systems.    You can eliminate any variable using any equation in your system that you want. It's usually a good idea to choose a variable with small\/easy-to-work-with coefficients, but if you choose another variable, you will still get the correct result.    Once you choose a variable to eliminate, a common and useful technique is to multiply each equation by the cofficent of the variable in the other equation, and then add or subtract to eliminate that vaariable.       Solving a system of linear equations (using substitution and elimination) - Focus on 2x2 examples, but note that elimination is good for larger systems (that's why it's good to know it!)  Substitution - solve one equation for one variable, and then substitute that in to the other equation.  Elimination - idea: if and we can subtract from both sides of to get . But since we can say . Thus we can do arithmetic with \"sides\" of an equation. + and - are most useful.  How many solutions? One, none, infinitely many? How to tell.  What if the equation is more complicated? Ideas? Trial and error\/factoring\/etc.  Using technology.  The \"work\" in solving a problem is setting it up correctly (usually in the language of algebra, but other ways too)    Some problem solving strategies and techniques. Try to find something \"better\" than Polya. Include some problems to solve, of course, and try to include problems of a similar difficulty throughout. Discussion on patterns (with reference to if-then statements). INCLUDE EXPLORATION, TRANSLATING INTO ALGEBRA, SHOWING MULTIPLE METHODS.  Translating. Focus on testing with simple examples, defining your variables. Using equality to substitute. Exploration to find formula for situation.  Open ended problems: going from examples to conjecture to \"proof\". HIGHLIGHT MANY WAYS OF PROVING!  "
},
{
  "id": "def-TermsEtc",
  "level": "2",
  "url": "sec-ProblemSolving.html#def-TermsEtc",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": "  An expression is a combination of mathematical symbols without a relational symbol (e.g. ) symbol relating it to another combination of mathematical symbols. A term is an expression that does not include a addition or subtraction operation (outside of necessary brackets). A coefficient of a term that includes a variable is the number that variable is multiplied by. Terms only containing numbers are called constants.   An equation is two equal expressions with an equal sign between them. To solve an equation for a variable means to perform arithemtic operations on both sides of the equation (while maintaining equality) so that the equation is now in the form . Note that if there is only one variable, specifying the variable is usually omitted.    Consider the equation which is made of two expressions, and . In the term on the left hand side (or LHS) of the coefficient is , and in the term on the right hand side (or RHS) of the equation the coefficient is (here, we are viewing as . We will be more precise about this later in the book.)  Sometimes we can have unknown coefficients even in terms with variables, but we specify that these are indeed coefficients. For example, we could have the expression where we are thinking of as our variables and as our coefficients.   "
},
{
  "id": "def-LinearEquation",
  "level": "2",
  "url": "sec-ProblemSolving.html#def-LinearEquation",
  "type": "Definition",
  "number": "2.2.3",
  "title": "",
  "body": "  An equation over one (or more) variables is called a linear equation exactly when every term of the equation has at most one variable in it, and that variable has an exponent of .     is a linear equation since each term has (at most) one copy of .  Similarly, is another linear equation since both and have exactly one copy of in them, and has no 's or 's.  Now a non-example: is *not* a linear equation. Here there are two problems (onte that just one is enough to disqualify it from being a linear equation): the first term has two variables in it, and . Also the second term has two copies of multiplied together, since by the definition of exponents    "
},
{
  "id": "subsec-SolvingOneEquation-6",
  "level": "2",
  "url": "sec-ProblemSolving.html#subsec-SolvingOneEquation-6",
  "type": "Example",
  "number": "2.2.5",
  "title": "",
  "body": " Let's solve . The easiest way to view this is asking \"what number can I add to 5 to get 8\". We can formally solve for here by subtracting 5 from both sides:  We can solve this using the general algorithm above by viewing the equation as . Then   We can solve by first expanding out the brackets and then combining like terms so that the equation is in the standard form given in the algorithm:  Noting that we can view the RHS of the equation as , we can now use our algorithm above, giving us   We can check our answers by substituting our solution for the variable and making sure that equality holds. For the second equation we have    Since we do indeed have equality our solution is correct.   Solve the following linear equations. Check your work by substituting your answer into the original equation and checking that equality holds.                                                   "
},
{
  "id": "subsec-SystemsOfEquations-3",
  "level": "2",
  "url": "sec-ProblemSolving.html#subsec-SystemsOfEquations-3",
  "type": "Example",
  "number": "2.2.6",
  "title": "",
  "body": " A typical problem might look like this:  On Monday, you spend to buy two medium coffees and one pizza burger. On Tuesday, you spend to buy three medium coffees and two pizza burgers. How much is one medium coffee, and how much is one pizza burger?  Let's define the price of a medium coffee (dollars) and the price of a pizza burger (dollars). We can translate the two sentences above to the equations    Here, we can check that if a medium coffee is $2.50 and a pizza burger is $4, that is and , both equations are satisfied, and thus both of the sentences above are true:    "
},
{
  "id": "def-SystemOfEquations",
  "level": "2",
  "url": "sec-ProblemSolving.html#def-SystemOfEquations",
  "type": "Definition",
  "number": "2.2.7",
  "title": "",
  "body": "  A system of equations is a set of equations where equality holds in each of these simultaneously; that is, all equations are true at the same time.    The two equations in the previous example are a system of equations. We know that two coffees and two pizza burgers coming to $9 is true, and we also know that similarly for the other equation. So both equations are true simultaneously.   "
},
{
  "id": "subsec-Substitution-2",
  "level": "2",
  "url": "sec-ProblemSolving.html#subsec-Substitution-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "substitution. "
},
{
  "id": "subsec-Substitution-17",
  "level": "2",
  "url": "sec-ProblemSolving.html#subsec-Substitution-17",
  "type": "Checkpoint",
  "number": "2.2.9",
  "title": "",
  "body": " Describe the steps in each line of the previous part of this example.  "
},
{
  "id": "subsec-Substitution-22",
  "level": "2",
  "url": "sec-ProblemSolving.html#subsec-Substitution-22",
  "type": "Checkpoint",
  "number": "2.2.10",
  "title": "",
  "body": " Describe the steps in each line of the previous part of this example.  "
},
{
  "id": "subsec-Substitution-29-7",
  "level": "2",
  "url": "sec-ProblemSolving.html#subsec-Substitution-29-7",
  "type": "Checkpoint",
  "number": "[STRUCT].10",
  "title": "",
  "body": "Solve the following systems of equations. Check your work to make sure the solution is correct:           "
},
{
  "id": "subsec-Elimination-3",
  "level": "2",
  "url": "sec-ProblemSolving.html#subsec-Elimination-3",
  "type": "Example",
  "number": "2.2.11",
  "title": "",
  "body": " Let's look at the same example as in the previous sections; that is, the system of equations    Let's subtract two times the first equation from the second equation (we'll write this as II - 2I, where I is the first equation and II is the second) by performing the operations on either side of the equals sign separately; when we do that, we will \"eliminate\" the variable from the second equation, and then we'll be left with one equation with one variable:      Now that we know we can substitute that in to either equation and solve for , similarly to the previous example. Thus we have .  "
},
{
  "id": "subsec-Elimination-11",
  "level": "2",
  "url": "sec-ProblemSolving.html#subsec-Elimination-11",
  "type": "Checkpoint",
  "number": "2.2.12",
  "title": "",
  "body": " Use the above explanation as a guide to justify that if and then .  "
},
{
  "id": "sec-2_1NumberSystemsAndPlaceValue",
  "level": "1",
  "url": "sec-2_1NumberSystemsAndPlaceValue.html",
  "type": "Section",
  "number": "2.3",
  "title": "NumberSystemsAndPlaceValueWhole Numbers",
  "body": " NumberSystemsAndPlaceValue    Whole Numbers  Place value is a very important concept that allows us to write down very large (and very small) numbers in a small amount of space. If we didn't have the concept of place value, we would simply use the number of \"ticks\" we wanted to write down to represent that number. For example, if we wanted to write down \"twenty\" we would do something like the following:    20 tick marks    And if we want to represent the number \"one hundred and twelve\" we would write:    112 tick marks    You can see how difficult it would be to write down and understand large numbers, or to easily do operations with them, like addition, subtraction, multiplication, and division.  The idea of place value is incredibly powerful. It allows us to represent quantities with something more compact and useful than \"a bunch of ticks\". For example, the number ten is (usually) represented by 10, which is really a 1 followed by a 0. In this chapter, we'll talk about the concept of place value, what we need in order to be able to express any number using the idea of place value (called a numeration system), and how we can use the ideas of place value to easily add, subtract, multiply, and divide whole numbers.  "
},
{
  "id": "objectives-structures",
  "level": "2",
  "url": "sec-2_1NumberSystemsAndPlaceValue.html#objectives-structures",
  "type": "Objectives",
  "number": "2.3",
  "title": "",
  "body": " "
},
{
  "id": "sec-NumberSystems",
  "level": "1",
  "url": "sec-NumberSystems.html",
  "type": "Section",
  "number": "2.4",
  "title": "Number Systems",
  "body": " Number Systems   Introduction to Number Systems  Consider the following objects:    5 tick marks    In order to work with the idea of quantities, we want some symbol to represent this number of quantities, and other numbers of quantities too. In the Western world (and much of the rest of the world too) we've chosen the symbol \"5\" to represent these quantities. Note that it doesn't mean these particular five things, but simply the idea of having that many of anything.    A numeral is a representation of a quantity of some type.    Note the difference between a numeral and a number: a number is the actual amount, whereas a numeral is some symbol that represents this amount.  Numerals, however important as they are to being able to work with and understand quantities, isn't enough. Just imagine if we had a completely unique symbol for every whole number there is, and there are infinitely many so this is impossible anyway. So, we use the idea of place to represent any number we like using a finite (and usually small) amount of symbols.  Think about why we write the number \"eleven\" with the numerals 11. What does this actually mean? We have two 1's, but they're playing different roles solely due to their location in the numeral. The leftmost 1 means \"one ten\" and the rightmost 1 means \"one one\". So, really, we read that number as \"one ten and one one,\" whose number happens to have the name \"eleven\".  For a number system using place value to indicate a number, we need to have a few necessary things:   A symbol for indicating zero and a symbol for indicating one    A set of unique numeral symbols, digits for representing consecutive numbers (beginning with zero and one) without the concept of place value.     Note that is called the base of our number system. For example, our base ten number system has the digits and any number larger than nine we can represent using the place of digits.  Note that in base , and So, for example, in base the digit set is . Note that these are all the possible remainders when dividing whole numbers by 7.  How does place value work? Let's see what happens as we count up from one to twelve:    Counting from 1 to 12 using counting blocks    The idea is that once we reach nine ticks, we \"run out\" of digits to express any larger numbers with their own symbol. So, we group ten of these together to make one \"ten\" and we express this as a digit to the left of the ones place.  Similarly, let's count from ninety-seven to one hundred-three:    Counting from 97 to 103 using counting blocks    You can see once we add an additional tick (or one) to ninety-nine, we then have ten ones. So we regroup those ones to one ten. Now this gives us ten tens, and since we have ten of those, we need to regroup them into a new place, called the hundreds place.  We'll look at models of multiplication and exponents in a later place in the book, but we will rely on our intuition about multiplication and our knowledge of exponents to help us talk about place value. We know that in our base ten number system, we group ten of one place to make one of the next place. We start with the ones place, which we can express as , as any non-zero number to the power of is (we will see why later.) So we know that we can express the tens place as 10 ones (remembering that an exponent of 1 is the same as having no exponent). We can also think of a \"long\" as being a one-dimensional object; that dimension being length.  Similarly we group 10 tens to make one hundred: . Similarly to a \"long\" we can view the hundred \"square\" as a two dimensional object, with length and width. Hopefully you are noticing the relationship to the exponent of the place.  We group 10 hundreds to make one thousand: . Similarly to a \"long\" and \"square\" we can view the thousand \"cube\" as a three dimensional object, with length, width, and depth.  As we can really only think in three dimensions well (some mathematicians can visualize some higher dimensions, but not too many!), we can't think of a ten-thousand as a four-dimensional object. However, we can \"reunitize\" and think of the thousand as a new type of unit. Then, one ten-thousand can be visualized as a \"long\" made up of ten-thousands, a hundred-thousand can be viewed as a square made up of ten ten-thousands. We \"reunitize\" again when we hit one million, and reunitize after every three places. This may be why we decided to express places in \"name\", \"ten-name\", and \"hundred-name\".  This idea of expressing a number in its places will be very helpful later on. For example we can write   We call this the expanded place form of a number. Note that we write as and as to highlight the pattern of decreasing exponents as you move from left to right.  A good question is \"is there anything special about regrouping in units of ten ?\" or in the language of number systems \"why do we use base ten?\" The answer to this is no! We can indeed have a base of any counting number we like (say in base ) and then regoup once we have of any place.  Let's try writing \"thirteen\" in a few different bases so that you get a feel for what is happening:    Counting blocks of thirteen in different bases    We can write these as the following numerals (note that the base is written as a subscript so that you know what base each number is in. We'll keep this practice up when needed.)   We'll explore different bases as this chapter progresses. To have a solid understanding of place value, you should be able to understand numbers written in any base, and be able to work with other bases when doing arithmetic.  Note that in our examples, we group ones into \"long\" pieces, then we group \"longs\" into squares, then we group squares into cubes In base ten the longs are tens, the squares are hundreds, and the cubes are thousands. Note that the cube just looks like a \"big\" one, and thus is why we repeat tens, hundreds, thousands, when we do place value (REWORD THIS!)  The idea of expanded place form extends to any base too. For example, we can write in its expanded place form: . Remember we are thinking in base eight, so is the number in base ten, is the number in base ten, and so on. To avoid any confusion, we'll only use the words \"tens\", \"hundreds\", etc to refer to base ten, and block names like \"longs\", \"squares\", etc to refer to places in any base.  As our number system is base ten, we almost have too much \"muscle memory\" to be able to think about how place value works, and how our algorithms for doing arithmetic work. So we'll frequently change to other bases for this chapter.     Converting From Base Ten  Let's think about how to change from one base to another.   Let's start in base ten. Suppose we wanted to write the base ten number 25 in base four. We can start by thinking to breaking up all of the base ten groupings into single ones:    Expressing 2 tens and 5 ones as 25 ones in base ten blocks    Then, we can make as many groups of four ones (longs) as possible (we'll regroup those later):  There! We've made six longs, and we have 1 one left over. Now we have more than four longs so let's regroup four of them into one sixteen (square):    Regrouping 25 ones into 6 longs and 1 one in base four    Now, we have 1 square, 2 longs, and 1 one. So we can write this number as .    Regrouping 6 longs and 1 one as 1 square 2 longs and 1 one in base four     Let's do one more example:   Let's write the number 77 in base five. First, we make as many groups of five as we can:    Regrouping 77 ones into longs in base five    We have divided the 77 ones into 15 groups of five (longs) with 2 remaining.  Now we group our 15 longss into groups of five, giving us groups of twenty-five, or squares:    Regrouping longs as squares in base five    Now we have 3 squares, and 2 ones. Can we write this as ? No! Be careful here. We are missing a place; we have no fives, so we need to indicate that with the digit 0: so we should write . Note that is 3 fives and 2 ones, which is 17. This is why that 0 digit is important!   Let's analyze the examples above to come up with a procedure to convert any base ten number into a different base.    Divide our base into the number of ones. The remainder is our ones digit.    Take the quotient of the step above and divide our base into that. The remainder is the next digit to the left.    Repeat the previous step until we have a quotient of 0. Then you have your number in the desired base.    Let's view the previous example in terms of division:    Long division of 77 by 5 and relation to base five blocks    Long division of 15 by 5 and relation to base five blocks     Convert the following numbers from base ten to the indicated base:    45 (to base seven)    465 (to base three)    1377 (to base five)    54054 (to base nine)     DO SOLUTIONS FOR THESE      Converting To Base Ten  How can we convert in the other direction? If we have a number in, for example, base six, how can we determine which number it is base ten? Let's look at an example:   Let's look at . What does this mean? Reading from right to left, we have 4 ones, 1 long, 5 squares, and 2 cubes. Longs are 6 ones, squares are ones, and cubes are ones. We can now add all of the ones and group in our usual base ten:   Converting cubes and squares to ones in base six    Converting our base six number to base ten     Let's do one more example:   Let's look at . Here we have 1 one, 0 longs of size , 1 square of size , and similarly 0 , 1 , 0 , 0 , and 1 . So we have:     Just like before, let's determine a method for converting from any base to base ten:   1. Multiply the digits in the place value spot by the value of the place.    Sum these together in usual base ten arithmetic.       Base Twelve  So far, we've only dealt with bases of ten or less. But there's nothing stopping us from dealing with bases larger than ten. The only thing is that we, so far, only have digits for numbers from 0 to 9. If we're not allowed to regroup until we have twelve things (ones, longs, etc) we need new digits to represent the numbers \"ten\" and \"eleven\". There aren't any really standard choices for these digits, but let's choose \"A\" to mean \"ten\" and \"B\" to mean \"eleven\".  To get a feel for base twelve, let's count in base twelve, starting at one, and going to fifteen.    Counting to fifteen in base twelve blocks    It might take a while to wrap your head around not regrouping when you have ten things, but in base twelve we do not.   Let's convert a base ten number to base twelve to get a feel for it. Let's start with 155 and use our algorithm above.   So 155 in base twelve is . Note that since we have eleven ones remaining, we write that in base twelve as .    Long division of 77 by 5 and relation to base five blocks      Now let's convert a base twleve number to base ten. Let's try . Using the algorithm above:        Historical Number Systems  INCLUDE SECTION HERE!   "
},
{
  "id": "def-Numeral",
  "level": "2",
  "url": "sec-NumberSystems.html#def-Numeral",
  "type": "Definition",
  "number": "2.4.1",
  "title": "",
  "body": "  A numeral is a representation of a quantity of some type.   "
},
{
  "id": "sec-NumberSystems-2-9",
  "level": "2",
  "url": "sec-NumberSystems.html#sec-NumberSystems-2-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "digits "
},
{
  "id": "sec-NumberSystems-2-10",
  "level": "2",
  "url": "sec-NumberSystems.html#sec-NumberSystems-2-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "base "
},
{
  "id": "sec-NumberSystems-2-24",
  "level": "2",
  "url": "sec-NumberSystems.html#sec-NumberSystems-2-24",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "expanded place form "
},
{
  "id": "subsec-ConvertingFromBaseTen-3",
  "level": "2",
  "url": "sec-NumberSystems.html#subsec-ConvertingFromBaseTen-3",
  "type": "Example",
  "number": "2.4.2",
  "title": "",
  "body": " Let's start in base ten. Suppose we wanted to write the base ten number 25 in base four. We can start by thinking to breaking up all of the base ten groupings into single ones:    Expressing 2 tens and 5 ones as 25 ones in base ten blocks    Then, we can make as many groups of four ones (longs) as possible (we'll regroup those later):  There! We've made six longs, and we have 1 one left over. Now we have more than four longs so let's regroup four of them into one sixteen (square):    Regrouping 25 ones into 6 longs and 1 one in base four    Now, we have 1 square, 2 longs, and 1 one. So we can write this number as .    Regrouping 6 longs and 1 one as 1 square 2 longs and 1 one in base four    "
},
{
  "id": "subsec-ConvertingFromBaseTen-5",
  "level": "2",
  "url": "sec-NumberSystems.html#subsec-ConvertingFromBaseTen-5",
  "type": "Example",
  "number": "2.4.3",
  "title": "",
  "body": " Let's write the number 77 in base five. First, we make as many groups of five as we can:    Regrouping 77 ones into longs in base five    We have divided the 77 ones into 15 groups of five (longs) with 2 remaining.  Now we group our 15 longss into groups of five, giving us groups of twenty-five, or squares:    Regrouping longs as squares in base five    Now we have 3 squares, and 2 ones. Can we write this as ? No! Be careful here. We are missing a place; we have no fives, so we need to indicate that with the digit 0: so we should write . Note that is 3 fives and 2 ones, which is 17. This is why that 0 digit is important!  "
},
{
  "id": "subsec-ConvertingFromBaseTen-10",
  "level": "2",
  "url": "sec-NumberSystems.html#subsec-ConvertingFromBaseTen-10",
  "type": "Checkpoint",
  "number": "2.4.4",
  "title": "",
  "body": " Convert the following numbers from base ten to the indicated base:    45 (to base seven)    465 (to base three)    1377 (to base five)    54054 (to base nine)     DO SOLUTIONS FOR THESE   "
},
{
  "id": "subsec-ConvertingToBaseTen-3",
  "level": "2",
  "url": "sec-NumberSystems.html#subsec-ConvertingToBaseTen-3",
  "type": "Example",
  "number": "2.4.5",
  "title": "",
  "body": " Let's look at . What does this mean? Reading from right to left, we have 4 ones, 1 long, 5 squares, and 2 cubes. Longs are 6 ones, squares are ones, and cubes are ones. We can now add all of the ones and group in our usual base ten:   Converting cubes and squares to ones in base six    Converting our base six number to base ten    "
},
{
  "id": "subsec-ConvertingToBaseTen-5",
  "level": "2",
  "url": "sec-NumberSystems.html#subsec-ConvertingToBaseTen-5",
  "type": "Example",
  "number": "2.4.6",
  "title": "",
  "body": " Let's look at . Here we have 1 one, 0 longs of size , 1 square of size , and similarly 0 , 1 , 0 , 0 , and 1 . So we have:    "
},
{
  "id": "subsec-BaseTwelve-6",
  "level": "2",
  "url": "sec-NumberSystems.html#subsec-BaseTwelve-6",
  "type": "Example",
  "number": "2.4.7",
  "title": "",
  "body": " Let's convert a base ten number to base twelve to get a feel for it. Let's start with 155 and use our algorithm above.   So 155 in base twelve is . Note that since we have eleven ones remaining, we write that in base twelve as .    Long division of 77 by 5 and relation to base five blocks    "
},
{
  "id": "subsec-BaseTwelve-7",
  "level": "2",
  "url": "sec-NumberSystems.html#subsec-BaseTwelve-7",
  "type": "Example",
  "number": "2.4.8",
  "title": "",
  "body": " Now let's convert a base twleve number to base ten. Let's try . Using the algorithm above:    "
},
{
  "id": "sec-ArithmeticOperations",
  "level": "1",
  "url": "sec-ArithmeticOperations.html",
  "type": "Section",
  "number": "2.5",
  "title": "Arithmetic Operations",
  "body": " Arithmetic Operations   In this section, we will talk about the four main operations of arithmetic of whole numbers; addition, subtraction, multiplication, and division. The idea is that we will start with the idea of addition, and \"build\" the others from that. Indeed, mathematicians like to start with as little as possible, and making as many results and ideas out of this starting place as we can.  Once we talk about these operations, we can then talk about some nice properties that (some of) these operations have, which allows us to rearrange and regroup numbers so we can easily perform operations. Then, we'll talk about common (and uncommon!) rules, called algorithms, that we use to do arithmetic. We'll learn the steps in the algorithms, and why these algorithms work!  A reminder; we use the notation to mean the set of whole numbers .    Addition  Addition is an operation that we usually have an intuitive grasp of. There are two common ways of viewing addtion (called addition models); the \"set model,\" where we combine two sets (with no elements in common; that is, and empty intersection) into one set, and the \"number line model\", where we start at one number on the umber line, and add additional spaces according to the number we're adding to the first one.  Here is the set model:  Set Model for 7+4    Here is the number line model:  Number Line Model for 7+4    As addition is quite intuitive, we'll take the ability to add numbers as a given (in math we call this an axiom ).    Let . We say is the sum of the addends  and and we write .    Be careful when adding numbers representing objects or units; if you have different objects or units you cannot simply add the two numbers.   Of course 3 apples + 4 apples = 7 apples, but if we are adding different objects we cannot add the numbers representing them; if we have 3 apples and 4 oranges, we cannot say we have 7 since we're treating apples and oranges as different objects.  However, if we wanted to add up the amount of pieces of fruit we had without making a distinction between apples and oranges, we would have 7 pieces of fruit. In short, in real world applications, your choice of units matters.    Notes for Additional Understanding  Though we're taking addition to be our \"axiom\" that we are using to define all other operations, mathematicians usually build up the ideas of whole numbers and addition from sets themselves. This approach, while more fundamental, is a bit beyond the scope of what teachers need to understand.     Inequality and Subtraction  Before we talk about subtraction, let's talk about how to compare numbers; that is, how to tell if one number is larger than another. We want to \"build\" all ideas from addition, so let's see if we can come up with a way of describing this using only addition and whole numbers.     Draw some sort of diagram showing that 11 is greater than 7.    Using only addition and other whole numbers, try to explain why 11 is greater than 7. Referring to the diagram you made above may help.    Do the same thing to show that 15 is greater than 3.    Can we generalize this? If , how do we know if ? Try and write this as a conditional statement: \"If then ...\"     You probably drew a diagram that shows either the set model of addtion or the number line model, maybe something like the following if :    Greater than Seven on Number Line      The key to this is realizing I can add a (non-zero) counting number to 7 to get 11. In our case it is 4. So we can say that since we found the number 4 such that .    We can apply the exact same logic to this problem; the only thing different are the numbers! So we can say since there is a number (12) where .    The key thing to realize is that all that matters is the *existence* of a number, say , such that . Thus we can write this as a conditional statement:  If then there is a such that .     In the previous exercise, we developed a definition for \"greater than\". Modify this definition to define   \"greater than or equal to\"    \"less than\"    \"less than or equal to\"      Now that we have the idea of comparing numbers, we can develop a definiton of subtraction of whole numbers. Before looking at the definition, see if you can take the \"greater than or equal to\" definition and modify it to a definition for subtraction.    Let where . Then we define the subtraction to be the unique such that .    Note that this is the same number in the definition for \"greater than or equal to\". And we wanted the set to include zero since we want to be able to subtract 0, or have an answer of 0. We will get into subtraction with negative answers when we talk about integers in a later section.   Let's let and . Since we can talk about using our defintion. We know since is the unique number such that . So in the definiton above, we have that We can view this subtraction via the following diagram.    Seven subtract two on a number line    It's important to note that we cannot talk about the problem using our definition above, since . We will have to modify our definition later, once we introduce negative numbers.   Now let's let and . Then since . So in the definition above .  INCLUDE SECTION ON a-b=c IFF a-c=b, EITHER HERE OR IN PROPERTIES OF ARITHMETIC SECTION    Multiplication   There are many ways to think about multiplication, but one of the most common is to think of it as repeated addition. That way, we can define multiplication in a way that uses a concept that we have already talked about, namely addition.    Let . We define to be copies of added together. In the case where either or we define to be .   We can view this repeated addition. Consider the example in the following diagram.    A number line model of 4 times 3     Another way of viewing the multiplication is as an area or array. Really, this idea is very similar to the number line model, except each group of is directily to the right of the first group. Later, we will see that this model is an excellent one for thinking about multiplication of fractions and decimals too.  Again, let's model :  Area model for 4 times 3      Exponents  MOVE SECTION TO AFTER PROPERTIES OF ARITHMETIC Just like how multiplication is a nice way of writing repeated addition, it's very useful to be able to have the idea of repeated multiplication. To write , where is multiplied by itself times, we write , where we call the base and the exponent. .   We can write as since is multiplied by itself times.   It's clear that for any whole number we have . Also, for any whole number we say and if we say . Note that we leave undefined; as this causes a lot of trouble if we try and give this meaning. We will see why later.  Let's try and come up with some rules for multiplying exponents. What if we wanted to multiply . We could write      Division with Remainders   Introduction To Division  Now that we have the idea of multiplication as repeated addition, we can view its inverse operation, division, as repeated subtraction.  First, an example to see what we mean:   Let's say we wanted to do the division problem We can view this as counting the number of times we can subtract 5 from 21 until we're unable to anymore (without going in to negative numbers). We know    and since 1 is less than 5 we cannot subtract 5 from 1 using our definition of subtraction. We were able to subtract 5 four times from 21, so we say that since there is 1 remaning at the end of this repeated subtraction. Let's look at this in general:    Number line model of 21 divided by 5       Let with . Then we say that if and only if there are unique numbers and where and .    We call the dividend , the divisor , the quotient , and the remainder. As is part of this defintion, we say the expression is undefined ; that is, the concept of division isn't defined when .  Note just like us defining subtraction in terms of something we already knew, we defined divison in terms of multiplication and addition. So we're on solid footing here; if we ever forget what division means, we just look up this definition which is in terms of multiplication and addition, which, if we forget, we can look up the definition of those too. This seems like it's overkill for such simple concepts (and it is in a way) but this is how mathematicians think about concepts so it's good practice to do this for easy and intuitive ideas like arithmetic.  We can also view the division as the number of groups with elements you can make out of objects. This is called the measurement model of division. Let's look at .    Dividing 21 into groups of size 5    The division can be viewed in another way as well; we can ask if we wish to partition objects into groups, how many objects are in each group? This is called the partitive model of division (the word \"partitive\" being related to the idea of a partition). Again, we look at using this model    21 divided into 5 equal groups     Which of the following is viewing division using the measurement model, and which is viewing division using the partitive model?    You wish to divide students into equal sized groups? How many students are in each group, and how many students are left over?    You wish to divide students into groups of size . How many groups can you make, and how many students are left over?     This is partitive, since the size of the groups is unknown, but the number of groups is fixed.    This is measurement, since the size of the groups is fixed, but the number of groups is unknown.     Notes for Additional Understanding  It's intuitive that every division problem has one answer, that is one quotient and remainder that make the equation true. However, this is something that really needs to be proved before we can say it for sure. We will revisit this in the section where we talk about divisibility of numbers.     "
},
{
  "id": "subsec-Addition-5",
  "level": "2",
  "url": "sec-ArithmeticOperations.html#subsec-Addition-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "axiom "
},
{
  "id": "def-Addition",
  "level": "2",
  "url": "sec-ArithmeticOperations.html#def-Addition",
  "type": "Definition",
  "number": "2.5.1",
  "title": "",
  "body": "  Let . We say is the sum of the addends  and and we write .   "
},
{
  "id": "subsec-Addition-8",
  "level": "2",
  "url": "sec-ArithmeticOperations.html#subsec-Addition-8",
  "type": "Example",
  "number": "2.5.2",
  "title": "",
  "body": " Of course 3 apples + 4 apples = 7 apples, but if we are adding different objects we cannot add the numbers representing them; if we have 3 apples and 4 oranges, we cannot say we have 7 since we're treating apples and oranges as different objects.  However, if we wanted to add up the amount of pieces of fruit we had without making a distinction between apples and oranges, we would have 7 pieces of fruit. In short, in real world applications, your choice of units matters.  "
},
{
  "id": "subsec-Subtraction-3",
  "level": "2",
  "url": "sec-ArithmeticOperations.html#subsec-Subtraction-3",
  "type": "Checkpoint",
  "number": "2.5.3",
  "title": "",
  "body": "   Draw some sort of diagram showing that 11 is greater than 7.    Using only addition and other whole numbers, try to explain why 11 is greater than 7. Referring to the diagram you made above may help.    Do the same thing to show that 15 is greater than 3.    Can we generalize this? If , how do we know if ? Try and write this as a conditional statement: \"If then ...\"     You probably drew a diagram that shows either the set model of addtion or the number line model, maybe something like the following if :    Greater than Seven on Number Line      The key to this is realizing I can add a (non-zero) counting number to 7 to get 11. In our case it is 4. So we can say that since we found the number 4 such that .    We can apply the exact same logic to this problem; the only thing different are the numbers! So we can say since there is a number (12) where .    The key thing to realize is that all that matters is the *existence* of a number, say , such that . Thus we can write this as a conditional statement:  If then there is a such that .   "
},
{
  "id": "subsec-Subtraction-4",
  "level": "2",
  "url": "sec-ArithmeticOperations.html#subsec-Subtraction-4",
  "type": "Checkpoint",
  "number": "2.5.4",
  "title": "",
  "body": " In the previous exercise, we developed a definition for \"greater than\". Modify this definition to define   \"greater than or equal to\"    \"less than\"    \"less than or equal to\"     "
},
{
  "id": "def-subtraction",
  "level": "2",
  "url": "sec-ArithmeticOperations.html#def-subtraction",
  "type": "Definition",
  "number": "2.5.5",
  "title": "",
  "body": "  Let where . Then we define the subtraction to be the unique such that .   "
},
{
  "id": "subsec-Subtraction-8",
  "level": "2",
  "url": "sec-ArithmeticOperations.html#subsec-Subtraction-8",
  "type": "Example",
  "number": "2.5.6",
  "title": "",
  "body": " Let's let and . Since we can talk about using our defintion. We know since is the unique number such that . So in the definiton above, we have that We can view this subtraction via the following diagram.    Seven subtract two on a number line    It's important to note that we cannot talk about the problem using our definition above, since . We will have to modify our definition later, once we introduce negative numbers.  "
},
{
  "id": "subsec-Subtraction-9",
  "level": "2",
  "url": "sec-ArithmeticOperations.html#subsec-Subtraction-9",
  "type": "Example",
  "number": "2.5.7",
  "title": "",
  "body": "Now let's let and . Then since . So in the definition above . "
},
{
  "id": "def-Multiplication",
  "level": "2",
  "url": "sec-ArithmeticOperations.html#def-Multiplication",
  "type": "Definition",
  "number": "2.5.8",
  "title": "",
  "body": "  Let . We define to be copies of added together. In the case where either or we define to be .   We can view this repeated addition. Consider the example in the following diagram.    A number line model of 4 times 3    "
},
{
  "id": "subsubsec-Exponents-2",
  "level": "2",
  "url": "sec-ArithmeticOperations.html#subsubsec-Exponents-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "base exponent. "
},
{
  "id": "subsubsec-Exponents-3",
  "level": "2",
  "url": "sec-ArithmeticOperations.html#subsubsec-Exponents-3",
  "type": "Example",
  "number": "2.5.9",
  "title": "",
  "body": " We can write as since is multiplied by itself times.  "
},
{
  "id": "subsubsec-IntroductionToDivision-4",
  "level": "2",
  "url": "sec-ArithmeticOperations.html#subsubsec-IntroductionToDivision-4",
  "type": "Example",
  "number": "2.5.10",
  "title": "",
  "body": " Let's say we wanted to do the division problem We can view this as counting the number of times we can subtract 5 from 21 until we're unable to anymore (without going in to negative numbers). We know    and since 1 is less than 5 we cannot subtract 5 from 1 using our definition of subtraction. We were able to subtract 5 four times from 21, so we say that since there is 1 remaning at the end of this repeated subtraction. Let's look at this in general:    Number line model of 21 divided by 5    "
},
{
  "id": "def-Division",
  "level": "2",
  "url": "sec-ArithmeticOperations.html#def-Division",
  "type": "Definition",
  "number": "2.5.11",
  "title": "",
  "body": "  Let with . Then we say that if and only if there are unique numbers and where and .   "
},
{
  "id": "subsubsec-IntroductionToDivision-6",
  "level": "2",
  "url": "sec-ArithmeticOperations.html#subsubsec-IntroductionToDivision-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dividend divisor quotient undefined "
},
{
  "id": "subsubsec-IntroductionToDivision-8",
  "level": "2",
  "url": "sec-ArithmeticOperations.html#subsubsec-IntroductionToDivision-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "measurement model of division. "
},
{
  "id": "subsubsec-IntroductionToDivision-10",
  "level": "2",
  "url": "sec-ArithmeticOperations.html#subsubsec-IntroductionToDivision-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "partitive model of division "
},
{
  "id": "subsubsec-IntroductionToDivision-12",
  "level": "2",
  "url": "sec-ArithmeticOperations.html#subsubsec-IntroductionToDivision-12",
  "type": "Checkpoint",
  "number": "2.5.12",
  "title": "",
  "body": " Which of the following is viewing division using the measurement model, and which is viewing division using the partitive model?    You wish to divide students into equal sized groups? How many students are in each group, and how many students are left over?    You wish to divide students into groups of size . How many groups can you make, and how many students are left over?     This is partitive, since the size of the groups is unknown, but the number of groups is fixed.    This is measurement, since the size of the groups is fixed, but the number of groups is unknown.   "
},
{
  "id": "sec-PropertiesOfArithmeticOperations",
  "level": "1",
  "url": "sec-PropertiesOfArithmeticOperations.html",
  "type": "Section",
  "number": "2.6",
  "title": "Properties Of Arithmetic Operations",
  "body": " Properties Of Arithmetic Operations   Order Of Operations  A quick reminder about the order of operations that occur in an expression. These have been universally agreed upon over time, so we should make sure we're comfortable with this.   Perform operations inside of brackets (using the ordering we are listing) in the order they occur, left to right.    Perform exponential and root operations in the order they occur, left to right.    Perform divisions and multiplications in the order they occur, left to right.    Perform addition and subtraction in the order they occur, left to right.   You have probabily heard the expression BEDMAS as a reminder of the order. More precisely, it should read BE(DM)(AS), as we think of division and multiplication, and addition and subtraction, as pairs of the same operations (as each member of the pair is the inverse operation of the other member.)   Be careful when you see expressions like . It is a very common error to add the first, which is incorrect as it does not follow our oder of operations. OF course, we should have      Properties Of Arithmetic  There are some important properties of arithmetic operations that are worth pointing out and discussing. We use them regularly, and we will rely on them especially in the coming section on algorithms for arithmetic. Let's use the symbol to mean any one of our arithmetic operations. Note that we can think of all of our operations *combining* two numbers to make another number.    Closure - We say a set is closed under the operation  exactly when it's the case that if then .    Since addition of two whole numbers gives us another whole number, we have that the set is closed under . Similarly, is closed under as well. However, is *not* closed under subtraction, since (as a counterexample to the if-then statement in the definition of closure) . We know that (so the if part of the definition is true) but (so the then part of the definition is false).      We say an operation is commutative exactly when it's the case that when then ; that is, (order of performing the operation doesn't matter).    In , addition and multiplication are commutative. For example, and . We can view these pictorally:    4+11 and 11+4 on a number line    3x7 and 7x3 using area model    Let's move to the set so that subtraction is closed and our subtractions make sense. Subtraction is *not* a commutative operation since, as a counterexample, but . Similarly, division in the set is not commutative.      We say an operation is associative exactly when it's the case that when then ; that is, (grouping performing the operation doesn't matter).    In , addition and multiplication are associative. For example, and . We can view these pictorally:    3+7+4 on number line showing associativity    3x2x4 prism showing associativity    Now in subtraction is *not* associative. As a counterexample, we have but .    Using associativity and distributivity can help us do arithmetic more quickly and easily. For example, if we were to add we can look for pairs (or triples, etc) of numbers that sum to a multiple of ten. Using associativity and commutativity we can rearrange the above to   Similarly for multiplication, we can look for number that multiply together to give a power of ten. This will make our multiplication much easier. For example, if we were to multiply we could use associativity and commutativity to rearrange to above to     Now we talk about properties specific to addition\/subtraction and multiplication\/division.    We call 0 the additive identity since for any number .      We call 1 the multiplicative identity since for any number .    Using the idea of identities, we can talk about inverse elements for each pair of related operations. In laster sections when we discuss integers and rational numbers, we will talk about how we can turn every sutraction problem into an addtion problem, and (almost) every division problem into a multiplication problem. In this sense, we can think of subtraction as being the \"same\" operation as addition, and division being the \"same\" operation as multiplication.    Let be a number. Then is the additive inverse or negative of if and only if .    In the set of integers, is the negative of since . This also means that is the negative of .    However, has no negaive in the set of whole numbers, since there is no such that . So depending on the set you are working with, negatives may or may not exist.      Let be a number. Then is the multiplicative inverse of reciprocal of if and only if .    In the set of rational numbers, or fractions, is the reciprocal of since . This also means that is the reciprocal of .    Note that in any set, does not have a reciprocal, since there is no number such that since we know that for any choice of (of course, we know this fact is true, but we will carefully show *why* it is true later in this section.)    The last property we will discuss invloves how multiplication and addition \"play\" together.    Let be numbers. Then we call the property that the distributive property .    The easiest way to view why distributivity holds is via a picture using the array model of multiplication. Consider a chocolate bar that measures blocks vertically and blocks horizontally. In total, the chocolate bar has blocks:    A 6x8 rectangle    Now, let's \"break\" this chocolate bar between the 3rd and 4th horizontal block thus giving us 3 blocks horizontally in the first section and 5 in the second (of course, we still have the same amount of chocolate). So we can view this now as . But we could calculate the number of blocks separately in each of the two sections, and then add them together. Obviously we would still have the same amount of chocolate. So there are blocks of chocolate.    Showing distributivity by braking a 6x8 rectangle into a 6x3 and a 6x5 rectangle.    This idea represents the idea behind distributivity. Note that distrivutivity is *very* important when we start discussing methods for multiplying in a later section.    Note that we can extend the idea in the previous example to any number of \"cuts\" in our chocolate bar. We could show this more formally, but the following examples should give an idea of how this works   Let's look at again. We can break into , and into . Thus we can view as . Viewed as a chocolate bar as in the previous example:    Distributivity of (2+4)x(3+5)    We can now multiply the constituent parts and the add them together to obtain the final answer. Note that we multiply each number in the first bracket by each number in the second. So   .   There is nothing special about the numbers in the previous example. In fact, we can do this for any numbers. In fact, if are numbers then .   Distributivity of (a+b)x(c+d)      Let's use the same idea to multiply . We can split each number in terms of its place values: . Using the same idea as the previous examples we can view this as           Notes For Additional Understanding  It is just beyond the scope of this textbook, but we could show that the above properties *must* hold for addition and multiplication using a proving technique called mathematical induction for many of these. We will eventually prove that for all numbers which is usually called the property of multiplication by zero .   We can use these properties to carefully show some results about arithmetic. We will do one, and leave the others as an exercise for you.    Consequences of Properties   Related Subtraction and Division Problems  Using the definitions of subtraction and division (in terms of addition and multiplication, respectively) and the property of commutativity, if we know the answer to one subtraction or division problem (with a remainder of ), we know the answer to another related subtraction or division problem.  Let's explore this with a few examples first (which is always a good idea), and then we can think about what is happening in general.   Consider the subtraction problem . Intuitively, we are taking away from to leave . However, there is no real difference between the ideas of \"taking away\" and \"leaving\". We're simply separating into two groups; one of size and one of size .    11-4 dots    11-7 dots    So and are playing similar roles here. We can see this in the definition of addition: we know since is the number such that . However, we can use the idea of commutativity to swap the and : and thus can be viewed as the number, when added to , to have a sum of . This is the definition of the subtraction problem So we have two related subtraction problems, and .    Now consider the division problem . This means that is the number such that (note there is no remainder here so we don't have to worry about that part of division). Like the previous example, we can use commutativity to swap the and : Thus we can view as the number, when multiplied by , to give you a product of and thus   Here is a picture of the measurement model of division on both related division problems. First :  15 divided by 5 in dots  and now :  15 divided by 3 in dots    Thus we have two related division problems: and .   If we look (somewhat) carefully at the last two examples, we notice that there is nothing special about any of the numbers in the examples; the important part in the first example is splitting the top number of the subtraction into two parts, and in the second example it's grouping our dividend horizontally and vertically (in the area model of division). We can generalize this idea to any numbers being subtracted or divided (in the case of division, with remainder of 0) using the exact logic of above. Let's write these out as theorems below. It's a good idea to try and prove these ourselves before looking at the proof given.    Let . If then .    Let's assume the if-part of the conditional statement is true. Assume that . Using the definition of subtraction, this means that .  We wish to show that . Let's keep that in our mind so that we know where we are working to.  Since we know that , using commutativity of addition we have that . By the definition of subtraction, this means that . Thus we have shown what we wanted to show.    The proof for division is very similar to the subtraction proof. If you have looked at the proof for subtraction, see if you can modify it to be a proof for the division result.    Let . If (with a remainder of ) then .    Let's assume the if-part of the conditional statement is true. Assume that . Using the definition of division, this means that .  We wish to show that . Let's keep that in our mind so that we know where we are working to.  Since we know that , using commutativity of multiplication we have that . By the definition of subtraction, this means that . Thus we have shown what we wanted to show.     The previous theorem had the condition that we had a remainder of . Show that this needs to be the case; that is, find a counterexample to:  \"If , where then \".  Try a few examples with non-zero remainder. Is it true for other remainders besides zero? Compare the size of the remainder to both and . What needs to be true about the remainder for the above conditional statement to be true? Write down a modified conditional statement that is always true. Prove that you are correct.     Multiplication By Zero  Does it have to be the case that multiplication by zero always gives and answer of zero, or is that something we just decided because it works (more specifically, do we need to make an axoim covering multiplication by zero)? In fact, it's somthing that *must* follow from previous properties we've discussed. An important result that can be proved from axioms or previous results is called a theorem . Let's write this as a theorem, and then prove it. We have to be careful here, since we may be tempted to simplify , but we need to put ourselves in the mindset of the first person ever to think about this; we have no idea what it could equal, so we need to solve for it using some properties that we know.     If is a number then     Let be a number and let's consider , which is our unknown expression; this is what we need to solve for. Remember, we *cannot* simplify this. The key to this is trying to come up with a way of finding something equal to and then using some algebra to solve for our unknown expression.  One way of doing this is remembering the multiplicitave identity and additive indentity properties. Let's be very precise here, and make sure we label all of the properties we are using. By the multiplicative identity property we know and by the additive identity property we know . Using substitution of equal expressions we can write . Now using distributivity we can say that . Again, by multiplicitive identity we can simplify this to . Finally ,by arithmetic of equal expressions we can subtract from both sides to have .    Keep in mind what this is saying; if we want 1 to be the multiplicitave identity, 0 to be the additive identity, and the properties of equality and distributivity to hold, it *must* be the case that . So this is a consequence of these properties; if we want to live in a mathematical world where these properties hold, then multiplying by zero *must* give you an answer of zero.     Division By Zero  Why did we have the condition that our divisor ? That is, why can't we divide by ? Let's see if we can show why that's the case.   Let and , so is some whole number. For now, let's assume that there is no condition on the size of the remainder . If does make sense, this means there is some unique quotient and remainder such that . Thus , but can be any number and this will still hold. Since we require that quotients are unique, this does not make sense.     "
},
{
  "id": "subsubsec-OrderOfOperations-3",
  "level": "2",
  "url": "sec-PropertiesOfArithmeticOperations.html#subsubsec-OrderOfOperations-3",
  "type": "Example",
  "number": "2.6.1",
  "title": "",
  "body": " Be careful when you see expressions like . It is a very common error to add the first, which is incorrect as it does not follow our oder of operations. OF course, we should have   "
},
{
  "id": "def-Closure",
  "level": "2",
  "url": "sec-PropertiesOfArithmeticOperations.html#def-Closure",
  "type": "Definition",
  "number": "2.6.2",
  "title": "",
  "body": "  Closure - We say a set is closed under the operation  exactly when it's the case that if then .    Since addition of two whole numbers gives us another whole number, we have that the set is closed under . Similarly, is closed under as well. However, is *not* closed under subtraction, since (as a counterexample to the if-then statement in the definition of closure) . We know that (so the if part of the definition is true) but (so the then part of the definition is false).   "
},
{
  "id": "def-Commutativity",
  "level": "2",
  "url": "sec-PropertiesOfArithmeticOperations.html#def-Commutativity",
  "type": "Definition",
  "number": "2.6.4",
  "title": "",
  "body": "  We say an operation is commutative exactly when it's the case that when then ; that is, (order of performing the operation doesn't matter).    In , addition and multiplication are commutative. For example, and . We can view these pictorally:    4+11 and 11+4 on a number line    3x7 and 7x3 using area model    Let's move to the set so that subtraction is closed and our subtractions make sense. Subtraction is *not* a commutative operation since, as a counterexample, but . Similarly, division in the set is not commutative.   "
},
{
  "id": "def-Associativity",
  "level": "2",
  "url": "sec-PropertiesOfArithmeticOperations.html#def-Associativity",
  "type": "Definition",
  "number": "2.6.6",
  "title": "",
  "body": "  We say an operation is associative exactly when it's the case that when then ; that is, (grouping performing the operation doesn't matter).    In , addition and multiplication are associative. For example, and . We can view these pictorally:    3+7+4 on number line showing associativity    3x2x4 prism showing associativity    Now in subtraction is *not* associative. As a counterexample, we have but .   "
},
{
  "id": "def-AIdentity",
  "level": "2",
  "url": "sec-PropertiesOfArithmeticOperations.html#def-AIdentity",
  "type": "Definition",
  "number": "2.6.8",
  "title": "",
  "body": "  We call 0 the additive identity since for any number .   "
},
{
  "id": "def-MIdentity",
  "level": "2",
  "url": "sec-PropertiesOfArithmeticOperations.html#def-MIdentity",
  "type": "Definition",
  "number": "2.6.9",
  "title": "",
  "body": "  We call 1 the multiplicative identity since for any number .   "
},
{
  "id": "def-AdditiveInverse",
  "level": "2",
  "url": "sec-PropertiesOfArithmeticOperations.html#def-AdditiveInverse",
  "type": "Definition",
  "number": "2.6.10",
  "title": "",
  "body": "  Let be a number. Then is the additive inverse or negative of if and only if .    In the set of integers, is the negative of since . This also means that is the negative of .    However, has no negaive in the set of whole numbers, since there is no such that . So depending on the set you are working with, negatives may or may not exist.   "
},
{
  "id": "def-MultiplicativeInverse",
  "level": "2",
  "url": "sec-PropertiesOfArithmeticOperations.html#def-MultiplicativeInverse",
  "type": "Definition",
  "number": "2.6.13",
  "title": "",
  "body": "  Let be a number. Then is the multiplicative inverse of reciprocal of if and only if .    In the set of rational numbers, or fractions, is the reciprocal of since . This also means that is the reciprocal of .    Note that in any set, does not have a reciprocal, since there is no number such that since we know that for any choice of (of course, we know this fact is true, but we will carefully show *why* it is true later in this section.)   "
},
{
  "id": "def-Distributivity",
  "level": "2",
  "url": "sec-PropertiesOfArithmeticOperations.html#def-Distributivity",
  "type": "Definition",
  "number": "2.6.16",
  "title": "",
  "body": "  Let be numbers. Then we call the property that the distributive property .    The easiest way to view why distributivity holds is via a picture using the array model of multiplication. Consider a chocolate bar that measures blocks vertically and blocks horizontally. In total, the chocolate bar has blocks:    A 6x8 rectangle    Now, let's \"break\" this chocolate bar between the 3rd and 4th horizontal block thus giving us 3 blocks horizontally in the first section and 5 in the second (of course, we still have the same amount of chocolate). So we can view this now as . But we could calculate the number of blocks separately in each of the two sections, and then add them together. Obviously we would still have the same amount of chocolate. So there are blocks of chocolate.    Showing distributivity by braking a 6x8 rectangle into a 6x3 and a 6x5 rectangle.    This idea represents the idea behind distributivity. Note that distrivutivity is *very* important when we start discussing methods for multiplying in a later section.   "
},
{
  "id": "subsec-PropertiesOfArithmetic-17",
  "level": "2",
  "url": "sec-PropertiesOfArithmeticOperations.html#subsec-PropertiesOfArithmetic-17",
  "type": "Example",
  "number": "2.6.18",
  "title": "",
  "body": " Let's look at again. We can break into , and into . Thus we can view as . Viewed as a chocolate bar as in the previous example:    Distributivity of (2+4)x(3+5)    We can now multiply the constituent parts and the add them together to obtain the final answer. Note that we multiply each number in the first bracket by each number in the second. So   .  "
},
{
  "id": "subsec-PropertiesOfArithmetic-18",
  "level": "2",
  "url": "sec-PropertiesOfArithmeticOperations.html#subsec-PropertiesOfArithmetic-18",
  "type": "Example",
  "number": "2.6.19",
  "title": "",
  "body": "There is nothing special about the numbers in the previous example. In fact, we can do this for any numbers. In fact, if are numbers then .   Distributivity of (a+b)x(c+d)    "
},
{
  "id": "subsec-PropertiesOfArithmetic-19",
  "level": "2",
  "url": "sec-PropertiesOfArithmeticOperations.html#subsec-PropertiesOfArithmetic-19",
  "type": "Example",
  "number": "2.6.20",
  "title": "",
  "body": " Let's use the same idea to multiply . We can split each number in terms of its place values: . Using the same idea as the previous examples we can view this as         "
},
{
  "id": "assemblage-Properties-2",
  "level": "2",
  "url": "sec-PropertiesOfArithmeticOperations.html#assemblage-Properties-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mathematical induction property of multiplication by zero "
},
{
  "id": "subsubsec-RelatedSubtractionandDivisionProblems-4",
  "level": "2",
  "url": "sec-PropertiesOfArithmeticOperations.html#subsubsec-RelatedSubtractionandDivisionProblems-4",
  "type": "Example",
  "number": "2.6.21",
  "title": "",
  "body": " Consider the subtraction problem . Intuitively, we are taking away from to leave . However, there is no real difference between the ideas of \"taking away\" and \"leaving\". We're simply separating into two groups; one of size and one of size .    11-4 dots    11-7 dots    So and are playing similar roles here. We can see this in the definition of addition: we know since is the number such that . However, we can use the idea of commutativity to swap the and : and thus can be viewed as the number, when added to , to have a sum of . This is the definition of the subtraction problem So we have two related subtraction problems, and .  "
},
{
  "id": "subsubsec-RelatedSubtractionandDivisionProblems-5",
  "level": "2",
  "url": "sec-PropertiesOfArithmeticOperations.html#subsubsec-RelatedSubtractionandDivisionProblems-5",
  "type": "Example",
  "number": "2.6.22",
  "title": "",
  "body": " Now consider the division problem . This means that is the number such that (note there is no remainder here so we don't have to worry about that part of division). Like the previous example, we can use commutativity to swap the and : Thus we can view as the number, when multiplied by , to give you a product of and thus   Here is a picture of the measurement model of division on both related division problems. First :  15 divided by 5 in dots  and now :  15 divided by 3 in dots    Thus we have two related division problems: and .  "
},
{
  "id": "thm-RelatedSubtraction",
  "level": "2",
  "url": "sec-PropertiesOfArithmeticOperations.html#thm-RelatedSubtraction",
  "type": "Theorem",
  "number": "2.6.23",
  "title": "",
  "body": "  Let . If then .    Let's assume the if-part of the conditional statement is true. Assume that . Using the definition of subtraction, this means that .  We wish to show that . Let's keep that in our mind so that we know where we are working to.  Since we know that , using commutativity of addition we have that . By the definition of subtraction, this means that . Thus we have shown what we wanted to show.   "
},
{
  "id": "thm-RelatedDivision",
  "level": "2",
  "url": "sec-PropertiesOfArithmeticOperations.html#thm-RelatedDivision",
  "type": "Theorem",
  "number": "2.6.24",
  "title": "",
  "body": "  Let . If (with a remainder of ) then .    Let's assume the if-part of the conditional statement is true. Assume that . Using the definition of division, this means that .  We wish to show that . Let's keep that in our mind so that we know where we are working to.  Since we know that , using commutativity of multiplication we have that . By the definition of subtraction, this means that . Thus we have shown what we wanted to show.   "
},
{
  "id": "subsubsec-RelatedSubtractionandDivisionProblems-10",
  "level": "2",
  "url": "sec-PropertiesOfArithmeticOperations.html#subsubsec-RelatedSubtractionandDivisionProblems-10",
  "type": "Checkpoint",
  "number": "2.6.25",
  "title": "",
  "body": " The previous theorem had the condition that we had a remainder of . Show that this needs to be the case; that is, find a counterexample to:  \"If , where then \".  Try a few examples with non-zero remainder. Is it true for other remainders besides zero? Compare the size of the remainder to both and . What needs to be true about the remainder for the above conditional statement to be true? Write down a modified conditional statement that is always true. Prove that you are correct.  "
},
{
  "id": "subsubsec-MultiplicationandDivisionByZero-2",
  "level": "2",
  "url": "sec-PropertiesOfArithmeticOperations.html#subsubsec-MultiplicationandDivisionByZero-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "theorem "
},
{
  "id": "subsubsec-MultiplicationandDivisionByZero-3",
  "level": "2",
  "url": "sec-PropertiesOfArithmeticOperations.html#subsubsec-MultiplicationandDivisionByZero-3",
  "type": "Example",
  "number": "2.6.26",
  "title": "",
  "body": "   If is a number then     Let be a number and let's consider , which is our unknown expression; this is what we need to solve for. Remember, we *cannot* simplify this. The key to this is trying to come up with a way of finding something equal to and then using some algebra to solve for our unknown expression.  One way of doing this is remembering the multiplicitave identity and additive indentity properties. Let's be very precise here, and make sure we label all of the properties we are using. By the multiplicative identity property we know and by the additive identity property we know . Using substitution of equal expressions we can write . Now using distributivity we can say that . Again, by multiplicitive identity we can simplify this to . Finally ,by arithmetic of equal expressions we can subtract from both sides to have .    Keep in mind what this is saying; if we want 1 to be the multiplicitave identity, 0 to be the additive identity, and the properties of equality and distributivity to hold, it *must* be the case that . So this is a consequence of these properties; if we want to live in a mathematical world where these properties hold, then multiplying by zero *must* give you an answer of zero.  "
},
{
  "id": "subsubsec-DivisionByZero-3",
  "level": "2",
  "url": "sec-PropertiesOfArithmeticOperations.html#subsubsec-DivisionByZero-3",
  "type": "Example",
  "number": "2.6.28",
  "title": "",
  "body": " Let and , so is some whole number. For now, let's assume that there is no condition on the size of the remainder . If does make sense, this means there is some unique quotient and remainder such that . Thus , but can be any number and this will still hold. Since we require that quotients are unique, this does not make sense.  "
},
{
  "id": "integers",
  "level": "1",
  "url": "integers.html",
  "type": "Section",
  "number": "2.7",
  "title": "Integers",
  "body": " Integers  Integers are a fundamental concept in mathematics, extending the idea of whole numbers to include negative numbers. An integer can be understood as a solution to the equation for natural numbers . This means that for any natural number , there exists an integer such that when is added to , the result is zero. This concept introduces the idea of negative numbers, allowing us to perform arithmetic operations in a more comprehensive number system.   Integer Addition  Integer addition involves combining positive and negative numbers in various ways. Understanding how to add integers requires us to consider different cases, including adding two positive numbers, two negative numbers, and a positive and a negative number. Visualizing integer addition can be helpful, especially using number lines or counters to represent the values being combined.   Visualizing Integer Addition  Visualizing integer addition can make it easier to understand how different numbers interact. One common method is using a number line, where positive and negative numbers are represented as positions relative to zero. For example, adding a positive number involves moving to the right, while adding a negative number involves moving to the left. Another method is using counters, where positive numbers are represented by one color (e.g., red) and negative numbers by another color (e.g., blue). Combining these counters can help visualize the result of the addition.   How to Add Integers  Adding integers involves different scenarios:  1. **Adding Two Positive Integers**: The sum is always positive. For example, .  2. **Adding Two Negative Integers**: The sum is always negative. For example, .  3. **Adding a Positive Integer and a Negative Integer**: The sign of the sum depends on which absolute value is larger. For example, and . In both cases, we subtract the smaller absolute value from the larger one and take the sign of the number with the larger absolute value.   Example: Integer Addition  Calculate .   We have a negative number and a positive number. Since the absolute value of 7 is greater than 4, we subtract 4 from 7 and take the sign of the larger absolute value.   Therefore, the result is .     Example: Integer Addition Word Problem  Maria had a debt of $15 (represented as -15). She then earned $20 from a part-time job. What is her new financial balance?   To find Maria's new balance, we need to add her debt and her earnings.   Therefore, Maria's new balance is $5.       Properties of Integer Addition  Integer addition possesses several important properties that make it a consistent and reliable operation. These properties include commutativity, associativity, closure, inverses, and the additive identity.   Commutativity  The commutative property states that the order of addition does not affect the sum. In other words, for any integers and . This property is useful because it allows flexibility in the order of operations, simplifying calculations and making mental arithmetic easier.    Associativity  The associative property states that the way in which numbers are grouped in addition does not affect the sum. In mathematical terms, for any integers , , and . This property ensures that when adding multiple integers, the grouping of the numbers can be adjusted to simplify computation.    Closure  The closure property states that the sum of any two integers is always an integer. This means that the set of integers is \"closed\" under addition, and adding any two integers will never result in a number that is not an integer. This property is fundamental to the integrity of the number system, ensuring that operations within the set remain consistent.    Additive Inverse  The additive inverse property states that for every integer , there exists an integer such that . This property is important because it introduces the concept of negation, allowing for the representation of negative numbers and the balancing of equations.    Additive Identity  The additive identity property states that there exists an integer, 0, which, when added to any integer , results in . In other words, . This property highlights the unique role of zero in the number system, serving as the identity element for addition.     Integer Subtraction  Integer subtraction can be viewed as the inverse operation of addition. When subtracting integers, we are essentially adding the additive inverse of the number being subtracted. Understanding integer subtraction involves visualizing the operation and applying the same properties that govern addition.   Visualizing Integer Subtraction  Visualizing integer subtraction can help in understanding how to manipulate positive and negative values. Using a number line is a common method, where moving left represents subtraction. For example, subtracting a positive number involves moving left on the number line, while subtracting a negative number (which is equivalent to adding its positive counterpart) involves moving right. Counters can also be used, where removing positive or negative counters helps visualize the subtraction process.   How to Subtract Integers  Subtracting integers involves converting the subtraction problem into an addition problem by adding the additive inverse:  1. **Subtracting a Positive Integer**: This is equivalent to adding its negative counterpart. For example, .  2. **Subtracting a Negative Integer**: This is equivalent to adding the positive counterpart. For example, .  3. **Subtracting a Positive Integer from a Negative Integer**: This involves adding two negative numbers. For example, .  4. **Subtracting a Negative Integer from a Negative Integer**: This involves adding a positive number to a negative number. For example, .   Example: Integer Subtraction  Calculate .   We have a negative number and we are subtracting a negative number, which is equivalent to adding the positive counterpart.   Therefore, the result is . This example demonstrates how subtracting a negative number effectively turns the operation into addition, simplifying the calculation.     Example: Integer Subtraction Word Problem  Alex owes his friend $8. After repaying $3, how much does he still owe? This problem involves subtracting integers to determine the remaining debt.   To find out how much Alex still owes, we need to subtract the amount repaid from the total debt.   Therefore, Alex still owes $5. This example illustrates how integer subtraction can be used in practical situations to determine remaining balances or debts.       Properties of Integer Subtraction  Integer subtraction, while not possessing all the same properties as addition, is governed by similar principles. These properties include closure and the relationship to the additive inverse, but subtraction does not have commutative or associative properties. Understanding these properties helps clarify the nature of subtraction in the context of integer arithmetic.   Closure  The closure property states that the difference of any two integers is always an integer. This ensures that the set of integers remains consistent and complete under subtraction, much like it does under addition. For instance, subtracting any integer from another will always yield an integer, maintaining the integrity of the number system.    Relationship to Additive Inverse  Subtraction can be understood in terms of adding the additive inverse. For any integers and , the subtraction is equivalent to adding the inverse of to , that is, . This perspective helps in simplifying subtraction problems by converting them into addition problems.       Integer Multiplication  Integer multiplication extends the concept of multiplication to include both positive and negative numbers. Understanding how to multiply integers involves visualizing the operation and applying specific rules for dealing with negative signs. This section will cover these concepts and provide examples to illustrate integer multiplication.   Visualizing Integer Multiplication  Visualizing integer multiplication can help clarify how positive and negative numbers interact. One way to visualize multiplication is using a number line or a grid. For example, multiplying two positive numbers can be seen as repeated addition, while multiplying by a negative number can be interpreted as taking steps in the opposite direction. Using counters or tiles of different colors can also illustrate the multiplication process.    How to Multiply Integers  Multiplying integers involves several cases:  1. **Multiplying Two Positive Integers**: The product is positive. For example, .  2. **Multiplying Two Negative Integers**: The product is positive. For example, . This is because multiplying two negative values results in a positive value.  3. **Multiplying a Positive Integer by a Negative Integer**: The product is negative. For example, . This is because a positive value combined with a negative value results in a negative value.  4. **Multiplying a Negative Integer by a Positive Integer**: The product is negative. For example, . This follows the same rule as above.   Example: Integer Multiplication  Calculate .   We have a negative number multiplied by a positive number, which results in a negative product.   Therefore, the product is .     Example: Integer Multiplication Word Problem  A submarine descends at a rate of 30 meters per minute. What is the depth after 5 minutes?   To find the depth, we need to multiply the rate of descent by the time, keeping in mind that the descent represents a negative value.   Therefore, the submarine is at a depth of 150 meters below the surface after 5 minutes.      Proof:  To prove that , we start with the definition of negative numbers as additive inverses. For any integer , is the number that, when added to , gives zero:   Multiplying both sides of the equation by gives:   Using the distributive property of multiplication over addition, we get:   Since is the additive inverse of , it must be that . Therefore:     Proof:  To prove that , consider the additive inverse definition and the properties of multiplication:  We know that is the additive inverse of , so:   Multiplying both sides of this equation by gives:   Using the distributive property of multiplication over addition, we get:   Simplifying, we know that , so:   Adding 1 to both sides of the equation, we obtain:      Properties of Integer Multiplication  Integer multiplication has several important properties, including commutativity, associativity, distributivity, closure, and the existence of a multiplicative identity.   Commutativity  The commutative property states that the order of multiplication does not affect the product. In other words, for any integers and . This property allows flexibility in the order of operations, simplifying calculations and making multiplication consistent regardless of order.    Associativity  The associative property states that the way in which numbers are grouped in multiplication does not affect the product. Mathematically, for any integers , , and . This property ensures that when multiplying multiple integers, the grouping of the numbers can be adjusted to simplify computation.    Distributivity  The distributive property states that multiplication distributes over addition. For any integers , , and , the following holds true: . This property is essential for simplifying expressions and solving equations that involve both addition and multiplication.    Closure  The closure property states that the product of any two integers is always an integer. This means that the set of integers is \"closed\" under multiplication, ensuring that operations within the set remain consistent and the result is always an integer.    Multiplicative Identity  The multiplicative identity property states that there exists an integer, 1, which, when multiplied by any integer , results in . In other words, . This property highlights the unique role of one in the number system, serving as the identity element for multiplication.     Integer Division  Integer division involves dividing one integer by another, resulting in a quotient and sometimes a remainder. Unlike multiplication, division does not always produce an integer, and understanding how to handle these cases is crucial. This section will cover visualizing integer division and the rules for dividing integers.   Visualizing Integer Division  Visualizing integer division can help clarify the process of dividing positive and negative numbers. One common method is using a number line, where division by a positive number involves dividing the number line into equal parts. Division by a negative number can be interpreted as moving in the opposite direction. Another method is using counters or tiles, where dividing the total number of counters into groups can represent the division process.    How to Divide Integers  Dividing integers involves several scenarios:  1. **Dividing Two Positive Integers**: The quotient is positive. For example, .  2. **Dividing Two Negative Integers**: The quotient is positive. For example, . This is because dividing two negative values results in a positive value.  3. **Dividing a Positive Integer by a Negative Integer**: The quotient is negative. For example, . This is because a positive value divided by a negative value results in a negative value.  4. **Dividing a Negative Integer by a Positive Integer**: The quotient is negative. For example, . This follows the same rule as above.   Example: Integer Division  Calculate .   We have a negative number divided by a positive number, which results in a negative quotient.   Therefore, the quotient is .     Example: Integer Division Word Problem  A company made a loss of $60,000 over 12 months. What was the average monthly loss?   To find the average monthly loss, we need to divide the total loss by the number of months.   Therefore, the average monthly loss was $5000. This example shows how integer division can be used to calculate averages and distribute values evenly across different periods.      "
},
{
  "id": "integer-addition-example-1",
  "level": "2",
  "url": "integers.html#integer-addition-example-1",
  "type": "Example",
  "number": "2.7.1",
  "title": "Example: Integer Addition.",
  "body": " Example: Integer Addition  Calculate .   We have a negative number and a positive number. Since the absolute value of 7 is greater than 4, we subtract 4 from 7 and take the sign of the larger absolute value.   Therefore, the result is .   "
},
{
  "id": "integer-addition-example-2",
  "level": "2",
  "url": "integers.html#integer-addition-example-2",
  "type": "Example",
  "number": "2.7.2",
  "title": "Example: Integer Addition Word Problem.",
  "body": " Example: Integer Addition Word Problem  Maria had a debt of $15 (represented as -15). She then earned $20 from a part-time job. What is her new financial balance?   To find Maria's new balance, we need to add her debt and her earnings.   Therefore, Maria's new balance is $5.   "
},
{
  "id": "integer-subtraction-example-1",
  "level": "2",
  "url": "integers.html#integer-subtraction-example-1",
  "type": "Example",
  "number": "2.7.3",
  "title": "Example: Integer Subtraction.",
  "body": " Example: Integer Subtraction  Calculate .   We have a negative number and we are subtracting a negative number, which is equivalent to adding the positive counterpart.   Therefore, the result is . This example demonstrates how subtracting a negative number effectively turns the operation into addition, simplifying the calculation.   "
},
{
  "id": "integer-subtraction-example-2",
  "level": "2",
  "url": "integers.html#integer-subtraction-example-2",
  "type": "Example",
  "number": "2.7.4",
  "title": "Example: Integer Subtraction Word Problem.",
  "body": " Example: Integer Subtraction Word Problem  Alex owes his friend $8. After repaying $3, how much does he still owe? This problem involves subtracting integers to determine the remaining debt.   To find out how much Alex still owes, we need to subtract the amount repaid from the total debt.   Therefore, Alex still owes $5. This example illustrates how integer subtraction can be used in practical situations to determine remaining balances or debts.   "
},
{
  "id": "integer-multiplication-example-1",
  "level": "2",
  "url": "integers.html#integer-multiplication-example-1",
  "type": "Example",
  "number": "2.7.5",
  "title": "Example: Integer Multiplication.",
  "body": " Example: Integer Multiplication  Calculate .   We have a negative number multiplied by a positive number, which results in a negative product.   Therefore, the product is .   "
},
{
  "id": "integer-multiplication-example-2",
  "level": "2",
  "url": "integers.html#integer-multiplication-example-2",
  "type": "Example",
  "number": "2.7.6",
  "title": "Example: Integer Multiplication Word Problem.",
  "body": " Example: Integer Multiplication Word Problem  A submarine descends at a rate of 30 meters per minute. What is the depth after 5 minutes?   To find the depth, we need to multiply the rate of descent by the time, keeping in mind that the descent represents a negative value.   Therefore, the submarine is at a depth of 150 meters below the surface after 5 minutes.   "
},
{
  "id": "integer-division-example-1",
  "level": "2",
  "url": "integers.html#integer-division-example-1",
  "type": "Example",
  "number": "2.7.7",
  "title": "Example: Integer Division.",
  "body": " Example: Integer Division  Calculate .   We have a negative number divided by a positive number, which results in a negative quotient.   Therefore, the quotient is .   "
},
{
  "id": "integer-division-example-2",
  "level": "2",
  "url": "integers.html#integer-division-example-2",
  "type": "Example",
  "number": "2.7.8",
  "title": "Example: Integer Division Word Problem.",
  "body": " Example: Integer Division Word Problem  A company made a loss of $60,000 over 12 months. What was the average monthly loss?   To find the average monthly loss, we need to divide the total loss by the number of months.   Therefore, the average monthly loss was $5000. This example shows how integer division can be used to calculate averages and distribute values evenly across different periods.   "
},
{
  "id": "sec-AdditionAlgorithms",
  "level": "1",
  "url": "sec-AdditionAlgorithms.html",
  "type": "Section",
  "number": "3.1",
  "title": "Addition Algorithms",
  "body": " Addition Algorithms   The Standard Addition Algorithm  The vast majority of students who learn arithmetic in North America lean to add using the following algorithm. As it's so common, it usually gets named the standard addition algorithm . In short, starting from the smallest place value to the largest (that is, from right to left) we add the place values of our numbers separately, and regroup (or \"carry\") any groups of the next largest place value (so the place value directly to the left) as we go.  We can write this algorithmically (as a series of steps) as follows. Also note that these steps are written in language appropriate for university students, so teachers would have to adapt the wording appropriately for their audience of students:    Write one number below the other so that each place value is in its own column. Now begin at the rightmost column.    Add the digits together (including any regroupings). If the sum is 10 or larger, write a 1 above the column to the left (this signifies that we regrouped 10 of the current place value to one of the place value to the left.)    If there are no non-zero digits in any column to the left, you are done. Otherwise move to the next column to the left and go to Step 2.     Let's add slowly and carefully using this algorithm and visualize it using blocks.  First, let's view the two numbers in terms of blocks:    447 and 629 in blocks    First we add the ones place. Note tha we have ones. We can regroup ten (10) of those to make one of the next place value, that is, one ten. We write that regrouping as a 1 above, and we are still left with 6 ones, so we can write that down:    447 and 629 in blocks adding ones    We now move on to the next place; the tens. We have tens (the additional 1 being the regrouping from the last step). So we have 7 tens. Note that as we're working in our usual base ten, we do not have enough tens to regroup, so we simply write that we have 7 tens.  447 and 629 in blocks adding tens    Now let's move on to the next place; the hundreds. We have hundreds. We can group all ten of those (with 0 left over after regrouping) to make one of the next place value, that is, one thousand. As this is the final place that our numbers contain, we don't need to mark a regrouping and simply write down that we have 1 thousand and 0 hundreds.  Thus we finally have that .    447 and 629 in blocks adding hundreds    If we think about this carefully, the addition algorithm above relies on the properties of associativity and commutativity in addition to place value. We are using these propertie when we add each place value separately and regroup any \"carries\" with the place value to the left. Let's write out what the standard addition algorithm is doing in the example above in a little more detail.            We won't go into as much detail with all algorithms in this section, but note that underpinning all of the algorithms are the arithmetic properties from SECTION REFERENCE  Note that the pictoral\/block representation becomes difficult after thousands (as we run out of dimensions, as discussed above) but the idea behind the algorithm still applies for numbers with any place values.   Add the following numbers using the standard algorithm. Draw blocks as we did above and make sure to note the place values of any regroupings\/carries you do:                    Of course, there is nothing special about base ten; we can add numbers in any base we wish! Let's look at two examples in other bases. Note that we will not have the \"addition facts\" of adding single digits in other bases memorized, so we have to be careful when adding. If needed we can do a little side calculation, or draw a diagram to help us.  Also, so we don't get confused with the language of tens\/hundreds\/thousands\/etc, we refer to the place value to the left of the ones the \"longs\" place, the next one to the left the \"squares\" place, and the next one to the left of that the \"cubes\" place.   Using the standard addition algorithm, let's add The algorithm remains the same, except now we regroup whenever we have seven of one place.    435+43 base 7 in blocks    We start by adding the ones. We have as we regroup seven of the eight ones to get 1 long (made up of seven ones) and 1 one. We write down the one remaining:    435+43 base 7 in blocks adding ones    Now we move on to add the longs place. We have . Thus we regroup seven longs to make one square, adn we have one long left over. We write this down in our working:    435+43 base 7 in blocks adding longs    Finally we add the squares place. We have squares, nothing that the bottom addend has no squares. Thus we write this down:    435+43 base 7 in blocks adding squares    Thus we have that and we have finished.   Let's now work in base twelve. Remember we *do not* regroup when we have ten or eleven of one place, and we use the symbols and to denote these quantities, respectively.   Let's find the sum . First of all, it will be helpful to view these as blocks:    6A3+90B base 12 in blocks    Let's start with the ones place. We have ones (think three + eleven ones is fourteen ones), where we regrouped twelve ones to make 1 long (containing twelve ones) with 2 ones remaining. We \"carry\" our one long, and write down our 2 ones:    6A3+90B base 12 in blocks adding ones    Now we add our longs place. We have longs. Since eleven longs is not enough to regroup in base twelve, we simply write this down.    6A3+90B base 12 in blocks adding longs    Now we add our squares place. We have squares, where twelve squares are regrouped to make one of the next place value (cubes) and we have 3 squares remaining. (Do this calculation on the side to make sure that you understand it). Since we are \"out\" of places in our numbers we simply write this down in our algorithm:    6A3+90B base 12 in blocks adding squares    We have just calculated that and we are finished.    Add the following using pictures\/blocks as a guide if needed. If you do, try to make sure you understand how the blocks correspond to steps in the algorithm:                   For these, do not draw pictures. Add them using only the standard addition algorithm:         (remember you only need two of a place to regroup, and the digit set base two is ).          (you may have to regroup more that one grouping in some places)        Partial Sums  In the standard algorithm, we added our regrouping to the next place value as we went. Instead, we could add each place value separately without dealing with the regroupsing and then the regroupings to each place value as our final step. This is called the partial sum algorithm , as you are finding the sums of each place value (these are the partial sums) and then adding these together to obtain the final answer. Let's take a look at an example, and in fact let's look at the same problem that we did previously with the standard addition algorithm:   Let's add slowly and carefully using partial sums and visualize it using blocks. First we add our ones and find that we have ones, noticing that we can regroup 10 ones into a long.   447+629 in blocks adding ones using partial sums   Then, we add the tens and hundreds separately:   447+629 in blocks adding longs using partial sums  and then . We add this to our calculation above to obtain the final answer.  447+629 in blocks adding squares using partial sums    We note that this is not *that* different to the standard addition algorithm, as the \"carries\" are added at the end rather than as we go.    Same Change Algorithm  Let's now discuss the same change algorithm. To help us illustate the idea (any why it's useful to know) we start with an example. Let's add in our heads. Try doing this now.  I'm sure that most people reading this book did not mentally perform the standard algorithm for this calculation. In fact, I can imagine that many people noticed that 998 was 2 smaller than 1000, so they added 2 to 1000 and, to \"balance\" out, they subtracted 2 from 314. Step 1:  998+314 Same Change  Step 2:  998+314 Same Change adding and subtracting  Step 3:  998+314 changed to 1000+312  Then adding is very easy in your head.  998+314 changed to 1000+312 final result  In fact, you can use this idea to add any two numbers.  In general, we are using the fact that if we know that since we can use associativity and commutativity to rearrange the RHS to . In fact, since this holds for *any* whole numbers we can indeed use this idea to judiciously choose the in the calculation to make our computation easier.  In the first example we chose so that our addition step in each place value was as easy as possible; adding 0 in fact does nothing. Thus, we turned our calculation into   Note that this idea doesn't necessarily make the calculation easier and other than a few cases like the above, where one number is \"close\" to a round number, it's not very useful. However, we bring this up because there is a related algorithm for subtraction that is very useful!    Lattice Algorithm  Another common method is the lattice algorithm. This is very similar to the partial sums algorithm except regroupings are displayed slightly differently. In this algorithm, each place value has a box divided into two diagonally; one section for the place value itself, and one for the next larger place value for the regroupings. This regrouping section looks connected to the diagonal section of the box to the left which contains the same place value. Like partial sums, each place value is then added separately to obtain the final sum. Again, let's look at our usual example. Note that we won't draw the blocks again for this example, as the regrouping is the same as for the other algorthims we've covered:   Let's add . We align our two numbers as usual, and then draw a box for each place value split into two sections by a diagonal line, and just for teaching purposes, we will indicate the place value of each section of each box.    The lattice algorithm setup    We now add each place value separately. Starting with the ones place we add ones, which we regroup into ten and ones. We write this in the leftmost box.    The lattice algorithm adding ones    We continue with the other two places similarly. Note that we do not need to regroup any tens, so we leave the hundreds section of that box blank (or we can put a there). Thus are final partial sum should look like this:    The lattice algorithm adding longs and squares    Finally, we add the box sections diagonally to obtain our final sum of .  The lattice algorithm final answer      Think about the following questions about the algorithms above:    For which algorithms is direction important? Do you need to add right-to-left, or can you add any place values in any order?    Which algorithms are easiest to explain using blocks? Which are most difficult?    Which algorithms are the quickest? Are they the quickest in all cases?    Which algorithms take up the least amount of space on your paper? Which take up the most?    For each algorithm, determine a situation where that algorithm is the best to use. The situation could be adding particular numbers efficiently, or needing to teach addition in the classroom, or some other situation!      "
},
{
  "id": "subsec-TheStandardAdditionAlgorithm-2",
  "level": "2",
  "url": "sec-AdditionAlgorithms.html#subsec-TheStandardAdditionAlgorithm-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard addition algorithm "
},
{
  "id": "subsec-TheStandardAdditionAlgorithm-5",
  "level": "2",
  "url": "sec-AdditionAlgorithms.html#subsec-TheStandardAdditionAlgorithm-5",
  "type": "Example",
  "number": "3.1.1",
  "title": "",
  "body": " Let's add slowly and carefully using this algorithm and visualize it using blocks.  First, let's view the two numbers in terms of blocks:    447 and 629 in blocks    First we add the ones place. Note tha we have ones. We can regroup ten (10) of those to make one of the next place value, that is, one ten. We write that regrouping as a 1 above, and we are still left with 6 ones, so we can write that down:    447 and 629 in blocks adding ones    We now move on to the next place; the tens. We have tens (the additional 1 being the regrouping from the last step). So we have 7 tens. Note that as we're working in our usual base ten, we do not have enough tens to regroup, so we simply write that we have 7 tens.  447 and 629 in blocks adding tens    Now let's move on to the next place; the hundreds. We have hundreds. We can group all ten of those (with 0 left over after regrouping) to make one of the next place value, that is, one thousand. As this is the final place that our numbers contain, we don't need to mark a regrouping and simply write down that we have 1 thousand and 0 hundreds.  Thus we finally have that .    447 and 629 in blocks adding hundreds    If we think about this carefully, the addition algorithm above relies on the properties of associativity and commutativity in addition to place value. We are using these propertie when we add each place value separately and regroup any \"carries\" with the place value to the left. Let's write out what the standard addition algorithm is doing in the example above in a little more detail.           "
},
{
  "id": "subsec-TheStandardAdditionAlgorithm-8",
  "level": "2",
  "url": "sec-AdditionAlgorithms.html#subsec-TheStandardAdditionAlgorithm-8",
  "type": "Checkpoint",
  "number": "3.1.2",
  "title": "",
  "body": " Add the following numbers using the standard algorithm. Draw blocks as we did above and make sure to note the place values of any regroupings\/carries you do:                   "
},
{
  "id": "subsec-TheStandardAdditionAlgorithm-11",
  "level": "2",
  "url": "sec-AdditionAlgorithms.html#subsec-TheStandardAdditionAlgorithm-11",
  "type": "Example",
  "number": "3.1.3",
  "title": "",
  "body": " Using the standard addition algorithm, let's add The algorithm remains the same, except now we regroup whenever we have seven of one place.    435+43 base 7 in blocks    We start by adding the ones. We have as we regroup seven of the eight ones to get 1 long (made up of seven ones) and 1 one. We write down the one remaining:    435+43 base 7 in blocks adding ones    Now we move on to add the longs place. We have . Thus we regroup seven longs to make one square, adn we have one long left over. We write this down in our working:    435+43 base 7 in blocks adding longs    Finally we add the squares place. We have squares, nothing that the bottom addend has no squares. Thus we write this down:    435+43 base 7 in blocks adding squares    Thus we have that and we have finished.  "
},
{
  "id": "subsec-TheStandardAdditionAlgorithm-13",
  "level": "2",
  "url": "sec-AdditionAlgorithms.html#subsec-TheStandardAdditionAlgorithm-13",
  "type": "Example",
  "number": "3.1.4",
  "title": "",
  "body": " Let's find the sum . First of all, it will be helpful to view these as blocks:    6A3+90B base 12 in blocks    Let's start with the ones place. We have ones (think three + eleven ones is fourteen ones), where we regrouped twelve ones to make 1 long (containing twelve ones) with 2 ones remaining. We \"carry\" our one long, and write down our 2 ones:    6A3+90B base 12 in blocks adding ones    Now we add our longs place. We have longs. Since eleven longs is not enough to regroup in base twelve, we simply write this down.    6A3+90B base 12 in blocks adding longs    Now we add our squares place. We have squares, where twelve squares are regrouped to make one of the next place value (cubes) and we have 3 squares remaining. (Do this calculation on the side to make sure that you understand it). Since we are \"out\" of places in our numbers we simply write this down in our algorithm:    6A3+90B base 12 in blocks adding squares    We have just calculated that and we are finished.  "
},
{
  "id": "subsec-TheStandardAdditionAlgorithm-14",
  "level": "2",
  "url": "sec-AdditionAlgorithms.html#subsec-TheStandardAdditionAlgorithm-14",
  "type": "Checkpoint",
  "number": "3.1.5",
  "title": "",
  "body": " Add the following using pictures\/blocks as a guide if needed. If you do, try to make sure you understand how the blocks correspond to steps in the algorithm:                   For these, do not draw pictures. Add them using only the standard addition algorithm:         (remember you only need two of a place to regroup, and the digit set base two is ).          (you may have to regroup more that one grouping in some places)     "
},
{
  "id": "subsec-PartialSums-2",
  "level": "2",
  "url": "sec-AdditionAlgorithms.html#subsec-PartialSums-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "partial sum algorithm "
},
{
  "id": "subsec-PartialSums-3",
  "level": "2",
  "url": "sec-AdditionAlgorithms.html#subsec-PartialSums-3",
  "type": "Example",
  "number": "3.1.6",
  "title": "",
  "body": " Let's add slowly and carefully using partial sums and visualize it using blocks. First we add our ones and find that we have ones, noticing that we can regroup 10 ones into a long.   447+629 in blocks adding ones using partial sums   Then, we add the tens and hundreds separately:   447+629 in blocks adding longs using partial sums  and then . We add this to our calculation above to obtain the final answer.  447+629 in blocks adding squares using partial sums   "
},
{
  "id": "subsec-SameChangeAddition-2",
  "level": "2",
  "url": "sec-AdditionAlgorithms.html#subsec-SameChangeAddition-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "same change "
},
{
  "id": "subsec-LatticeMethodAddition-3",
  "level": "2",
  "url": "sec-AdditionAlgorithms.html#subsec-LatticeMethodAddition-3",
  "type": "Example",
  "number": "3.1.7",
  "title": "",
  "body": " Let's add . We align our two numbers as usual, and then draw a box for each place value split into two sections by a diagonal line, and just for teaching purposes, we will indicate the place value of each section of each box.    The lattice algorithm setup    We now add each place value separately. Starting with the ones place we add ones, which we regroup into ten and ones. We write this in the leftmost box.    The lattice algorithm adding ones    We continue with the other two places similarly. Note that we do not need to regroup any tens, so we leave the hundreds section of that box blank (or we can put a there). Thus are final partial sum should look like this:    The lattice algorithm adding longs and squares    Finally, we add the box sections diagonally to obtain our final sum of .  The lattice algorithm final answer    "
},
{
  "id": "subsec-LatticeMethodAddition-4",
  "level": "2",
  "url": "sec-AdditionAlgorithms.html#subsec-LatticeMethodAddition-4",
  "type": "Checkpoint",
  "number": "3.1.8",
  "title": "",
  "body": " Think about the following questions about the algorithms above:    For which algorithms is direction important? Do you need to add right-to-left, or can you add any place values in any order?    Which algorithms are easiest to explain using blocks? Which are most difficult?    Which algorithms are the quickest? Are they the quickest in all cases?    Which algorithms take up the least amount of space on your paper? Which take up the most?    For each algorithm, determine a situation where that algorithm is the best to use. The situation could be adding particular numbers efficiently, or needing to teach addition in the classroom, or some other situation!    "
},
{
  "id": "sec-SubtractionAlgorithms",
  "level": "1",
  "url": "sec-SubtractionAlgorithms.html",
  "type": "Section",
  "number": "3.2",
  "title": "Subtraction Algorithms",
  "body": " Subtraction Algorithms   In the previous subsection we talked about different algorithms for adding. In some sense, all of the algorithms we talked about were the same, or at least very similar. It turns out that common subtraction algorithms actually differ from each other quite a bit.  First, we'll talk about the \"standard\" algorithm that you most likely learned when doing subtraction, and explain why it works the way it does. Then we'll discuss some more (once very common) algorithms for subtraction that rely on the property that addition is the opposite operation of subtraction. Finally, we will study a partial difference algorithm, much like the partial sum algorithm above.  We'll need some notation to easily talk about subtraction. In the subtraction problem we will call and the top number and botto, number , respectively, and we call the difference . Note that some (mostly antiquated) sources call the top number the subtrahend and the bottom number the minuend. We will avoid this archaic language, as it's rarely seen or used.  Standard Algorithm - Include Block Diagrams For All (reference: An Investigation of Subtraction Algorithms from the 18th and 19th Centuries - Textbooks and Cyphering Books An Investigation of Subtraction Algorithms from the 18th and 19th Centuriesup An Investigation of Subtraction Algorithms from the 18th and 19th Centuries - Definitions and Algorithms Author(s): Nicole M. Wessman-Enzinger (Illinois State University))    Standard Subtraction Algorithm  The idea behind the standard subtraction algorithm is that you subtract place-by-place from right to left, that is smallest to largest place value, and if you are unable to subtract that particular place, \"ungrouping\" or \"borrowing\" one of the places to the left and including those to the right.  Like the standard addition algorithm, let's list the steps for this algorithm too. Note that this is quite complicated compared to addition.    Write one number below the other so that each place value is in its own column. Now begin at the rightmost column.      If the top digit (or digit plus regrouping) is larger than or equal to the bottom digit, subtract and put the difference below in the same column.    If the top digit is smaller than the bottom digit, determine the first digit in the top number to the left of the current place that is non-zero. Decrease that place by 1, (if there are any) change the 0 digits between that digit and our current place to 9s (or whatever the largest digit in your base is, if you are subtracting in a non-ten base), and add 10 to the current top digit.      If there are no non-zero digits in any column to the left, you are done. Otherwise move to the next column to the left and go to Step 2.    To make sure we understand what is happening, we will do an example along with pictoral blocks showing our subtraction.   Let's subtract . We first write the numbers aligned vertically, and view each number in terms of place value blocks:    (for accessibility)    Now let's subtract the rightmost place. Note that the top 2 is smaller than the bottom digit, so we must borrow. The the place directly to the left has a non-zero top digit, so we regroup 1 of this place (tens) to make 10 of our current place (ones) and thus decrease the digit in that place by 1.  (for accessibility)  Now we have ones and we do the subtraction .    (for accessibility)    Now we move to the next place to the left; the tens place. Note that the top digit is now a 4, so it is smaller than the bottom digit 5. So again, we must borrow.  We have a zero immediately to the left of the (what was a 5 but is now a) 4, so we move to the left one more time (to the thousands place) since there is a non-zero digit in the top number there. We borrow one thousand, thus decreasing the thousands digit by 1 and increasing the hundreds by 10.  (for accessibility)  Then we ungroup that into 9 hundreds and 10 tens. In our calculation, this means changing the zero in the hundreds place in the top number to a 9, and the 4 in the tens place to a 14.    (for accessibility)    Now we have 14 tens and we do the subtraction in the tens column . Similarly, the top number in the hundreds and thousands place is smaller so we do those subtractions as well: and respectively.    (for accessibility)    As we have no non-zero digits to the left of the thousands place, we are finished and we know    We can perform the same algorithm in other bases too (remember, there is nothing special about base ten!). Let's try a calculation in base four:   Let's calculate and since we are still getting used to arithmetic in other bases, let's draw some base four blocks to represent our calculation.  INSERT PIC OF THE STANDARD SETUP AND BLOCKS REPRESENTING THE SITUATION  We start from the ones digit on the right. Since the top digit is smaller than the bottom digit, we must borrow. The first non-zero digit to the left is the 2 (in the squares, or sixteens, place). We ungroup sixteen (square) to fours (longs) and ones (remember that represents the number \"four\"). We can see this since , similar to our situation in the previous example in base ten. Thus we decrease the squares digit in the top number by 1 and replace the 0 in the longs place by a 3, and thus we have ones (which, in base four, is five ones).  INSERT PIC OF THIS  Now, we can do the subtraction in the ones place , since we can see that . We can subtract the longs digit as well: . We write these down in our calculation.  INSERT PIC OF THIS  Now, in the squares place, the digit 1 in the top number is smaller than the 3 in the bottom number, so we need to borrow again. We ungroup cube (or sixty-four) to squares, decreasing our 2 cubes to 1 cube.  INSERT PIC OF THIS  Thus we now have squares and can now do our subtraction . We can also do the subtraction in the cubes place: . We now have our final difference: .  INSERT PIC OF THIS    Perform the following subtractions in the indicated bases. Check your answer with addition:                                               Partial Differences  Similar to partial sums, we can find the partial differences of each place value, and then combine these partial differences at the end to obtain our final difference. Note that this method involves being comfortable with negative numbers, and therefore integer operations.   Let's subtract again. Like before, we line up the numbers vertically by place value. In terms of blocks, we can view each place as a separate subtraction calculation with blocks of the same place value.  INCLUDE PIC HERE  Order isn't important in this algorithm, so let's start from left and go right. Subtracting the thousands place, we know that . We write this partial difference in our calculation.  INCLUDE PIC HERE  Now, for the hundreds place, we have (note that writing 0 as is to remind you that we have hundreds.) So we mark down in our calculation. Similarly, we have and . We write these down in our calculation as well.  INCLUDE PIC HERE  So we must combine our partial differences to obtain the difference we are looking for. We have . Working from left to right we obtain.    And we have our final answer.  INCLUDE PIC HERE     Same Change Algorithm  This algorithm relies on two important concepts:    Addition is easier than subtraction    For any number     For any numbers     The final concept says that if you add a quantity to the top number of a subtraction problem, you can add that quantity to the bottom number and not change the difference.  We will call a digit the same-change opposite digit of another digit if and only if . We will shorten this to opposite digit if there would be no confusion. For example, the opposite digit of is since . Also note that is its own opposite digit, since . Note that this definition is applicable for other bases beside base ten too!  The algorithm is as follows.    Write the subtraction vertically (as usual) with place values aligned in columns. Start at the rightmost column.    If the top digit in this place is less than the bottom digit, add the opposite digit number of places of the bottom digit to both numbers to make a new equivalent subtraction problem (this makes the bottom digit a 0, for easy subtraction). If the top digit in this place is not less than the bottom digit, do nothing.    If there are non-zero digits in any place to the left of this place, move to the left one place and go to step 2. Otherwise, go to the next step.    Each top digit should be greater than or equal to the bottom digit in its respective place. Subtract the digits in each place to obtain your final answer.    This sounds more complicated than it actually is, so we will show an example to see this algorithm in action.   Let's subtract using the same change algorithm. We line up the two numbers as usual (and we'll keep block representations along with our calculation to see the process in a pictoral way)  INSERT PIC HERE  Starting at the ones place, we notice that the top digit is smaller than the bottom digit, we add 3 to both the top and bottom numbers ( ) to obtain the new subtraction problem . Notice that the bottom digit is now 0, so this will eventually make subtraction easy (at the cost of doing a bit of addition)  INSERT PIC HERE INCLUDING NEW SUBTRACTION PROBLEM  Now we move left to the tens place. As before, we notice that the top digit is less than the bottom digit, so add the opposite digit number of tens to both numbers. Since the opposite of is we add to both numbers ( ) to make the new subtraction problem   INSERT PIC OF THIS  Moving to the hundreds place, since the top digit is less than the bottom digit, we add the opposite number of hundreds, that is , to both numbers to obtain the new subtraction problem .  Moving left to the thousands place, we notice that the top digit is greater than or equal to (in this case, greater than) the bottom digit, so we do nothing. Also, there are no non-zero digits in any places to our left (thousands is the largest place in our numbers) so we can now easily subtract place by place to obtain our final answer   INSERT PIC OF THIS     Equal Additions Algorithm  This algorithm is, in some sense, a combination between the standard subtraction algorithm and the same change algorithm. This is a \"borrowing\" algorithm, though instead of borrowing from the place to the left in the top number, we are \"in debt\" to the place to the left in the bottom number. Let's write down the algorithm and then do our usual example.    Write the subtraction vertically (as usual) with place values aligned in columns. Start at the rightmost column.    If the digit in the top number is less than the digit in the bottom number (including additional ones if one is there), add ten of that place to the top digit (signified by a 1) while adding an additional 1 to the place to the left in the bottom number. Then subtract the bottom number from the top number in that place. If the digit in the top number is greater than the digit in the bottom number, do the place subtraction without any borrowing.    If there are any non-zero digits in any places to the left of the current place, move one place to the left and go to step 2. Otherwise you are finished.     Let's subtract using the equal addition algorithm. As usual we line up our numbers so digits of the same place value are in the same column, but this time we will have just a little bit of space between the bottom number and our difference (for any borrowed 1's that will appear). And, as usual, we will include blocks for added pictoral understanding.  INSERT PIC HERE  Starting with the ones place, we see that the digit in the top number is less than the digit in the bottom. So we \"borrow\" 10 ones, but unlike the standard subtraction algorithm we are \"in debt\" 1 ten to the bottom number. Thus, we have ones in our difference. We mark this, and our additional debt of 1 ten, in our calculation:  INSERT PIC HERE  Now we move to the tens place. We see that the in the top number is less than the in the bottom number, so we \"borrow\" 10 tens from 1 hundred in the same way as the previous step to have tens in our difference. We mark this, and our additional debt of 1 hundred, in our calculation:  INCLUDE PIC HERE  Now we move to the hundreds place. We see that the in the top number is less than the in the bottom number, so we \"borrow\" 10 hundreds from 1 thousand in the same way as our previous two steps to have hundreds in our difference. We mark this, and our additional debt of 1 thousand, in our calculation:  INCLUDE PIC HERE  Finally we move to the thousands place. We see that in the top number is greater than the in the bottom number, so we subtract without borrowing: and write this in our answer. As there are no more non-zero digits to the left (that is; no larger places than thousands in our numbers,) we are finished, and we have calculated   INSERT PIC OF THIS    Try to use the same change and equal additions algorithms to do subtraction in other bases by redo-ing the calculations in Exercise    Discussion of pros-cons of each and relationships. NEED TO DO THIS!!!   "
},
{
  "id": "sec-SubtractionAlgorithms-2-3",
  "level": "2",
  "url": "sec-SubtractionAlgorithms.html#sec-SubtractionAlgorithms-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "top number botto, number difference "
},
{
  "id": "subsec-StandardSubtractionAlgorithm-6",
  "level": "2",
  "url": "sec-SubtractionAlgorithms.html#subsec-StandardSubtractionAlgorithm-6",
  "type": "Example",
  "number": "3.2.1",
  "title": "",
  "body": " Let's subtract . We first write the numbers aligned vertically, and view each number in terms of place value blocks:    (for accessibility)    Now let's subtract the rightmost place. Note that the top 2 is smaller than the bottom digit, so we must borrow. The the place directly to the left has a non-zero top digit, so we regroup 1 of this place (tens) to make 10 of our current place (ones) and thus decrease the digit in that place by 1.  (for accessibility)  Now we have ones and we do the subtraction .    (for accessibility)    Now we move to the next place to the left; the tens place. Note that the top digit is now a 4, so it is smaller than the bottom digit 5. So again, we must borrow.  We have a zero immediately to the left of the (what was a 5 but is now a) 4, so we move to the left one more time (to the thousands place) since there is a non-zero digit in the top number there. We borrow one thousand, thus decreasing the thousands digit by 1 and increasing the hundreds by 10.  (for accessibility)  Then we ungroup that into 9 hundreds and 10 tens. In our calculation, this means changing the zero in the hundreds place in the top number to a 9, and the 4 in the tens place to a 14.    (for accessibility)    Now we have 14 tens and we do the subtraction in the tens column . Similarly, the top number in the hundreds and thousands place is smaller so we do those subtractions as well: and respectively.    (for accessibility)    As we have no non-zero digits to the left of the thousands place, we are finished and we know   "
},
{
  "id": "subsec-StandardSubtractionAlgorithm-8",
  "level": "2",
  "url": "sec-SubtractionAlgorithms.html#subsec-StandardSubtractionAlgorithm-8",
  "type": "Example",
  "number": "3.2.2",
  "title": "",
  "body": " Let's calculate and since we are still getting used to arithmetic in other bases, let's draw some base four blocks to represent our calculation.  INSERT PIC OF THE STANDARD SETUP AND BLOCKS REPRESENTING THE SITUATION  We start from the ones digit on the right. Since the top digit is smaller than the bottom digit, we must borrow. The first non-zero digit to the left is the 2 (in the squares, or sixteens, place). We ungroup sixteen (square) to fours (longs) and ones (remember that represents the number \"four\"). We can see this since , similar to our situation in the previous example in base ten. Thus we decrease the squares digit in the top number by 1 and replace the 0 in the longs place by a 3, and thus we have ones (which, in base four, is five ones).  INSERT PIC OF THIS  Now, we can do the subtraction in the ones place , since we can see that . We can subtract the longs digit as well: . We write these down in our calculation.  INSERT PIC OF THIS  Now, in the squares place, the digit 1 in the top number is smaller than the 3 in the bottom number, so we need to borrow again. We ungroup cube (or sixty-four) to squares, decreasing our 2 cubes to 1 cube.  INSERT PIC OF THIS  Thus we now have squares and can now do our subtraction . We can also do the subtraction in the cubes place: . We now have our final difference: .  INSERT PIC OF THIS  "
},
{
  "id": "exercise-SubtractionDifferentBases",
  "level": "2",
  "url": "sec-SubtractionAlgorithms.html#exercise-SubtractionDifferentBases",
  "type": "Checkpoint",
  "number": "3.2.3",
  "title": "",
  "body": " Perform the following subtractions in the indicated bases. Check your answer with addition:                                            "
},
{
  "id": "subsec-PartialDifferences-3",
  "level": "2",
  "url": "sec-SubtractionAlgorithms.html#subsec-PartialDifferences-3",
  "type": "Example",
  "number": "3.2.4",
  "title": "",
  "body": " Let's subtract again. Like before, we line up the numbers vertically by place value. In terms of blocks, we can view each place as a separate subtraction calculation with blocks of the same place value.  INCLUDE PIC HERE  Order isn't important in this algorithm, so let's start from left and go right. Subtracting the thousands place, we know that . We write this partial difference in our calculation.  INCLUDE PIC HERE  Now, for the hundreds place, we have (note that writing 0 as is to remind you that we have hundreds.) So we mark down in our calculation. Similarly, we have and . We write these down in our calculation as well.  INCLUDE PIC HERE  So we must combine our partial differences to obtain the difference we are looking for. We have . Working from left to right we obtain.    And we have our final answer.  INCLUDE PIC HERE  "
},
{
  "id": "subsec-SameChangeAlgorithm-5",
  "level": "2",
  "url": "sec-SubtractionAlgorithms.html#subsec-SameChangeAlgorithm-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "same-change opposite digit opposite digit "
},
{
  "id": "subsec-SameChangeAlgorithm-9",
  "level": "2",
  "url": "sec-SubtractionAlgorithms.html#subsec-SameChangeAlgorithm-9",
  "type": "Example",
  "number": "3.2.5",
  "title": "",
  "body": " Let's subtract using the same change algorithm. We line up the two numbers as usual (and we'll keep block representations along with our calculation to see the process in a pictoral way)  INSERT PIC HERE  Starting at the ones place, we notice that the top digit is smaller than the bottom digit, we add 3 to both the top and bottom numbers ( ) to obtain the new subtraction problem . Notice that the bottom digit is now 0, so this will eventually make subtraction easy (at the cost of doing a bit of addition)  INSERT PIC HERE INCLUDING NEW SUBTRACTION PROBLEM  Now we move left to the tens place. As before, we notice that the top digit is less than the bottom digit, so add the opposite digit number of tens to both numbers. Since the opposite of is we add to both numbers ( ) to make the new subtraction problem   INSERT PIC OF THIS  Moving to the hundreds place, since the top digit is less than the bottom digit, we add the opposite number of hundreds, that is , to both numbers to obtain the new subtraction problem .  Moving left to the thousands place, we notice that the top digit is greater than or equal to (in this case, greater than) the bottom digit, so we do nothing. Also, there are no non-zero digits in any places to our left (thousands is the largest place in our numbers) so we can now easily subtract place by place to obtain our final answer   INSERT PIC OF THIS  "
},
{
  "id": "subsec-EqualAdditionsAlgorithm-4",
  "level": "2",
  "url": "sec-SubtractionAlgorithms.html#subsec-EqualAdditionsAlgorithm-4",
  "type": "Example",
  "number": "3.2.6",
  "title": "",
  "body": " Let's subtract using the equal addition algorithm. As usual we line up our numbers so digits of the same place value are in the same column, but this time we will have just a little bit of space between the bottom number and our difference (for any borrowed 1's that will appear). And, as usual, we will include blocks for added pictoral understanding.  INSERT PIC HERE  Starting with the ones place, we see that the digit in the top number is less than the digit in the bottom. So we \"borrow\" 10 ones, but unlike the standard subtraction algorithm we are \"in debt\" 1 ten to the bottom number. Thus, we have ones in our difference. We mark this, and our additional debt of 1 ten, in our calculation:  INSERT PIC HERE  Now we move to the tens place. We see that the in the top number is less than the in the bottom number, so we \"borrow\" 10 tens from 1 hundred in the same way as the previous step to have tens in our difference. We mark this, and our additional debt of 1 hundred, in our calculation:  INCLUDE PIC HERE  Now we move to the hundreds place. We see that the in the top number is less than the in the bottom number, so we \"borrow\" 10 hundreds from 1 thousand in the same way as our previous two steps to have hundreds in our difference. We mark this, and our additional debt of 1 thousand, in our calculation:  INCLUDE PIC HERE  Finally we move to the thousands place. We see that in the top number is greater than the in the bottom number, so we subtract without borrowing: and write this in our answer. As there are no more non-zero digits to the left (that is; no larger places than thousands in our numbers,) we are finished, and we have calculated   INSERT PIC OF THIS  "
},
{
  "id": "subsec-EqualAdditionsAlgorithm-5",
  "level": "2",
  "url": "sec-SubtractionAlgorithms.html#subsec-EqualAdditionsAlgorithm-5",
  "type": "Checkpoint",
  "number": "3.2.7",
  "title": "",
  "body": " Try to use the same change and equal additions algorithms to do subtraction in other bases by redo-ing the calculations in Exercise   "
},
{
  "id": "sec-MultiplicationAlgorithms",
  "level": "1",
  "url": "sec-MultiplicationAlgorithms.html",
  "type": "Section",
  "number": "3.3",
  "title": "Multiplication Algorithms",
  "body": " Multiplication Algorithms   The way we multiply by hand is intrinsically based on both the ideas of place value, and the property of distributivity. In all of the following algorithms, both ideas will be important. Before we begin talking about how to multiply, we need to know how to do two things well; multiply powers of ten together, and how to multiply two single digits together. The first of these is very easy. The second is easy too, but there are a lot of different cases.    Multiplication Preliminaries  Thinking about place values as powers of ten, we can use our expoent rules to help us here. First of all, we can think of powers of ten, say , as \"a 1 followed by zeroes\". So, for example, .  Using our exponent rules we know . For example, . Or, written as numbers, .  Moving on to multiplying single digits together, we *could* calculate these using, for example, the repeated addition model of multiplication every time, but single digit multiplication comes up so often its much better to know these off the top of our heads. It is indeed worth memorizing all single digit multiplications if you haven't yet.    Base Ten Multiplication Table    We can put the previous two ideas together to multiply numbers like using associativity and commutativity of multiplication:       Multiply the following single digit multiples of powers of ten:                                     Partial Products  All of our algorithms for multiplication rely heavily on place value and distributivity. For the partial products algorithm we calculate a product of two whole numbers by doing the following:    Write (or at least view in your head) both numbers in expanded form. Usually, this is done by writing the numbers so that the same place values are in the same column.    Multiply each single digit multiple of powers of ten in the first number by each single digit multiple of powers of ten in the second number. For each calculation, write down this partial product, lining it up according to place value with the other partial products.    Sum all partial products together (using, for example, the standard addition algorithm) to find the final product of the two numbers.    Let's do an example. Along with this example, we will include both an algebraic and pictoral representation , using the area model of multiplication, of the process.   Let's multiply . First, we write the numbers lined up by place value, but we are thinking of these numbers in expanded form: Pictorally, we can view this as breaking up a rectangle with side lengths and units into sub rectangles where the side lengths are the terms in each expanded form.  INSERT PIC OF THIS  Now, using distributivity, we calculate each partial product: since there are 3 terms in the first expanded form and 3 in the second, we will have partial products to calculate. We can start anywhere we like, but usually one starts by multiplying the bottom ones place by every place in the top number. Then, working right to left, we multiply the tens place by every place in the top number.  INSERT PIC HERE  Algebraically, we can view this in the following way. Note that the order the terms will be first the \"natual\" order that one would do using distributivity, and then reordered (in fact reversed, as it's usual to perform the algorithm from right to left and bottom to top) to match the partial products algorithm:      Pictorally, we can view this as \"sub-areas\" of each rectangle:  INSERT PIC HERE  Finally, we sum the partial products together to get our final product. We'll do this using the standard addition algorithm. Pictorally, we are adding all sub-areas together, and algebraically we are simply adding:   INSERT PIC HERE   Note that some people consider the pictoral representation of the partial products method its own algorithm as well. It's sometimes called the grid method.     Standard Multiplication Algorithm  The standard multiplication algorithm is, very likely, the method that you would have been taught how to multiply numbers in elementary school. It is very related to the partial products algorithm. The main difference is that we only expand one of our numbers, our \"bottom number\", into expanded form. For example, we would think of the multiplication as . We can view this in our area model as only subdividing our rectangle in one direction:  INSERT PIC OF THIS  Note that since multiplication is commutative, we know that . However, the calculation will be different since we would be subdividing our rectangle in \"the other direction\" when we think of . Indeed, we could use this as a \"check\" to make sure that we did the calculation correctly; both products should, of course, be the same : INSERT PIC OF THIS  Of course, multiplying a non-single-digit number (like ) by a single digit number isn't as easy as multiplying two single digit numbers together. We will still multiply place by place, but instead of writing down each individual place multiplication calculation, we will do them all at once, and keep track of any regroupings by \"carries\" above the digits in our top number.  The algorithm for the standard algorithm is as follows:    Write (or at least view in your head) one of the numbers in expanded form. Usually, this is done by writing the numbers so that the same place values are in the same column so that the expanded number is the bottom number. Start with the right-most digit in the bottom number.    Starting from the right, write the number of zeroes associated to the place value of the current digit in the bottom number that you're working with in the row below the previous one you've calculated, if any exist.    Working from right to left, multiply the bottom digit by each digit in the top number, adding any regroupings from the previous multiplication if they exist. If the product is greater than 9, regroup the tens to the next place value by writing the number of tens over the digit to the left in the top number. Write down the ones digit of your calculation to the left of the previous digit you have written, if any exist.    Once there are no more non-zero digits to the left in the top number, if there are non-zero digits to the left of your current digit in the bottom number, move one digit to the left in the bottom number and return to Step 2. If there are no non-zero numbers to the left, move on to the next step.    Sum all partial products together (using, for example, the standard addition algorithm) to find the final product of the two numbers.    As usual, we compute the same example so we can see the commonalities and diffrences between algorithms. Also, we will have a pictoral representation alongside our calculation.   Let's multiply . First, we write the numbers lined up by place value, but we are thinking of the bottom number in expanded form: Pictorally, we can view this as breaking up a rectangle with side lengths and units into sub rectangles where the side length of are the terms in the expanded form.  INCLUDE PICTURE HERE  We start at the right hand side of the bottom number, with our aim being to calculate . Since that digit is in the ones place, we do not write down any zeroes yet. We multiply it by each digit in the top number and add any regroupings to the next place: so we write down the and \"carry\" the to the tens place.  INSERT PIC HERE  Next, we multiply the our ones digit by the tens place, and add the regrouping: . We write down the to the left of the and carry the other three to the hundreds place.  INSERT PIC HERE  Now, we multiply the hundreds place: . As there is no (non-zero) digit to the left, we write both digits down to the left of the . Thus we have calculated   INSERT PIC HERE  Now we move to the tens digit of the bottom number. Our aim is now to calculate . Since the is in the tens place, we first write a in the right-most spot (we know that so this signifies that we have taken out a factor of .)  We start with . So we write down the and \"carry\" the to the next place value. Note that this actually signifies hundreds since we are really calculating . Similar to the first digit of the bottom number, we have and . Thus we have calculated   INSERT PIC HERE  Now that we are out of non-zero digits in the bottom number, we simply add the two partial products we have calculated:   INSERT PIC HERE  Note that our first partial sum is the same as the in the partial sum algorithm, and similarly . We can see this relationship in the diagram too  INSERT PIC HERE     Multiplication In Base Twelve  Look closely at the algorithms for multiplication. Is there anything about the steps in the algorithm that are applicable to only base ten? You should see that this isn't the case. Since the ideas of an expanded form and distributivity occur in any base, we can use these algorithms to multiply in any base we like.  Just like addition and subtraction, there is nothing special about base ten that allows these multiplication algorithms to work. In base multiplication by powers of behaves the same way as in base ten. Also, we have the same notion of expanded form in any base we choose. The only thing that is different is our knowledge of multiplication of single digits. Just as in base ten, we could make a \"times table\" for each base. However, in the interest of time and space, we will only work in one base; base twelve. Multiplying in other bases would work the same, except for the multiplication table for single digit numbers, of course.  A quick reminder that in base twelve, we ony regroup when we have twleve of one place. We represent ten of a place by the symbol and eleven of a place by the symbol . Also, note that in this section we will assume all calculations are in base twelve, even if we do not note the base for each number; that is, for example, we'll write to mean .  First, it makes sense to develop a multiplication table for base twelve. The most straightforward way is using repeated addition for multiplication. Let's do one row\/column, the 5's, to illustrate the process. Here is a blank times table for every digit in base twelve; you can copy and fill in yourself:  INSERT BLANK TIMES TABLE  By the property of multiplicative identity, we know that and we know that , since we have ten ones (not enough to regoup). We can determine by adding to . Thus we have . We can input these into our times table in both the 5 row and 5 column since multiplication is commutative: for any number .  INSERT PIC HERE  We can continue in the same way, using our skills for addition in base twelve, to finish the rest of the \" times table\":  INSERT PIC HERE  We can use the same idea for every other digit in base twelve to complete our entire multiplication table in base twelve for single digits. We'll leave this as an exerise:   Complete the entire multiplication table in base twelve for single digits.   INSERT PIC HERE    Now that we have our times table in base twelve, we can easily multiply any two numbers in base twelve that we want. Let's do an example using the standard algorithm, though you could use the partial products algorithm (or any other algorithm) as well.   Let's calculate using the standard algorithm. Let's write the numbers aligned vertically by place value first:  INSERT PIC OF THIS  Starting with the in the ones place of the bottom number, we look at our times table to determine that so we write down the and \"carry\" the . Now moving to the next place in the top number, . We write this down and we do not need to regroup. Next, so we write down the and carry the . Finally, . Thus .  INCLUDE PIC OF THIS  Now we move on to the longs place (that is, the twelves place). We put a in the rightmost entry of that row and we multiply. For this partial sum we will not be as explicit with the calculation as the previous one. We have that , , , and . Thus, .  INSERT PIC OF THIS  Next, we move on to the squares place (that is, the one-hundred-forty-fours place, or \"twelve squared place\"). We put a in the two rightmost entries of that row and we multiply. Using a similar method to above we get that . You should check that you obtain the same answer as this!  INSERT PIC OF THIS  Finally, we sum all of our partial products. We have that .  INSERT PIC OF THIS   As you can see, the idea is the exact same as in base ten, and we simply have to remember that we are operating in a different base.    Russian Multiplication  The two algorithms we have learned so far are quite similar to each other. However, there are other algorithms that look quite a bit different to the ones that we have used. Let's talk about one of these, sometimes called Russian multiplication or Ethiopian multiplication . It relies on the fact that multiplication by two and division by two are inverse operations; more exactly, . First we will describe the algorithm, then do an example, and then talk about why this algorithm works.  The algorithm for Russian multiplication is as follows:    Write down both numbers side by side, with plenty of space below. Usually, the smaller of the two numbers is written on the left, but it doesn't have to be. Note that this counts as a \"row\" in the algorithm below.    Take the left number and divide it by two. If the result is not a whole number, round down to the nearest whole number. Write this number below the left number.    Take the right number and multiply it by two. Write this number below the right number.    If the number on the left is 1, go to the next step. Else, go to Step 2.    Cross out all rows where the left number is even.    Sum the right number of all remaining rows. This sum is the product of the two numbers that you started with.    If you haven't seen this algorithm before, it may look a lot different than what you're used to. Let's do an example to make sure we understand it. We'll use the same compuatation as the other algorithms.   Let's multiply . Since is the smaller number, we will write this on the left.  INSERT PIC OF THIS  Now, we divide the left number by two. Since , we round down to and write this number below the left number. Also, we multiply the right number by two and write this below the right number.  INSERT PIC OF THIS  We continue this process until we get to 1 on the left side. Note that so we round down to   INSERT PIC OF THIS  Now, we cross out all rows that contain an even number on the left. That are the rows with the left number being and . This leaves the rows with the left number being and .  INSERT PIC OF THIS  We now sum the right numbers of the remaining rows:    Maybe surprisingly, we did get the product we expected, but using a calculation that is quite a bit different! Let's now explore why this algorithm works. We will lead you through the exploration below. You definitely should try this exercise before looking at the solutions!     As a warmup, draw some dots or an area diagram to convince yourself of the fact that . Start with and , and then do a few other examples (for now, pick even numbers for ). What equivalent multiplication problem have you converted to? Explain why both diagrams have the same numer of dots\/same area.    Now, complete the Russian algorithm with the problem . Draw a diagram for each step, and note that the only row with an odd left number is the last row. Cases where the left number is a power of are the \"easiest\" cases to think about.    Now, let's try the calculation . In the second row, our left number is since and we rounded down. Draw a diagram for both rows and describe how much is \"missing\" from the first row to the next. How does this relate to the calculation ? Where is that number appear in your algorithm?    Describe what is happening in general when you round down on the left hand side. When you round down, how can you keep track of that \"missing\" area in your calculation?     For you should have a similar diagram to this:  INSERT PIC HERE  One way of viewing this is that we are splitting our diagram in half and then adding the bottom half to the left hand side, thus turning this into the equivalent problem .    You should have the following calculation and diagram:  INSERT PIC HERE  In this case, we have converted the calculation to the equivalent calculations , , and . So     Let's look at what changes from to the next line . If we didn't round down we would have When we round down we are deleting area from our rectangle. We have , or equivalently less area than in the line above. And indeed, the amount of area we are deleting is the right-hand number of the line above. So we need to account for this missing area by adding it back in at the end.  INSERT PIC DESCRIBING MISSING AREA  After this line, the calculation is the same as . So we have the product being the right hand number of the final line plus the \"missing\" area, which is accounted for in the right hand number of the line . Thus     In general, any time we round down, we're missing area equal to the right hand number of the line above. And since every time we rounded down we had an odd number on the left hand side above, we add the right hand number of those lines.     Notes for Additional Understanding  Really, this algorithm relies on writing the left hand number in base two and then multiplying each place by the right hand number. Since , we could have viewed the calculation as (ignoring multiples of zero) Note the use of distributivity here too. So you can look at the Russian algorithm as like the standard algorithm, but instead in base two.     Pros And Cons Of Multiplication Algorithms  We just discussed four different methods for multiplying. Which one is better? Is one always better? In the author's opinion, there are pros and cons with each algorithm. We will discuss some of these now.   PartialProductsAlgorithm  Pros:    The idea of distribution of place value is very clear.  Each multiplication step is one straightforward calculation that will only invlove multiplication of powers of ten and multiplication of single digit numbers.    We can use this algorithm to help students think about any distributive multiplication (like multiplying two polynomials, for example).    Cons:    There could be a lot of partial products to sum. Indeed, if the first number has digits and the second digits, then we need to sum numbers.    This algorithm takes up a significant amount of space on the page, especially if you have numbers with many digits.      Grid Method  Pros:    The distribution process over place value is highly visual. It is very apparent why the algorithm works the way it does.    Each multiplication step is one straightforward calculation that will only invlove multiplication of powers of ten and multiplication of single digit numbers.    We can use this algorithm to help students think about any distributive multiplication (like multiplying two polynomials, for example).    Cons:    The algorithm takes up a lot of space on the page, especially for numbers with many digits.    There is no part of the page set aside to sum the partial products together, so it takes up even *more* room.    Usually, the sub rectangles aren't sized to scale, and thus it might confuse students about the size of place values.      Standard Multiplication Algorithm  Pros:    Doesn't take up a lot of space. In fact, if the bottom number has digits, it only requires rows for the partial sums (and an additional rows above for the \"carries\".)    There is less adding than in the partial products and grid method algorithms.    It's the method that is most commonly known in North America, so it is easier to get help with this algorithm.    Cons:    Each row of the algorithm is a fairly complex multiplication, invloving carrying over to the next place value.    The idea of place value isn't as obvious in the top number, thus losing somet of the idea of distributivity in the calculation.    The algorithm isn't easily adaptable to multiplying other objects (like polynomials)      Russian Multiplication Algorithm  Pros:    Relies on only being able to multiply and divide by one number (that is, of course, 2)    The number of rows is quite small (indeed it's the number of digits in the base two representation of the left number.)    The number of additions is even smaller, as we sum only some of the rows.    Cons:    It's not a well known algorithm, so it will be hard for a student to get help with it    The idea of place value and distributivity is quite buried in the algorithm.    It cannot be used to multiply other objects (like polynomials)    The number of rows to add together changes based on the base two representation, which isn't obvious at forst glance. For example, if is the left number, you would need to add two numbers. However, if is the left number, you would need to add seven numbers.     For each of the algorithms, list some other pros and cons for using them.     "
},
{
  "id": "subsec-MultiplicationPreliminaries-11",
  "level": "2",
  "url": "sec-MultiplicationAlgorithms.html#subsec-MultiplicationPreliminaries-11",
  "type": "Checkpoint",
  "number": "3.3.1",
  "title": "",
  "body": " Multiply the following single digit multiples of powers of ten:                                  "
},
{
  "id": "subsec-PartialProducts-2",
  "level": "2",
  "url": "sec-MultiplicationAlgorithms.html#subsec-PartialProducts-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "partial products algorithm "
},
{
  "id": "subsec-PartialProducts-5",
  "level": "2",
  "url": "sec-MultiplicationAlgorithms.html#subsec-PartialProducts-5",
  "type": "Example",
  "number": "3.3.2",
  "title": "",
  "body": " Let's multiply . First, we write the numbers lined up by place value, but we are thinking of these numbers in expanded form: Pictorally, we can view this as breaking up a rectangle with side lengths and units into sub rectangles where the side lengths are the terms in each expanded form.  INSERT PIC OF THIS  Now, using distributivity, we calculate each partial product: since there are 3 terms in the first expanded form and 3 in the second, we will have partial products to calculate. We can start anywhere we like, but usually one starts by multiplying the bottom ones place by every place in the top number. Then, working right to left, we multiply the tens place by every place in the top number.  INSERT PIC HERE  Algebraically, we can view this in the following way. Note that the order the terms will be first the \"natual\" order that one would do using distributivity, and then reordered (in fact reversed, as it's usual to perform the algorithm from right to left and bottom to top) to match the partial products algorithm:      Pictorally, we can view this as \"sub-areas\" of each rectangle:  INSERT PIC HERE  Finally, we sum the partial products together to get our final product. We'll do this using the standard addition algorithm. Pictorally, we are adding all sub-areas together, and algebraically we are simply adding:   INSERT PIC HERE  "
},
{
  "id": "subsec-PartialProducts-6",
  "level": "2",
  "url": "sec-MultiplicationAlgorithms.html#subsec-PartialProducts-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "grid method. "
},
{
  "id": "subsec-StandardMultiplicationAlgorithm-2",
  "level": "2",
  "url": "sec-MultiplicationAlgorithms.html#subsec-StandardMultiplicationAlgorithm-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard multiplication algorithm "
},
{
  "id": "subsec-StandardMultiplicationAlgorithm-10",
  "level": "2",
  "url": "sec-MultiplicationAlgorithms.html#subsec-StandardMultiplicationAlgorithm-10",
  "type": "Example",
  "number": "3.3.3",
  "title": "",
  "body": " Let's multiply . First, we write the numbers lined up by place value, but we are thinking of the bottom number in expanded form: Pictorally, we can view this as breaking up a rectangle with side lengths and units into sub rectangles where the side length of are the terms in the expanded form.  INCLUDE PICTURE HERE  We start at the right hand side of the bottom number, with our aim being to calculate . Since that digit is in the ones place, we do not write down any zeroes yet. We multiply it by each digit in the top number and add any regroupings to the next place: so we write down the and \"carry\" the to the tens place.  INSERT PIC HERE  Next, we multiply the our ones digit by the tens place, and add the regrouping: . We write down the to the left of the and carry the other three to the hundreds place.  INSERT PIC HERE  Now, we multiply the hundreds place: . As there is no (non-zero) digit to the left, we write both digits down to the left of the . Thus we have calculated   INSERT PIC HERE  Now we move to the tens digit of the bottom number. Our aim is now to calculate . Since the is in the tens place, we first write a in the right-most spot (we know that so this signifies that we have taken out a factor of .)  We start with . So we write down the and \"carry\" the to the next place value. Note that this actually signifies hundreds since we are really calculating . Similar to the first digit of the bottom number, we have and . Thus we have calculated   INSERT PIC HERE  Now that we are out of non-zero digits in the bottom number, we simply add the two partial products we have calculated:   INSERT PIC HERE  Note that our first partial sum is the same as the in the partial sum algorithm, and similarly . We can see this relationship in the diagram too  INSERT PIC HERE  "
},
{
  "id": "subsec-MultiplicationInBaseTwelve-12",
  "level": "2",
  "url": "sec-MultiplicationAlgorithms.html#subsec-MultiplicationInBaseTwelve-12",
  "type": "Checkpoint",
  "number": "3.3.4",
  "title": "",
  "body": " Complete the entire multiplication table in base twelve for single digits.   INSERT PIC HERE   "
},
{
  "id": "subsec-MultiplicationInBaseTwelve-14",
  "level": "2",
  "url": "sec-MultiplicationAlgorithms.html#subsec-MultiplicationInBaseTwelve-14",
  "type": "Example",
  "number": "3.3.5",
  "title": "",
  "body": " Let's calculate using the standard algorithm. Let's write the numbers aligned vertically by place value first:  INSERT PIC OF THIS  Starting with the in the ones place of the bottom number, we look at our times table to determine that so we write down the and \"carry\" the . Now moving to the next place in the top number, . We write this down and we do not need to regroup. Next, so we write down the and carry the . Finally, . Thus .  INCLUDE PIC OF THIS  Now we move on to the longs place (that is, the twelves place). We put a in the rightmost entry of that row and we multiply. For this partial sum we will not be as explicit with the calculation as the previous one. We have that , , , and . Thus, .  INSERT PIC OF THIS  Next, we move on to the squares place (that is, the one-hundred-forty-fours place, or \"twelve squared place\"). We put a in the two rightmost entries of that row and we multiply. Using a similar method to above we get that . You should check that you obtain the same answer as this!  INSERT PIC OF THIS  Finally, we sum all of our partial products. We have that .  INSERT PIC OF THIS  "
},
{
  "id": "subsec-RussianMultiplication-2",
  "level": "2",
  "url": "sec-MultiplicationAlgorithms.html#subsec-RussianMultiplication-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Russian multiplication Ethiopian multiplication "
},
{
  "id": "subsec-RussianMultiplication-6",
  "level": "2",
  "url": "sec-MultiplicationAlgorithms.html#subsec-RussianMultiplication-6",
  "type": "Example",
  "number": "3.3.6",
  "title": "",
  "body": " Let's multiply . Since is the smaller number, we will write this on the left.  INSERT PIC OF THIS  Now, we divide the left number by two. Since , we round down to and write this number below the left number. Also, we multiply the right number by two and write this below the right number.  INSERT PIC OF THIS  We continue this process until we get to 1 on the left side. Note that so we round down to   INSERT PIC OF THIS  Now, we cross out all rows that contain an even number on the left. That are the rows with the left number being and . This leaves the rows with the left number being and .  INSERT PIC OF THIS  We now sum the right numbers of the remaining rows:   "
},
{
  "id": "subsec-RussianMultiplication-8",
  "level": "2",
  "url": "sec-MultiplicationAlgorithms.html#subsec-RussianMultiplication-8",
  "type": "Checkpoint",
  "number": "3.3.7",
  "title": "",
  "body": "   As a warmup, draw some dots or an area diagram to convince yourself of the fact that . Start with and , and then do a few other examples (for now, pick even numbers for ). What equivalent multiplication problem have you converted to? Explain why both diagrams have the same numer of dots\/same area.    Now, complete the Russian algorithm with the problem . Draw a diagram for each step, and note that the only row with an odd left number is the last row. Cases where the left number is a power of are the \"easiest\" cases to think about.    Now, let's try the calculation . In the second row, our left number is since and we rounded down. Draw a diagram for both rows and describe how much is \"missing\" from the first row to the next. How does this relate to the calculation ? Where is that number appear in your algorithm?    Describe what is happening in general when you round down on the left hand side. When you round down, how can you keep track of that \"missing\" area in your calculation?     For you should have a similar diagram to this:  INSERT PIC HERE  One way of viewing this is that we are splitting our diagram in half and then adding the bottom half to the left hand side, thus turning this into the equivalent problem .    You should have the following calculation and diagram:  INSERT PIC HERE  In this case, we have converted the calculation to the equivalent calculations , , and . So     Let's look at what changes from to the next line . If we didn't round down we would have When we round down we are deleting area from our rectangle. We have , or equivalently less area than in the line above. And indeed, the amount of area we are deleting is the right-hand number of the line above. So we need to account for this missing area by adding it back in at the end.  INSERT PIC DESCRIBING MISSING AREA  After this line, the calculation is the same as . So we have the product being the right hand number of the final line plus the \"missing\" area, which is accounted for in the right hand number of the line . Thus     In general, any time we round down, we're missing area equal to the right hand number of the line above. And since every time we rounded down we had an odd number on the left hand side above, we add the right hand number of those lines.   "
},
{
  "id": "subsec-RussianMultiplicationAlgorithm-6",
  "level": "2",
  "url": "sec-MultiplicationAlgorithms.html#subsec-RussianMultiplicationAlgorithm-6",
  "type": "Checkpoint",
  "number": "3.3.8",
  "title": "",
  "body": " For each of the algorithms, list some other pros and cons for using them.  "
},
{
  "id": "sec-DivisionAlgorithms",
  "level": "1",
  "url": "sec-DivisionAlgorithms.html",
  "type": "Section",
  "number": "3.4",
  "title": "Division Algorithms",
  "body": " Division Algorithms   In this section, we will predominantly talk about only one algorithm, commonly called long division. We will talk about a few other algorithms that are minor variations of the well known long division.    Long Division  Consider the division problem where The idea behind long division uses the partitive mode of division along with the idea of place value. Starting with the largest place value of the dividend , we group as many of those place into groups. Any of that place value remaining we ungroup into the next largest place value. A quick note: remember from the Quotient Remainder Theorem that remainders are always between and (inclusive) so we know each remainder in our calculation, which we will call a place remainder , must be within this range. Let's write the above as an algorithm:    Write the division with the dividend under the \"long division\" symbol, and the divisor directly to the left.  INSERT PIC OF THIS    Starting with the largest place value in , group as many of that place as possible evenly into groups. Write the number in each group above the place value you are working with (we call this the partial quotient of the place). Note that you may have some of that place value remaining.    Subtract the number you were able to group from the total of that place value to determine your palce remainder. Do this subtraction below the dividend.    If the current place value is the ones place, you have finished. The remaining ones are your for the calculation, and the number above the dividend is the . Otherwise, ungroup the place remainder into the next place value to the right and add these to the place to the right. Go to Step 2.    Let's do an example to see how this works.   Let's do the calculation . We write this using the long division symbol. We think of as the number of groups we are making (using the partitive model of division).  INSERT PIC OF THIS, ALONG WITH BLOCKS TOO  Starting with the hundreds place, we find that we can group at most one hundred evenly into each of our four groups. We note this in the quotient by putting a in the hundreds place. We have hundred remaining.  INSERT PIC OF THIS, ALONG WITH GROUPING  Now we \"ungroup\" our one hundred into 10 tens, giving us tens. We note this in our calculation by \"bringing down\" the tens in the dividend.  INSERT PIC OF THIS  Now, we can evenly divide our tens so that are in each group, with tens remaining (since , or .) We write the in the tens place of the quotient, and we have tens remaining. We write this down in our calculation.  INSERT PIC OF THIS  We \"ungroup\" the tens into ones giving us ones. We write this in our calculation.  INSERT PIC OF THIS  Finally, we can divide our ones so that are in each group of . We write this in our quotient and since we have ones remaining. Since we are at the ones place we are finished our calculation, and thus . Each group of contains with ones unable to be grouped evenly.  INSERT PIC OF THIS   It may be the case that our divisor is not a single digit. In these cases, we don't usually know our \" times tables\" but we can use our estimation and trial-and-error skills to determine the correct number of places in each group. Let's do a quick example to see this in action:   Let's do . Now, we don't know our times tables, so we are going to have to estimate. Let's write our calculation in the correct long divison form, and note that we won't include the block representation here, but it is worth using this representation if we need some visual guidance:  INSERT PIC OF THIS  Now, we know that we cannot group hundreds evenly among groups, so we ungroup these into tens, giving us tens in total. We know that is close to , so we can use multiples of as an estimation for the correct hundreds quotient. We know and , so let's see if we can put at most tens evenly in each of our groups: and , so is the correct partial quotient. Subtracting, we find that we have a remainder of .  INSERT PIC OF THIS  Ungrouping these tens into ones gives us ones in total. Using a similar procedure to before, we find that and so our ones quotient is with a remainder of .  INSERT PIC OF THIS  Thus we have calculated that .     Long Division Base Twelve  Just like our other algorithms, we can perform division in any base we like. Let's do an example in base twelve. For this section, all numbers will be in base twelve even without the subscript indicating so, though sometimes it will be included for clarity.   Let's do the base twelve division computation . Remember here that is our symbol for \"ten\". Our base twelve multiplication table will help a lot, so we include it here for easy reference:  INCLUDE BASE TWELVE TIMES TABLE  We write down our dividend and divisor in the appropraite locations. Now we perform the algorithm. We start at the place (a long made of cubes) and ask \"if we have 5 of this place, how many can be evenly divided among ten groups.\" We do not have enough to put any in the groups, so we put a zero in the quotient above this place (however, we don't need to explicity write it since we do not write whole numbers starting with a zero). We have grouped of this place, and have remaining.  INSERT PIC OF THIS  Each of this place can be ungrouped to twelve (that is ) of the place to the right. So we ungroup these to have of the next place value, which is (that is, cubes). Similarly we ask \"if we have of this place, how many can be evenly divided among ten groups?\" Using our multiplication table we see that and thus the most we can put in our groups is cubes. Thus we have grouped and have cubes remaining.  INSERT PIC OF THIS  We now ungroup these cubes into forty-eight, or squares and add these to the squares we originally have. Similarly, since and we know that we can evenly put squares in each of our groups, and we have squares remaining.  INSERT PIC OF THIS  We ungroup these squares to make ninety-six (or ) longs. Adding our original longs we have longs. Similarly to the previous places, we know and so we can evenly put longs in each of our groups, and we have remaining.  INSERT PIC OF THIS  Finally, we ungroup these longs to make ones. Adding our original ones we have ones in total. Since and we know that we can evenly put ones in each of our groups, and we have remaining. We have reached the ones place, so we are finished. Thus   INSERT PIC OF THIS     Short Division  There is another, slighly more encapsulated method of doing division. Essentially it is the same as long division, except we do the subtractions in our head and put the partial remainders above the digit in the place to the right. This gets a bit cumbersome if we have a large divisor (even greater than a single digit divisor can get tricky unless you're very comfortable with mental arithmetic). However, it's great for single digit divisors. We call this short division .  Rather than explaining short division in any depth, doing our previous long division problem using short division, aling with the preceding explanation, should be instructive enough.   Let's do the calculation using short division. We will simply show the calculation here, and this should be enough to understand once we're reminded that the \"carried\" numbers that appear are the partial remainders from long division.  INCLUDE PIC OF LONG AND SHORT DIVISION, CIRCLING THE COMMON REMAINDERS IN BOTH CALCULATIONS    "
},
{
  "id": "subsec-LongDivision-2",
  "level": "2",
  "url": "sec-DivisionAlgorithms.html#subsec-LongDivision-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "long division place remainder "
},
{
  "id": "subsec-LongDivision-3-2-1",
  "level": "2",
  "url": "sec-DivisionAlgorithms.html#subsec-LongDivision-3-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "partial quotient "
},
{
  "id": "subsec-LongDivision-5",
  "level": "2",
  "url": "sec-DivisionAlgorithms.html#subsec-LongDivision-5",
  "type": "Example",
  "number": "3.4.1",
  "title": "",
  "body": " Let's do the calculation . We write this using the long division symbol. We think of as the number of groups we are making (using the partitive model of division).  INSERT PIC OF THIS, ALONG WITH BLOCKS TOO  Starting with the hundreds place, we find that we can group at most one hundred evenly into each of our four groups. We note this in the quotient by putting a in the hundreds place. We have hundred remaining.  INSERT PIC OF THIS, ALONG WITH GROUPING  Now we \"ungroup\" our one hundred into 10 tens, giving us tens. We note this in our calculation by \"bringing down\" the tens in the dividend.  INSERT PIC OF THIS  Now, we can evenly divide our tens so that are in each group, with tens remaining (since , or .) We write the in the tens place of the quotient, and we have tens remaining. We write this down in our calculation.  INSERT PIC OF THIS  We \"ungroup\" the tens into ones giving us ones. We write this in our calculation.  INSERT PIC OF THIS  Finally, we can divide our ones so that are in each group of . We write this in our quotient and since we have ones remaining. Since we are at the ones place we are finished our calculation, and thus . Each group of contains with ones unable to be grouped evenly.  INSERT PIC OF THIS  "
},
{
  "id": "subsec-LongDivision-7",
  "level": "2",
  "url": "sec-DivisionAlgorithms.html#subsec-LongDivision-7",
  "type": "Example",
  "number": "3.4.2",
  "title": "",
  "body": " Let's do . Now, we don't know our times tables, so we are going to have to estimate. Let's write our calculation in the correct long divison form, and note that we won't include the block representation here, but it is worth using this representation if we need some visual guidance:  INSERT PIC OF THIS  Now, we know that we cannot group hundreds evenly among groups, so we ungroup these into tens, giving us tens in total. We know that is close to , so we can use multiples of as an estimation for the correct hundreds quotient. We know and , so let's see if we can put at most tens evenly in each of our groups: and , so is the correct partial quotient. Subtracting, we find that we have a remainder of .  INSERT PIC OF THIS  Ungrouping these tens into ones gives us ones in total. Using a similar procedure to before, we find that and so our ones quotient is with a remainder of .  INSERT PIC OF THIS  Thus we have calculated that .  "
},
{
  "id": "subsec-LongDivisionBaseTwelve-3",
  "level": "2",
  "url": "sec-DivisionAlgorithms.html#subsec-LongDivisionBaseTwelve-3",
  "type": "Example",
  "number": "3.4.3",
  "title": "",
  "body": " Let's do the base twelve division computation . Remember here that is our symbol for \"ten\". Our base twelve multiplication table will help a lot, so we include it here for easy reference:  INCLUDE BASE TWELVE TIMES TABLE  We write down our dividend and divisor in the appropraite locations. Now we perform the algorithm. We start at the place (a long made of cubes) and ask \"if we have 5 of this place, how many can be evenly divided among ten groups.\" We do not have enough to put any in the groups, so we put a zero in the quotient above this place (however, we don't need to explicity write it since we do not write whole numbers starting with a zero). We have grouped of this place, and have remaining.  INSERT PIC OF THIS  Each of this place can be ungrouped to twelve (that is ) of the place to the right. So we ungroup these to have of the next place value, which is (that is, cubes). Similarly we ask \"if we have of this place, how many can be evenly divided among ten groups?\" Using our multiplication table we see that and thus the most we can put in our groups is cubes. Thus we have grouped and have cubes remaining.  INSERT PIC OF THIS  We now ungroup these cubes into forty-eight, or squares and add these to the squares we originally have. Similarly, since and we know that we can evenly put squares in each of our groups, and we have squares remaining.  INSERT PIC OF THIS  We ungroup these squares to make ninety-six (or ) longs. Adding our original longs we have longs. Similarly to the previous places, we know and so we can evenly put longs in each of our groups, and we have remaining.  INSERT PIC OF THIS  Finally, we ungroup these longs to make ones. Adding our original ones we have ones in total. Since and we know that we can evenly put ones in each of our groups, and we have remaining. We have reached the ones place, so we are finished. Thus   INSERT PIC OF THIS  "
},
{
  "id": "subsec-ShortDivision-2",
  "level": "2",
  "url": "sec-DivisionAlgorithms.html#subsec-ShortDivision-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "short division "
},
{
  "id": "subsec-ShortDivision-4",
  "level": "2",
  "url": "sec-DivisionAlgorithms.html#subsec-ShortDivision-4",
  "type": "Example",
  "number": "3.4.4",
  "title": "",
  "body": " Let's do the calculation using short division. We will simply show the calculation here, and this should be enough to understand once we're reminded that the \"carried\" numbers that appear are the partial remainders from long division.  INCLUDE PIC OF LONG AND SHORT DIVISION, CIRCLING THE COMMON REMAINDERS IN BOTH CALCULATIONS  "
},
{
  "id": "Fractions-2",
  "level": "1",
  "url": "Fractions-2.html",
  "type": "Section",
  "number": "4.1",
  "title": "Introduction to Fractions",
  "body": " Introduction to Fractions  In this chapter, we will explore the concept of fractions and rational numbers, which are vital in understanding many mathematical concepts and applications. As future elementary school teachers, it is essential to have a firm grasp of fractions to effectively teach students and build a strong foundation in mathematics.  Fractions represent a way to express parts of a whole. They have two components: the numerator , which indicates the number of equal parts considered, and the denominator , which represents the total number of equal parts that make up the whole. Of course, it's easy to see that we can divide one whole into 2 halves, or 3 thirds, or in general  ths for any    A fraction is an ordered pair of integers , where is the numerator and is the denominator, such that . We write a fraction as .   Fractions can also be related to solutions of linear equations with integer coefficients. We will now define fractions in terms of solutions to linear equations.   Let , where represents the set of integers, and . A fraction is a solution to the linear equation .   The definition above allows us to build the idea of fractions from ideas that we've developed before, namely arithmetic of integers.   Examples of Fractions   Consider the fraction . This represents one part of a whole that is divided into two equal parts.    A diagram illustrating the fraction $\\displaystyle \\frac{1}{2}$, where one part of the whole is shaded.       Now, consider the fraction . This represents three parts of a whole that is divided into four equal parts.     Making Sense Of Fractions and Division of Whole Numbers  For whole numbers with we can think of the fraction problem as dividing into equal groups. The number of pieces in each group is indeed . For example, if we wanted to divide into we could first divide each whole into fourths, giving us 4 fourths for each whole, so fourths.  INSERT PIC  Now we want to divide 12 objects, these objects being fourths of a whole, into 4 groups. By division of whole numbers we know that there must be fourths in each group. . INSERT PIC  So in total, there are 3 fourths in each group, which we can represent by the fraction     Equivalent Fractions  In this subsection, we will discuss the concept of equivalent fractions. Equivalent fractions represent the same part of a whole, even though their numerators and denominators may be different.   Two fractions and are called equivalent fractions if . In other words, they represent the same quantity or part of a whole. In fact, you can see that we can take a fractional representation and either \"chop\" each piece into equal sized pieces, which corresponds to multiplying both the numerator and denominator by , or \"gluing\" equal pieces together to make a larger equal piece, which corresponds to dividing the numerator and denominator by . Note that in the second case, you need to be able to make equal groups of size , so this means that both the numerator and denominator must be divisible by . ADD PIC HERE    Consider the fractions and . These fractions are equivalent because . Equivalently, since we can multiply each of and by to get and (or divide and by , conversely), you can see that these are equivalent fractions.    Consider the fractions and . These fractions are equivalent because .     Comparing Fractions Using a Common Denominator  In this subsection, we will learn how to compare two fractions using a common denominator. The idea of using a common denominator is essential for comparing fractions as it allows us to compare the relative sizes of the numerators. We will start with an example where the fractions have the same denominator and then introduce the concept of equivalent fractions to compare fractions with different denominators.   Comparing Fractions with the Same Denominator  Let's say we want to compare the fractions and . Since both fractions have the same denominator of 5 (remember that \"fifths\" denote the units of which we have 2 and 3 of, respectively), we can simply compare the numerators. In this case, 3 is greater than 2, so . ADD PIC HERE   Now let's move on to comparing fractions with different denominators. To do this, we will use the concept of equivalent fractions.   Equivalent Fractions  As a reminder, two fractions are considered equivalent if they represent the same value. This can be determined by cross-multiplying the fractions and checking if the resulting products are equal. In other words, two fractions and are equivalent if .  \\title To compare two fractions with different denominators, we can find equivalent fractions that have the same denominator. The way to do this so that the denominators are as small as possible is by finding least common denominator (LCD), which is the smallest multiple of both denomnators.  More precisely, if and are two denominators, then the least common denominator is smallest number such that for some . Thus, if we wanted and to have a common denominator, we multiply the top and bottom of the first fraction by and the second fraction by to get and . Now both quantities are fractions that have the same denominator.  For example, fractions equivalent to and would be and since is the smallest multiple of both and . We multiply the numerator and denominator of by since and we multiply the numerator and denominator of by since .  INSERT PIC HERE  Another way to do this, but which might end up with fractions with larger integers making up the numerators and denominators, is to multiply the numerator and denominator of a fraction by the denominator of the other, and vice versa. Thus, if we wanted and to have a common denominator, we multiply the top and bottom of the first fraction by and the second fraction by to get and . Now both quantities are fractions that have the same denominator.  Once we have the equivalent fractions, we can compare them as we did in the first example. Note that using this method, the fractions might not have the least common denominator.  For example, if we want fractions equivalent to and we can multiply the numerator and denominator of the first fraction by and the second by to obtain and We can think of this using an area model for fractions as well:  INSERT PIC HERE   Comparing Fractions with Different Denominators  Let's compare the fractions and . Using the fisrt method above, we need to find the LCD, which is the smallest multiple that both denominators (4 and 6) can divide into. In this case, the LCD is 12. So, using the notation above, and since   Now, we need to find equivalent fractions for and with a denominator of 12. We can do this by multiplying the numerator and denominator of each fraction by the same number, such that the denominator becomes 12:   So, is equivalent to and is equivalent to . Now, we can compare the numerators of these equivalent fractions: 9 is less than 10, so . ADD PIC HERE  Alternatively, we could have used the second method and compared the fractions and and ended up with the same result.     Comparing Multiple Fractions  Now that we have covered comparing two fractions, let's consider an example where we compare three fractions of increasing difficulty. The method remains the same: we will find equivalent fractions with a common denominator and then compare their numerators.   Comparing Three Fractions  Let's compare the following fractions: , , and . First, we need to find the least common denominator (LCD), which is the smallest multiple that all three denominators (3, 9, and 12) can divide into. In this case, the LCD is 36. So, we have , , and since .  Now, we need to find equivalent fractions for each fraction with a denominator of 36:   So, is equivalent to , the fraction is equivalent to , and is equivalent to . Comparing the numerators of these equivalent fractions, we have . Thus, the order of the fractions from smallest to largest is: . ADD PIC HERE   Note that since we can always compare the sizes of two fractions we can place these on a number line, just like we did for whole numbers.  ADD PIC HERE    Density of Fractions  In this subsection, we will discuss the density of fractions, why it is important to understand this concept, and provide a first-year math level definition of density. We will also walk through three examples of finding a fraction between two given fractions, using the idea of equivalent fractions and estimating a fraction between them, with increasing order of difficulty.   Density of Fractions  The set of fractions is said to be dense if, for any two distinct fractions, there always exists another fraction between them. In other words, no matter how close two fractions are, we can always find another fraction that lies between them.   Understanding the density of fractions is important because it provides insights into the structure of the set of fractions and helps us appreciate the infinite number of fractions that exist between any two given fractions. This concept also plays a crucial role in understanding the properties of real numbers, as the set of fractions (rational numbers) is a subset of the real numbers.   Example 1: Finding a Fraction Between Two Fractions  Let's find a fraction between and . One way to do this is by finding equivalent fractions with a common denominator. The least common denominator (LCD) of 4 and 3 is 12, so the equivalent fractions are:   Now, we can simply choose a fraction with the same denominator that lies between the two equivalent fractions. In this case, is a fraction between and .    Example 2: Finding a Fraction Between Two Fractions  Now let's find a fraction between and . We can start by finding equivalent fractions with a common denominator. The LCD of 5 and 4 is 20, so the equivalent fractions are:   We can now choose a fraction with the same denominator that lies between the two equivalent fractions. In this case, is a fraction between and .    Example 3: Finding a Fraction Between Two Fractions  Finally, let's find a fraction between and . We begin by finding equivalent fractions with a larger common denominator. The LCD of 7 and 11 is 77, so the equivalent fractions are:   In this case, the two equivalent fractions are already adjacent, so we need to find a larger common denominator to obtain a fraction between them. Let's try using a common denominator of 154, which is twice the previous LCD. Thus we multiply the numerators and denominators of both fractions by 2:   Now, we can choose a fraction with the same denominator that lies between the two equivalent fractions. In this case, is a fraction between and .   In the previous example, this is in some sense the \"worst case scenario\" where our numerators differ by 1. However, we could overcome this difficulty by breaking each unit in two. This idea will work for every two fractions where we want to find another between them. Let's prove this precisely. First we need a small \"lemma\", which is the name for a mathematical result used in another larger mathematical result.   Lemma: Between Two Even Integers   Let be even integers such that . Then .    Since is even we know that for some whole number . We also know the next largest even number is . Since is an even integer and then . Clearly and thus putting it all together,      Theorem: Fraction Between Two Fractions   Let be two fractions, where and are integers, and . Then, the fraction is between both fractions, that is, .    First, we find equivalent fractions for and with a common denominator :   Now, we have , and since we have a common denominator this means that . Since both and are even integers, we can apply the lemma above. Therefore, there exists an odd integer such that .  This means that , which is equivalent to .    The theorem above demonstrates the density of fractions because it shows that given any two distinct fractions and , we can always find another fraction that lies between them. This property holds true for any choice of and , as long as . Consequently, no matter how close together two fractions might be, there will always be another fraction in between them, illustrating that the set of fractions is dense.   "
},
{
  "id": "Fractions-2-3",
  "level": "2",
  "url": "Fractions-2.html#Fractions-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "numerator denominator "
},
{
  "id": "fraction",
  "level": "2",
  "url": "Fractions-2.html#fraction",
  "type": "Definition",
  "number": "4.1.1",
  "title": "",
  "body": " A fraction is an ordered pair of integers , where is the numerator and is the denominator, such that . We write a fraction as .  "
},
{
  "id": "linear-equation-solution",
  "level": "2",
  "url": "Fractions-2.html#linear-equation-solution",
  "type": "Definition",
  "number": "4.1.2",
  "title": "",
  "body": " Let , where represents the set of integers, and . A fraction is a solution to the linear equation .  "
},
{
  "id": "fraction-example-1",
  "level": "2",
  "url": "Fractions-2.html#fraction-example-1",
  "type": "Example",
  "number": "4.1.3",
  "title": "",
  "body": " Consider the fraction . This represents one part of a whole that is divided into two equal parts.    A diagram illustrating the fraction $\\displaystyle \\frac{1}{2}$, where one part of the whole is shaded.     "
},
{
  "id": "fraction-example-2",
  "level": "2",
  "url": "Fractions-2.html#fraction-example-2",
  "type": "Example",
  "number": "4.1.5",
  "title": "",
  "body": " Now, consider the fraction . This represents three parts of a whole that is divided into four equal parts.  "
},
{
  "id": "equivalent-fractions",
  "level": "2",
  "url": "Fractions-2.html#equivalent-fractions",
  "type": "Definition",
  "number": "4.1.6",
  "title": "",
  "body": " Two fractions and are called equivalent fractions if . In other words, they represent the same quantity or part of a whole. In fact, you can see that we can take a fractional representation and either \"chop\" each piece into equal sized pieces, which corresponds to multiplying both the numerator and denominator by , or \"gluing\" equal pieces together to make a larger equal piece, which corresponds to dividing the numerator and denominator by . Note that in the second case, you need to be able to make equal groups of size , so this means that both the numerator and denominator must be divisible by . ADD PIC HERE  "
},
{
  "id": "equivalent-fraction-example-1",
  "level": "2",
  "url": "Fractions-2.html#equivalent-fraction-example-1",
  "type": "Example",
  "number": "4.1.7",
  "title": "",
  "body": " Consider the fractions and . These fractions are equivalent because . Equivalently, since we can multiply each of and by to get and (or divide and by , conversely), you can see that these are equivalent fractions.  "
},
{
  "id": "equivalent-fraction-example-2",
  "level": "2",
  "url": "Fractions-2.html#equivalent-fraction-example-2",
  "type": "Example",
  "number": "4.1.8",
  "title": "",
  "body": " Consider the fractions and . These fractions are equivalent because .  "
},
{
  "id": "ComparingFractions-3",
  "level": "2",
  "url": "Fractions-2.html#ComparingFractions-3",
  "type": "Example",
  "number": "4.1.9",
  "title": "Comparing Fractions with the Same Denominator.",
  "body": " Comparing Fractions with the Same Denominator  Let's say we want to compare the fractions and . Since both fractions have the same denominator of 5 (remember that \"fifths\" denote the units of which we have 2 and 3 of, respectively), we can simply compare the numerators. In this case, 3 is greater than 2, so . ADD PIC HERE  "
},
{
  "id": "ComparingFractions-5",
  "level": "2",
  "url": "Fractions-2.html#ComparingFractions-5",
  "type": "Definition",
  "number": "4.1.10",
  "title": "Equivalent Fractions.",
  "body": " Equivalent Fractions  As a reminder, two fractions are considered equivalent if they represent the same value. This can be determined by cross-multiplying the fractions and checking if the resulting products are equal. In other words, two fractions and are equivalent if .  "
},
{
  "id": "ComparingFractions-7",
  "level": "2",
  "url": "Fractions-2.html#ComparingFractions-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "least common denominator "
},
{
  "id": "ComparingFractions-14",
  "level": "2",
  "url": "Fractions-2.html#ComparingFractions-14",
  "type": "Example",
  "number": "4.1.11",
  "title": "Comparing Fractions with Different Denominators.",
  "body": " Comparing Fractions with Different Denominators  Let's compare the fractions and . Using the fisrt method above, we need to find the LCD, which is the smallest multiple that both denominators (4 and 6) can divide into. In this case, the LCD is 12. So, using the notation above, and since   Now, we need to find equivalent fractions for and with a denominator of 12. We can do this by multiplying the numerator and denominator of each fraction by the same number, such that the denominator becomes 12:   So, is equivalent to and is equivalent to . Now, we can compare the numerators of these equivalent fractions: 9 is less than 10, so . ADD PIC HERE  Alternatively, we could have used the second method and compared the fractions and and ended up with the same result.  "
},
{
  "id": "ComparingMultipleFractions-3",
  "level": "2",
  "url": "Fractions-2.html#ComparingMultipleFractions-3",
  "type": "Example",
  "number": "4.1.12",
  "title": "Comparing Three Fractions.",
  "body": " Comparing Three Fractions  Let's compare the following fractions: , , and . First, we need to find the least common denominator (LCD), which is the smallest multiple that all three denominators (3, 9, and 12) can divide into. In this case, the LCD is 36. So, we have , , and since .  Now, we need to find equivalent fractions for each fraction with a denominator of 36:   So, is equivalent to , the fraction is equivalent to , and is equivalent to . Comparing the numerators of these equivalent fractions, we have . Thus, the order of the fractions from smallest to largest is: . ADD PIC HERE  "
},
{
  "id": "DensityOfFractions-3",
  "level": "2",
  "url": "Fractions-2.html#DensityOfFractions-3",
  "type": "Definition",
  "number": "4.1.13",
  "title": "Density of Fractions.",
  "body": " Density of Fractions  The set of fractions is said to be dense if, for any two distinct fractions, there always exists another fraction between them. In other words, no matter how close two fractions are, we can always find another fraction that lies between them.  "
},
{
  "id": "DensityOfFractions-5",
  "level": "2",
  "url": "Fractions-2.html#DensityOfFractions-5",
  "type": "Example",
  "number": "4.1.14",
  "title": "Example 1: Finding a Fraction Between Two Fractions.",
  "body": " Example 1: Finding a Fraction Between Two Fractions  Let's find a fraction between and . One way to do this is by finding equivalent fractions with a common denominator. The least common denominator (LCD) of 4 and 3 is 12, so the equivalent fractions are:   Now, we can simply choose a fraction with the same denominator that lies between the two equivalent fractions. In this case, is a fraction between and .  "
},
{
  "id": "DensityOfFractions-6",
  "level": "2",
  "url": "Fractions-2.html#DensityOfFractions-6",
  "type": "Example",
  "number": "4.1.15",
  "title": "Example 2: Finding a Fraction Between Two Fractions.",
  "body": " Example 2: Finding a Fraction Between Two Fractions  Now let's find a fraction between and . We can start by finding equivalent fractions with a common denominator. The LCD of 5 and 4 is 20, so the equivalent fractions are:   We can now choose a fraction with the same denominator that lies between the two equivalent fractions. In this case, is a fraction between and .  "
},
{
  "id": "DensityOfFractions-7",
  "level": "2",
  "url": "Fractions-2.html#DensityOfFractions-7",
  "type": "Example",
  "number": "4.1.16",
  "title": "Example 3: Finding a Fraction Between Two Fractions.",
  "body": " Example 3: Finding a Fraction Between Two Fractions  Finally, let's find a fraction between and . We begin by finding equivalent fractions with a larger common denominator. The LCD of 7 and 11 is 77, so the equivalent fractions are:   In this case, the two equivalent fractions are already adjacent, so we need to find a larger common denominator to obtain a fraction between them. Let's try using a common denominator of 154, which is twice the previous LCD. Thus we multiply the numerators and denominators of both fractions by 2:   Now, we can choose a fraction with the same denominator that lies between the two equivalent fractions. In this case, is a fraction between and .  "
},
{
  "id": "DensityOfFractions-9",
  "level": "2",
  "url": "Fractions-2.html#DensityOfFractions-9",
  "type": "Lemma",
  "number": "4.1.17",
  "title": "Lemma: Between Two Even Integers.",
  "body": " Lemma: Between Two Even Integers   Let be even integers such that . Then .    Since is even we know that for some whole number . We also know the next largest even number is . Since is an even integer and then . Clearly and thus putting it all together,    "
},
{
  "id": "DensityOfFractions-10",
  "level": "2",
  "url": "Fractions-2.html#DensityOfFractions-10",
  "type": "Theorem",
  "number": "4.1.18",
  "title": "Theorem: Fraction Between Two Fractions.",
  "body": " Theorem: Fraction Between Two Fractions   Let be two fractions, where and are integers, and . Then, the fraction is between both fractions, that is, .    First, we find equivalent fractions for and with a common denominator :   Now, we have , and since we have a common denominator this means that . Since both and are even integers, we can apply the lemma above. Therefore, there exists an odd integer such that .  This means that , which is equivalent to .   "
},
{
  "id": "Fractions-3",
  "level": "1",
  "url": "Fractions-3.html",
  "type": "Section",
  "number": "4.2",
  "title": "Arithmetic With Fractions",
  "body": " Arithmetic With Fractions   Adding and Subtracting Fractions  In this subsection, we will discuss adding and subtracting fractions, starting with fractions with the same denominator and then moving on to fractions with unlike denominators. Adding and subtracting fractions is similar to adding and subtracting units, like apples or other objects, but instead, we are working with parts of a whole.  First, let's discuss adding and subtracting fractions with the same denominator.   Adding and Subtracting Fractions with the Same Denominator  Suppose we have two fractions and that we want to add. Since both fractions have the same denominator of 8, we can think of the numerators as the number of \"eighths\" we have. To add these two fractions, we simply add the numerators and keep the same denominator:   Similarly, if we want to subtract the fractions, we subtract the numerators and keep the same denominator:   This is like adding or subtracting units: if we have 3 apples and add 5 more apples, we end up with 8 apples. The same goes for subtraction.   Now let's discuss adding and subtracting fractions with unlike denominators. To do this, we will use the concept of equivalent fractions, which we have explored earlier when comparing fractions.   Adding and Subtracting Fractions with Unlike Denominators  Let's say we want to add the fractions and . First, we need to find equivalent fractions with a common denominator, which in this case is the least common denominator (LCD) of 4 and 6. The LCD is 12, so we will find equivalent fractions with a denominator of 12:   Now that we have equivalent fractions with the same denominator, we can add them just as we did in the previous example:   Similarly, if we want to subtract the fractions, we can do so by subtracting the numerators while keeping the same denominator:      Mixed Fractions  In this subsection, we will discuss mixed fractions and how to convert between mixed and improper fractions. We give definitions of these concepts below. In all of thee definitions we let     A proper fraction is a fraction where the numerator is less than the denominator, that is, is a proper fraction if .      An improper fraction is a fraction where the numerator is equal to or greater than the denominator, that is, is an improper fraction if .      A mixed number is a number that is represented as the sum of a whole number and a proper fraction. It is usually written in the form which really means but written without the addition sign between the whole number and fraction, where is a whole number, and is a proper fraction, meaning .    Mixed fractions are usually written in the form , . To convert a mixed fraction to an improper fraction, we can convert the whole number part to the fraction and then use equivalent fractions and addition of fractions.  To convert a mixed fraction to an improper fraction, follow these steps:   Convert the whole number part to the fraction .  Find equivalent fractions for and with a common denominator.  Add the numerators of the equivalent fractions, and keep the common denominator.    Converting a Mixed Fraction to an Improper Fraction  Let's convert the mixed fraction to an improper fraction. First, we convert the whole number part 3 to the fraction .  Now, we need to find equivalent fractions for and with a common denominator. In this case, the least common denominator is 5. We multiply the numerator and denominator of by 5 to get the equivalent fraction .  Now, we can add the numerators of the equivalent fractions: . Keeping the common denominator, we get the improper fraction . So, .    Converting a Mixed Fraction to an Improper Fraction  Let's convert the mixed fraction to an improper fraction. First, we convert the whole number part 4 to the fraction .  Now, we need to find equivalent fractions for and with a common denominator. In this case, the least common denominator is 8. We multiply the numerator and denominator of by 8 to get the equivalent fraction . Since both the numerator and denominator are divisible by 8 we can reduce this fraction to      Converting Improper Fractions to Mixed Numbers  In many situations, it is more convenient to represent improper fractions as mixed numbers. A mixed number is a whole number plus a proper fraction (a fraction where the numerator is less than the denominator).  To convert an improper fraction to a mixed number, follow these steps:   Divide the numerator by the denominator. This gives you the whole number part of the mixed number.  The remainder of the division becomes the numerator of the fractional part of the mixed number.  The denominator remains the same in the fractional part of the mixed number.    Converting an Improper Fraction to a Mixed Number  Let's convert the improper fraction to a mixed number. First, divide the numerator 23 by the denominator 5. This gives us 4 with a remainder of 3. So, the whole number part of the mixed number is 4, and the numerator of the fractional part is 3.  The denominator remains the same in the fractional part of the mixed number. So, the fractional part is .  Thus, the improper fraction is equal to the mixed number .     Multiplication of Fractions  Let's delve into the concept of multiplication of fractions. This operation may appear more complex than addition or subtraction of fractions, but it is fundamentally straightforward. To illustrate, let's consider a few examples.    What is , or in other words, half of 3?    If we take three units and split everything in half, we essentially have three halfs, or .      What is half of , or in other words, ?    If we take two thirds and divide them in half, we get . Therefore, half of is .      What is $\\frac{2}{5}$ times $\\frac{2}{3}$, or in other words, two-fifths of two-thirds?    If we take two thirds and divide them into fifths, and then take two of those fifths, we essentially have $\\frac{4}{15}$.    The examples above illustrate how multiplication of fractions works. Essentially, we multiply the numerators to get the numerator of the result, and multiply the denominators to get the denominator of the result. For instance, for any fractions $\\frac{a}{b}$ and $\\frac{c}{d}$, $\\frac{a}{b}$ times $\\frac{c}{d}$ equals $\\frac{a \\times c}{b \\times d}$. This operation breaks up our units into $b \\times d$ equal pieces, and we have $a \\times c$ of these pieces.    The reciprocal of a fraction $\\frac{a}{b}$, where $a$ and $b$ are both nonzero, is $\\frac{b}{a}$ - essentially, we swap the numerator and the denominator.      What is the reciprocal of $\\frac{4}{5}$?    The reciprocal of $\\frac{4}{5}$ is $\\frac{5}{4}$.    Note that a non-zero fraction multiplied by its reciprocal always equals one. This is because $\\frac{a}{b}$ times $\\frac{b}{a}$ equals $\\frac{a \\times b}{b \\times a}$. Since $a \\times b$ equals $b \\times a$, this simplifies to $\\frac{1}{1}$, which equals 1.    Division of Fractions  Dividing fractions is a concept that, like addition and subtraction, can be visualized using the denominator of fractions as some unit or object. Let's consider an example where we have 13 apples divided into groups of 4 apples. We take the 13 apples, group them into sets of 4, and get 3 groups with 1 apple left over. This can be represented as 3 and a quarter groups (using mixed number notation), where the 1 apple left over is a quarter of a group. ADD PIC HERE  Now, if we consider a fraction like thirteen-fifths divided by four-fifths, the principle is the same. We group them into sets of four fifths and find that we have 3 groups of four fifths with one fifth left over. This also gives us 3 and a quarter groups, or in other terms, thirteen quarters. ADD PIC HERE  The key idea here is that the two problems above are fundamentally the same problem, as we are dividing thirteen units into groups of four units; whether the units are apples or fifths, or something else does not make a difference to our solution. So, fundamentally if we understand the idea of division of whole numbers, we understand the idea of division of fractions.  This leads us to the general rule of dividing fractions: if we have $a\/c$ divided by $b\/c$ (where $a, b, c$ are any whole numbers where ), our result will be $a\/b$. The important thing to note is that our units (the things we're grouping) are the same, which allows us to simply divide the first number by the second number. ADD PIC HERE  However, it's not always the case that we have fractions with common denominators to divide. For this, we need to know how to divide fractions with any denominators. The rule here is that $a\/b$ divided by $c\/d$ is equal to $a\/b$ times the reciprocal of $c\/d$, which is $d\/c$.  You have most likely learned in school that to divide to fractions, you multiply the first fraction by the reciprocal of the second fraction; for example Of course this is correct, but as we are in the business of understanding why these ideas are correct, let's look more closely at why this idea is true.  Consider the division . We know how to divide fractions with the same denominator, so let's find equivalent fractions to these two with the denominator of .   Now, we are dividing  ths into groups of size  ths. From our discussion above we know that . But we can express this as the multiplication of two fractions: which is indeed the multiplication by the reciplocal result we wanted to show.  In addition, it's important to note that all the properties that hold for integers under addition also hold for fractions. Because we can convert any division operation to a multiplication operation (by multiplying by the reciprocal), we can think of dealing with fractions as only involving addition and multiplication. This allows us to use the commutative, associative, and distributive properties as needed to simplify expressions involving fractions.   Adding, Subtracting, Multiplying, and Dividing Fractions   Let's perform multiple operations on fractions in one problem. Consider the expression:     To simplify the expression, we follow the order of operations (BEMDAS): Brackets, Exponents, Multiplication and Division (from left to right), Addition and Subtraction (from left to right).  First, we handle the division by changing the operation to multiplication by the reciprocal of the divisor:   Multiplying these fractions and redicing to equivalent fractions where possible:   So the original expression is equivalent to   We have dealt with all of the multiplication and division. Now we can add and subtract from left to right. Noting that and then having a common denominator of 36 we have   Thus, the simplified result of the given expression is .      Negative Exponents and Fractions  Let's consider some important rules about negative exponents. Remember from the previous section on exponents, we had that, for a base and exponents we have that We would like to extend this idea to having negative integers as our exponents. Now that we have developed the idea of fractions, we can indeed define what a negative exponent would mean.  Suppose we have a number and we are indeed curious about what raised to a negative exponent would mean. We want to keep the same rules that we've used before, where if you have the same base and different exponents, you add them. This would imply that should equal , which is . And anything raised to the power of zero is one. So what could we multiply by to get one? The answer is . Hence, whenever we see a negative exponent like this, it implies the reciprocal of the base raised to the corresponding positive exponent. In general, .   Negative Exponent Rule  For any nonzero real number and positive integer , we have:    Another rule deals with fractions raised to an exponent. The exponent means we multiply the base, in this case our base is the fraction , by itself the exponent number of times. Since we multiply fractions by multiplying the numerators and denominators together, respectively, this means that equals .   Exponent of a Fraction Rule  For any nonzero real number , and positive integer , we have:    Now, what happens when we have a negative exponent of a fraction? Let's consider . If we multiply , we'd like that to be , and anything raised to the power of 0 is 1. So what can we multiply by to get 1? The answer is . So, this means that .   Negative Exponent of a Fraction Rule  For any nonzero real numbers and , we have:    We will now explore some examples to further solidify our understanding of these concepts.   Simplifying Compound Fractions  A compound fraction, also known as a complex fraction, is a fraction where the numerator, the denominator, or both are fractions themselves. For example, is a compound fraction. To simplify such fractions, we follow the principle of dividing fractions which states that dividing by a fraction is the same as multiplying by its reciprocal. Hence, simplifies to which further simplifies to .   Compound Fraction Rule  For any nonzero real numbers , , , and , we have:    Let's now consider an example that combines the ideas of positive and negative exponents, positive and negative exponents of fractions, the exponent 0, and compound fractions.   Simplifying a Complex Fraction with Exponents   Simplify the compound fraction and express the result such that there are no negative exponents anywhere.    First, we simplify the denominator using the compound fraction rule: . This simplifies further to . Now our expression becomes . We use the rules of exponents to simplify this to . Finally, applying the negative exponent rule, we get .      "
},
{
  "id": "AddingSubtractingFractions-4",
  "level": "2",
  "url": "Fractions-3.html#AddingSubtractingFractions-4",
  "type": "Example",
  "number": "4.2.1",
  "title": "Adding and Subtracting Fractions with the Same Denominator.",
  "body": " Adding and Subtracting Fractions with the Same Denominator  Suppose we have two fractions and that we want to add. Since both fractions have the same denominator of 8, we can think of the numerators as the number of \"eighths\" we have. To add these two fractions, we simply add the numerators and keep the same denominator:   Similarly, if we want to subtract the fractions, we subtract the numerators and keep the same denominator:   This is like adding or subtracting units: if we have 3 apples and add 5 more apples, we end up with 8 apples. The same goes for subtraction.  "
},
{
  "id": "AddingSubtractingFractions-6",
  "level": "2",
  "url": "Fractions-3.html#AddingSubtractingFractions-6",
  "type": "Example",
  "number": "4.2.2",
  "title": "Adding and Subtracting Fractions with Unlike Denominators.",
  "body": " Adding and Subtracting Fractions with Unlike Denominators  Let's say we want to add the fractions and . First, we need to find equivalent fractions with a common denominator, which in this case is the least common denominator (LCD) of 4 and 6. The LCD is 12, so we will find equivalent fractions with a denominator of 12:   Now that we have equivalent fractions with the same denominator, we can add them just as we did in the previous example:   Similarly, if we want to subtract the fractions, we can do so by subtracting the numerators while keeping the same denominator:   "
},
{
  "id": "def-ProperFraction",
  "level": "2",
  "url": "Fractions-3.html#def-ProperFraction",
  "type": "Definition",
  "number": "4.2.3",
  "title": "",
  "body": "  A proper fraction is a fraction where the numerator is less than the denominator, that is, is a proper fraction if .   "
},
{
  "id": "def-ImproperFraction",
  "level": "2",
  "url": "Fractions-3.html#def-ImproperFraction",
  "type": "Definition",
  "number": "4.2.4",
  "title": "",
  "body": "  An improper fraction is a fraction where the numerator is equal to or greater than the denominator, that is, is an improper fraction if .   "
},
{
  "id": "def-MixedNumber",
  "level": "2",
  "url": "Fractions-3.html#def-MixedNumber",
  "type": "Definition",
  "number": "4.2.5",
  "title": "",
  "body": "  A mixed number is a number that is represented as the sum of a whole number and a proper fraction. It is usually written in the form which really means but written without the addition sign between the whole number and fraction, where is a whole number, and is a proper fraction, meaning .   "
},
{
  "id": "MixedFractions-9",
  "level": "2",
  "url": "Fractions-3.html#MixedFractions-9",
  "type": "Example",
  "number": "4.2.6",
  "title": "Converting a Mixed Fraction to an Improper Fraction.",
  "body": " Converting a Mixed Fraction to an Improper Fraction  Let's convert the mixed fraction to an improper fraction. First, we convert the whole number part 3 to the fraction .  Now, we need to find equivalent fractions for and with a common denominator. In this case, the least common denominator is 5. We multiply the numerator and denominator of by 5 to get the equivalent fraction .  Now, we can add the numerators of the equivalent fractions: . Keeping the common denominator, we get the improper fraction . So, .  "
},
{
  "id": "MixedFractions-10",
  "level": "2",
  "url": "Fractions-3.html#MixedFractions-10",
  "type": "Example",
  "number": "4.2.7",
  "title": "Converting a Mixed Fraction to an Improper Fraction.",
  "body": " Converting a Mixed Fraction to an Improper Fraction  Let's convert the mixed fraction to an improper fraction. First, we convert the whole number part 4 to the fraction .  Now, we need to find equivalent fractions for and with a common denominator. In this case, the least common denominator is 8. We multiply the numerator and denominator of by 8 to get the equivalent fraction . Since both the numerator and denominator are divisible by 8 we can reduce this fraction to   "
},
{
  "id": "ImproperToFractions-5",
  "level": "2",
  "url": "Fractions-3.html#ImproperToFractions-5",
  "type": "Example",
  "number": "4.2.8",
  "title": "Converting an Improper Fraction to a Mixed Number.",
  "body": " Converting an Improper Fraction to a Mixed Number  Let's convert the improper fraction to a mixed number. First, divide the numerator 23 by the denominator 5. This gives us 4 with a remainder of 3. So, the whole number part of the mixed number is 4, and the numerator of the fractional part is 3.  The denominator remains the same in the fractional part of the mixed number. So, the fractional part is .  Thus, the improper fraction is equal to the mixed number .  "
},
{
  "id": "ex-MultiplicationOfFractions1",
  "level": "2",
  "url": "Fractions-3.html#ex-MultiplicationOfFractions1",
  "type": "Example",
  "number": "4.2.9",
  "title": "",
  "body": "  What is , or in other words, half of 3?    If we take three units and split everything in half, we essentially have three halfs, or .   "
},
{
  "id": "ex-MultiplicationOfFractions2",
  "level": "2",
  "url": "Fractions-3.html#ex-MultiplicationOfFractions2",
  "type": "Example",
  "number": "4.2.10",
  "title": "",
  "body": "  What is half of , or in other words, ?    If we take two thirds and divide them in half, we get . Therefore, half of is .   "
},
{
  "id": "ex-MultiplicationOfFractions3",
  "level": "2",
  "url": "Fractions-3.html#ex-MultiplicationOfFractions3",
  "type": "Example",
  "number": "4.2.11",
  "title": "",
  "body": "  What is $\\frac{2}{5}$ times $\\frac{2}{3}$, or in other words, two-fifths of two-thirds?    If we take two thirds and divide them into fifths, and then take two of those fifths, we essentially have $\\frac{4}{15}$.   "
},
{
  "id": "def-Reciprocal",
  "level": "2",
  "url": "Fractions-3.html#def-Reciprocal",
  "type": "Definition",
  "number": "4.2.12",
  "title": "",
  "body": "  The reciprocal of a fraction $\\frac{a}{b}$, where $a$ and $b$ are both nonzero, is $\\frac{b}{a}$ - essentially, we swap the numerator and the denominator.   "
},
{
  "id": "ex-Reciprocal",
  "level": "2",
  "url": "Fractions-3.html#ex-Reciprocal",
  "type": "Example",
  "number": "4.2.13",
  "title": "",
  "body": "  What is the reciprocal of $\\frac{4}{5}$?    The reciprocal of $\\frac{4}{5}$ is $\\frac{5}{4}$.   "
},
{
  "id": "example-fraction-operations",
  "level": "2",
  "url": "Fractions-3.html#example-fraction-operations",
  "type": "Example",
  "number": "4.2.14",
  "title": "Adding, Subtracting, Multiplying, and Dividing Fractions.",
  "body": " Adding, Subtracting, Multiplying, and Dividing Fractions   Let's perform multiple operations on fractions in one problem. Consider the expression:     To simplify the expression, we follow the order of operations (BEMDAS): Brackets, Exponents, Multiplication and Division (from left to right), Addition and Subtraction (from left to right).  First, we handle the division by changing the operation to multiplication by the reciprocal of the divisor:   Multiplying these fractions and redicing to equivalent fractions where possible:   So the original expression is equivalent to   We have dealt with all of the multiplication and division. Now we can add and subtract from left to right. Noting that and then having a common denominator of 36 we have   Thus, the simplified result of the given expression is .   "
},
{
  "id": "complex-fraction-exponent-example",
  "level": "2",
  "url": "Fractions-3.html#complex-fraction-exponent-example",
  "type": "Example",
  "number": "4.2.15",
  "title": "Simplifying a Complex Fraction with Exponents.",
  "body": " Simplifying a Complex Fraction with Exponents   Simplify the compound fraction and express the result such that there are no negative exponents anywhere.    First, we simplify the denominator using the compound fraction rule: . This simplifies further to . Now our expression becomes . We use the rules of exponents to simplify this to . Finally, applying the negative exponent rule, we get .   "
},
{
  "id": "Fractions-4",
  "level": "1",
  "url": "Fractions-4.html",
  "type": "Section",
  "number": "4.3",
  "title": "Ratios, Rates, and Proportions",
  "body": " Ratios, Rates, and Proportions  Ratios, rates, and proportions are fundamental concepts in mathematics, and they appear in Chapter 5.4 of your book. Let's start by examining what each term means and how they are used in real-life scenarios.   Ratios  Ratios are used to compare two quantities with the same units. For example, if we have three circles and five squares, the ratio of circles to squares is 3:5 or 3 to 5 or \\(\\frac{3}{5}\\). Note that while the notation for ratios can resemble fractions, they are not fractions. A fraction represents a part of a whole, while a ratio compares two quantities, which may not necessarily relate to a part-to-whole relationship. ADD PIC HERE  However, ratios do share some characteristics with fractions, one of them being the concept of equivalence. For example, the ratio 6:3 is equivalent to 2:1 since the quantities can be simplified by multiplying by a number, or dividing by a common factor; in the case of this example, dividing by 3.    Simplify the ratio 6:3.    We can simplify the ratio by dividing both sides by 3. Doing this, we get \\( \\frac{6}{3} : \\frac{3}{3} = 2:1 \\).      Rates  Rates are similar to ratios, but they involve quantities with different units. For example, if we traveled 300 kilometers in five hours, the rate of travel would be 60 kilometers per hour. Rates with a denominator of one are called unit rates and provide a way to easily compare different quantities.    If we traveled 300 kilometers in five hours, what is our speed in kilometers per hour?    We can find the unit rate by dividing the total distance by the total time, so we get \\( \\frac{300 \\, \\text{km}}{5 \\, \\text{hr}} = 60 \\, \\text{km\/hr} \\).      Proportions   A proportion is an equation that states that two ratios are equal. For example, if we know that the ratio of apples to oranges in a fruit basket is 3:2 and there are 12 apples, we can set up a proportion to find the number of oranges. We set up the proportion as follows: 3\/2 = 12\/x. Solving for x (which represents the number of oranges), we find that there are 8 oranges.  Proportions are a powerful tool and are used in a wide variety of mathematical and real-world contexts, from scaling recipes in cooking to predicting population growth in biology.   Cross Multiplication for Solving Equal Proportions  Before we look at some examples, let's explore the idea of cross multiplication and why it works as a way of solving equal proportion problems.  Cross multiplication is a technique used to solve problems involving equal proportions. When two ratios or fractions are set equal to each other, we can use cross multiplication to find the missing value.  Suppose we have two fractions and , where , , , and are numbers, and we want to find the missing value :   To use cross multiplication, we multiply the numerator of one fraction with the denominator of the other fraction, and set it equal to the product of the numerator of the second fraction and the denominator of the first fraction:   This equation can be solved to find the missing value .  But why does cross multiplication work? Think of it this way: when two fractions are equal, they represent the same proportion or ratio. If we could find a common denominator for both fractions, then the numerators must be equal. So, by cross multiplying, we essentially force both fractions to have a common denominator ( ), then equate the numerators, which leads to . This comparison of numerators of fractions with a common denominator is the foundation of why cross multiplication works.    Use cross multiplication to find the value of in the following proportion:     First, set up the cross multiplication equation:   Now, solve for :   Multiply by : .  So, the equation becomes: .  Divide both sides by : .  So, .   Therefore, the value of in the proportion is .       Imagine you are planning a road trip. You know that your car gets 30 miles to the gallon, and you want to know how many gallons of gas you will need to travel 450 miles. You can set up the proportion as follows: 30\/1 = 450\/x, where x is the number of gallons needed.    To find the number of gallons needed, we can cross-multiply and solve for x. This gives us x = 450\/30, so we find that we need 15 gallons of gas for the trip.      Now let's practice with some exercises. Use proportions to solve the following problems:   If a car travels 180 miles in 3 hours, how far can it travel in 5 hours, assuming a constant speed?  A recipe calls for 4 cups of flour for 8 servings. How many cups of flour would you need for 12 servings?     Here are the solutions:   Set up the proportion as follows: 180\/3 = x\/5. Solving for x, we find that the car can travel 300 miles in 5 hours.  Set up the proportion as follows: 4\/8 = x\/12. Solving for x, we find that you would need 6 cups of flour for 12 servings.        Consider a course with the following grading structure:   Assignments are worth 10 points towards the final grade, with an average mark of 65%.  The first midterm is worth 25 points, with a score of 85%.  The second midterm is worth 20 points, with a score of 55%.  The final exam, with an unknown score, contributes the remaining points to a total of 100 points.   If the goal is to achieve a final course mark of 70%, what percentage grade is needed on the final exam?    First, calculate the points earned from each part of the course using proportions:   Assignments: . Solving for by cross multiplication we get that points, or 65% of the assignment points.  Similarly for the first midterm: 25 * 0.85 = 21.25 points, or 85% of the first midterm points  Second midterm: 20 * 0.55 = 11 points, or 55% of the second midterm points   The total points earned so far are 6.5 + 21.25 + 11 = 38.75 points. This is a proportion of 38.75 \/ 100 = 0.3875, or 38.75%, of the total course points.  To reach the goal of 70 points, which is a proportion of 70 \/ 100 = 0.7, or 70%, of the total course points, 70 - 38.75 = 31.25 points are needed.  The final exam is worth the remaining 45 points. To find out the required percentage grade on the final exam, we set up a proportion where 31.25 points is to 45 points as the unknown percentage (x) is to 100%:  31.25 \/ 45 = x \/ 100  Solving for x gives approximately 69.44%. Therefore, a grade of approximately 69.44% is needed on the final exam to reach the total course mark of 70%.      Person A can finish a particular job by themselves in 4 hours. Person B can finish a job by themselves in 5 hours. Person C can finish a job by themselves in 10 hours. Working together, how long does it take them to finish the job?    First, we need to find out how much of the job each person can do in one hour, which is referred to as their work rate. Note that our \"unit\" in this case is the job, and we need to calculate the proportion of the job each person can complete in one hour, thus giving us our work rate.  The work rate of Person A is 1\/4 of the job per hour, for Person B it's 1\/5 of the job per hour, and for Person C it's 1\/10 of the job per hour.  When they work together, their work rates add up. So, the total work rate is (1\/4 + 1\/5 + 1\/10) of the job per hour.  To find out how long it takes them to complete the job working together, we take the reciprocal of the total work rate. This will give us the total time it takes all three to complete the job working together.   First, calculate the total work rate: 1\/4 + 1\/5 + 1\/10 = 1\/2 per hour. This means that working together, they complete half the job in one hour.  Then, we can find the amount of time (in hours) needed by solving the following equation: , where the is the rate of jobs\/hour and 1 is the number of jobs (remember, our unit is a job, so that's what 1 stands for in this case.) .  It's then easy to solve this and get hours.   So, working together, it takes Person A, Person B, and Person C 2 hours to finish the job.      Let's practice more with what we've learned about ratios, rates, and proportions. Here are some problems for you to solve.   If a car travels 240 miles in 4 hours, what is the unit rate (miles per hour)?  Jacky's toy car collection has a ratio of 5:3 of cars to trucks. If she has 20 cars, how many trucks does she have?  In a recipe, the ratio of cups of flour to cups of sugar is 2:1. If you want to make a half batch of the recipe and the full recipe requires 4 cups of flour, how many cups of sugar will you need?  Assume that a class's grading scheme consists of assignments worth 10%, the better midterm is worth 30%, the other midterm is worth 20%, and the final exam is worth 40%. If a student got 85% on the assignments, 80% on their better midterm, 70% on the other midterm, and they want to get an overall mark of 80%, what do they need to score on the final exam?     Here are the solutions:   To find the unit rate, divide the total miles by the total hours. So, 240 miles ÷ 4 hours = .  First, let's create a proportion using the ratio 5:3 (cars:trucks) and the information we know (20 cars and unknown number of trucks). Set up the proportion like this: 5\/3 = 20\/x. Cross-multiply and solve for x, you'll get trucks.  The original recipe has a ratio of 2:1 for flour to sugar. Since you want to make a half batch and the full recipe needs 4 cups of flour, a half batch will require 2 cups of flour. Because the ratio is 2:1, for every 2 cups of flour, you need 1 cup of sugar. So for a half batch, you will need .  Use the idea of proportions to find out how many points the student has already secured in each category (assignments, better midterm, and other midterm), then figure out how many points they need to reach their target grade of 80%. Compute the points needed on the final by subtracting the points already secured from the target points. Convert this into a percentage by creating a proportion with 100, then solve for x. This will be the score they need on the final exam. The exact percentage will depend on the specific values you calculate.      "
},
{
  "id": "Fractions-4-3-4",
  "level": "2",
  "url": "Fractions-4.html#Fractions-4-3-4",
  "type": "Example",
  "number": "4.3.1",
  "title": "",
  "body": "  Simplify the ratio 6:3.    We can simplify the ratio by dividing both sides by 3. Doing this, we get \\( \\frac{6}{3} : \\frac{3}{3} = 2:1 \\).   "
},
{
  "id": "Fractions-4-4-3",
  "level": "2",
  "url": "Fractions-4.html#Fractions-4-4-3",
  "type": "Example",
  "number": "4.3.2",
  "title": "",
  "body": "  If we traveled 300 kilometers in five hours, what is our speed in kilometers per hour?    We can find the unit rate by dividing the total distance by the total time, so we get \\( \\frac{300 \\, \\text{km}}{5 \\, \\text{hr}} = 60 \\, \\text{km\/hr} \\).   "
},
{
  "id": "example-cross-multiplication",
  "level": "2",
  "url": "Fractions-4.html#example-cross-multiplication",
  "type": "Example",
  "number": "4.3.NaN",
  "title": "",
  "body": "  Use cross multiplication to find the value of in the following proportion:     First, set up the cross multiplication equation:   Now, solve for :   Multiply by : .  So, the equation becomes: .  Divide both sides by : .  So, .   Therefore, the value of in the proportion is .   "
},
{
  "id": "Fractions-4-5-2-4",
  "level": "2",
  "url": "Fractions-4.html#Fractions-4-5-2-4",
  "type": "Example",
  "number": "4.3.4",
  "title": "",
  "body": "  Imagine you are planning a road trip. You know that your car gets 30 miles to the gallon, and you want to know how many gallons of gas you will need to travel 450 miles. You can set up the proportion as follows: 30\/1 = 450\/x, where x is the number of gallons needed.    To find the number of gallons needed, we can cross-multiply and solve for x. This gives us x = 450\/30, so we find that we need 15 gallons of gas for the trip.   "
},
{
  "id": "Fractions-4-5-2-5",
  "level": "2",
  "url": "Fractions-4.html#Fractions-4-5-2-5",
  "type": "Checkpoint",
  "number": "[STRUCT].4",
  "title": "",
  "body": "  Now let's practice with some exercises. Use proportions to solve the following problems:   If a car travels 180 miles in 3 hours, how far can it travel in 5 hours, assuming a constant speed?  A recipe calls for 4 cups of flour for 8 servings. How many cups of flour would you need for 12 servings?     Here are the solutions:   Set up the proportion as follows: 180\/3 = x\/5. Solving for x, we find that the car can travel 300 miles in 5 hours.  Set up the proportion as follows: 4\/8 = x\/12. Solving for x, we find that you would need 6 cups of flour for 12 servings.    "
},
{
  "id": "example-grade-calculation",
  "level": "2",
  "url": "Fractions-4.html#example-grade-calculation",
  "type": "Example",
  "number": "4.3.5",
  "title": "",
  "body": "  Consider a course with the following grading structure:   Assignments are worth 10 points towards the final grade, with an average mark of 65%.  The first midterm is worth 25 points, with a score of 85%.  The second midterm is worth 20 points, with a score of 55%.  The final exam, with an unknown score, contributes the remaining points to a total of 100 points.   If the goal is to achieve a final course mark of 70%, what percentage grade is needed on the final exam?    First, calculate the points earned from each part of the course using proportions:   Assignments: . Solving for by cross multiplication we get that points, or 65% of the assignment points.  Similarly for the first midterm: 25 * 0.85 = 21.25 points, or 85% of the first midterm points  Second midterm: 20 * 0.55 = 11 points, or 55% of the second midterm points   The total points earned so far are 6.5 + 21.25 + 11 = 38.75 points. This is a proportion of 38.75 \/ 100 = 0.3875, or 38.75%, of the total course points.  To reach the goal of 70 points, which is a proportion of 70 \/ 100 = 0.7, or 70%, of the total course points, 70 - 38.75 = 31.25 points are needed.  The final exam is worth the remaining 45 points. To find out the required percentage grade on the final exam, we set up a proportion where 31.25 points is to 45 points as the unknown percentage (x) is to 100%:  31.25 \/ 45 = x \/ 100  Solving for x gives approximately 69.44%. Therefore, a grade of approximately 69.44% is needed on the final exam to reach the total course mark of 70%.   "
},
{
  "id": "example-work-problem",
  "level": "2",
  "url": "Fractions-4.html#example-work-problem",
  "type": "Example",
  "number": "4.3.6",
  "title": "",
  "body": "  Person A can finish a particular job by themselves in 4 hours. Person B can finish a job by themselves in 5 hours. Person C can finish a job by themselves in 10 hours. Working together, how long does it take them to finish the job?    First, we need to find out how much of the job each person can do in one hour, which is referred to as their work rate. Note that our \"unit\" in this case is the job, and we need to calculate the proportion of the job each person can complete in one hour, thus giving us our work rate.  The work rate of Person A is 1\/4 of the job per hour, for Person B it's 1\/5 of the job per hour, and for Person C it's 1\/10 of the job per hour.  When they work together, their work rates add up. So, the total work rate is (1\/4 + 1\/5 + 1\/10) of the job per hour.  To find out how long it takes them to complete the job working together, we take the reciprocal of the total work rate. This will give us the total time it takes all three to complete the job working together.   First, calculate the total work rate: 1\/4 + 1\/5 + 1\/10 = 1\/2 per hour. This means that working together, they complete half the job in one hour.  Then, we can find the amount of time (in hours) needed by solving the following equation: , where the is the rate of jobs\/hour and 1 is the number of jobs (remember, our unit is a job, so that's what 1 stands for in this case.) .  It's then easy to solve this and get hours.   So, working together, it takes Person A, Person B, and Person C 2 hours to finish the job.   "
},
{
  "id": "Fractions-4-5-5",
  "level": "2",
  "url": "Fractions-4.html#Fractions-4-5-5",
  "type": "Checkpoint",
  "number": "4.3.7",
  "title": "",
  "body": "  Let's practice more with what we've learned about ratios, rates, and proportions. Here are some problems for you to solve.   If a car travels 240 miles in 4 hours, what is the unit rate (miles per hour)?  Jacky's toy car collection has a ratio of 5:3 of cars to trucks. If she has 20 cars, how many trucks does she have?  In a recipe, the ratio of cups of flour to cups of sugar is 2:1. If you want to make a half batch of the recipe and the full recipe requires 4 cups of flour, how many cups of sugar will you need?  Assume that a class's grading scheme consists of assignments worth 10%, the better midterm is worth 30%, the other midterm is worth 20%, and the final exam is worth 40%. If a student got 85% on the assignments, 80% on their better midterm, 70% on the other midterm, and they want to get an overall mark of 80%, what do they need to score on the final exam?     Here are the solutions:   To find the unit rate, divide the total miles by the total hours. So, 240 miles ÷ 4 hours = .  First, let's create a proportion using the ratio 5:3 (cars:trucks) and the information we know (20 cars and unknown number of trucks). Set up the proportion like this: 5\/3 = 20\/x. Cross-multiply and solve for x, you'll get trucks.  The original recipe has a ratio of 2:1 for flour to sugar. Since you want to make a half batch and the full recipe needs 4 cups of flour, a half batch will require 2 cups of flour. Because the ratio is 2:1, for every 2 cups of flour, you need 1 cup of sugar. So for a half batch, you will need .  Use the idea of proportions to find out how many points the student has already secured in each category (assignments, better midterm, and other midterm), then figure out how many points they need to reach their target grade of 80%. Compute the points needed on the final by subtracting the points already secured from the target points. Convert this into a percentage by creating a proportion with 100, then solve for x. This will be the score they need on the final exam. The exact percentage will depend on the specific values you calculate.    "
},
{
  "id": "decimals",
  "level": "1",
  "url": "decimals.html",
  "type": "Section",
  "number": "5.1",
  "title": "Introduction to Decimals",
  "body": " Introduction to Decimals   Decimal Fractions   Decimal Fractions and Their Relationship to Whole Numbers  We're going to move on and start discussing decimals. Now, decimals really are fractions, and this section will help us understand why and how. We use decimal notation since the behaviour of decimal fractions is very similar to the behaviour of integers in our base ten nuber system.  A decimal fraction is a fraction where the denominator is a power of 10. More formally, a decimal fraction is a rational number where for some . This means the denominators of these fractions are all multiples of 10, which makes them behave a lot like the way our place values to the left of the decimal point operate. In base 10, a unit decimal fraction has 1 as the numerator.  Decimal fractions are a way of expressing quantities that are smaller than a whole unit. In our base-ten number system, each place value to the right of the decimal point represents a fraction of the whole unit. The first digit after the decimal point represents tenths (1\/10), the second digit represents hundredths (1\/100), and so on.  An interesting aspect of decimal fractions is the similarity they share with whole numbers. We know that multiplying a whole number by 10 raises its place value by 1, such as multiplying 10 by gives us . In a similar manner, dividing a decimal fraction by 10 also shifts its place value to the left. For example, dividing by 10 gives us . This relationship holds true as we move along the decimal places and will allow us to perform arithmetic operations similarly to arithmetic with whole numbers.    Examples of decimal fractions are 3\/10, 671\/1000, -55\/1000000, and 372\/100.    When we add up ten unit decimal fractions, we get a unit fraction of the next largest kind. If we add up ten hundredths, we get one tenth.     Representation of Decimals  Decimals are fractions in disguise. Let's look at the number 32.329. This can be written as 32 + 3\/10 + 2\/100 + 9\/1000, but it can also be written in many other forms using decimal fractions.    Write 32.329 as a decimal fraction in ways other than the above.    32.329 can be written as 32329\/1000, using the denominator of the smallest decimal place in our number.  We can also write 32.329 writing the non-decimal part as a whole number and the decimal part using the smallest decimal place value: 32+329\/1000.      Pictorial Representation of Decimals  We can also represent decimals pictorially. Let's consider the decimal 0.32.    Comparing Decimals  To compare decimals, make them have a common denominator. This can be done by ensuring they have the same number of places to the right of the decimal point, and then comparing as normal.    Compare 0.32 and 0.6.    0.32 is 32 hundredths, and 0.6 can be written as 0.60, which represents 60 hundredths. Therefore, 0.60 is larger than 0.32.     "
},
{
  "id": "decimal-fractions-2-3",
  "level": "2",
  "url": "decimals.html#decimal-fractions-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "decimal fraction unit decimal fraction "
},
{
  "id": "decimal-fraction-example1",
  "level": "2",
  "url": "decimals.html#decimal-fraction-example1",
  "type": "Example",
  "number": "5.1.1",
  "title": "",
  "body": "  Examples of decimal fractions are 3\/10, 671\/1000, -55\/1000000, and 372\/100.   "
},
{
  "id": "decimal-representation-example1",
  "level": "2",
  "url": "decimals.html#decimal-representation-example1",
  "type": "Example",
  "number": "5.1.2",
  "title": "",
  "body": "  Write 32.329 as a decimal fraction in ways other than the above.    32.329 can be written as 32329\/1000, using the denominator of the smallest decimal place in our number.  We can also write 32.329 writing the non-decimal part as a whole number and the decimal part using the smallest decimal place value: 32+329\/1000.   "
},
{
  "id": "comparing-decimals-example1",
  "level": "2",
  "url": "decimals.html#comparing-decimals-example1",
  "type": "Example",
  "number": "5.1.3",
  "title": "",
  "body": "  Compare 0.32 and 0.6.    0.32 is 32 hundredths, and 0.6 can be written as 0.60, which represents 60 hundredths. Therefore, 0.60 is larger than 0.32.   "
},
{
  "id": "sec_operations_with_decimals",
  "level": "1",
  "url": "sec_operations_with_decimals.html",
  "type": "Section",
  "number": "5.2",
  "title": "Operations with Decimals",
  "body": " Operations with Decimals   In this section, we will explore the four basic operations with decimals: addition, subtraction, multiplication, and division. We will not only practice these operations but also understand why they work the way they do.    Addition and Subtraction with Decimals  Adding and subtracting decimals is straightforward because decimal fractions behave the same as place value. The key is to line up your place values (digits) and add or subtract right to left, carrying to the next place if necessary.   Subtracting Decimals   Let's subtract 6.29 from 53.071.   GIVE A PIC OF THE ALGORITHM WITH EXPLANATION The process is the same as adding and subtracting whole numbers, but with the added step of aligning the decimal points.      Multiplication with Decimals  When multiplying decimals, we first multiply as if there were no decimals. Then, we count the number of decimal places in both numbers and add them. This sum is the number of decimal places in our answer.   Multiplying Decimals   Let's multiply 53.071 by 6.29.   GIVE A PIC OF THE ALGORITHM WITH EXPLANATION The reason this works is because we can think of decimals as decimal fractions. For instance, 53.071 can be thought of as 53071\/1000 and 6.29 as 629\/100. When we multiply these fractions, we multiply the numerators (53071 * 629) and the denominators (1000 * 100), which gives us the same result as our decimal multiplication.      Division with Decimals  When dividing decimals, we move the decimal place the same number of places in the dividend and divisor so that the divisor is a whole number. Then, we perform the division as if there were no decimals.   Dividing Decimals   Let's divide 3.24 by 0.618.   GIVE A PIC OF THE ALGORITHM WITH EXPLANATION This works because we can think of decimals as decimal fractions. For instance, 3.24 can be thought of as 324\/100 and 0.618 as 618\/1000. When we divide these fractions, we multiply the dividend by the reciprocal of the divisor, which gives us the same result as our decimal division.     "
},
{
  "id": "ex_subtract_decimals",
  "level": "2",
  "url": "sec_operations_with_decimals.html#ex_subtract_decimals",
  "type": "Example",
  "number": "5.2.1",
  "title": "Subtracting Decimals.",
  "body": " Subtracting Decimals   Let's subtract 6.29 from 53.071.   GIVE A PIC OF THE ALGORITHM WITH EXPLANATION The process is the same as adding and subtracting whole numbers, but with the added step of aligning the decimal points.   "
},
{
  "id": "ex_multiply_decimals",
  "level": "2",
  "url": "sec_operations_with_decimals.html#ex_multiply_decimals",
  "type": "Example",
  "number": "5.2.2",
  "title": "Multiplying Decimals.",
  "body": " Multiplying Decimals   Let's multiply 53.071 by 6.29.   GIVE A PIC OF THE ALGORITHM WITH EXPLANATION The reason this works is because we can think of decimals as decimal fractions. For instance, 53.071 can be thought of as 53071\/1000 and 6.29 as 629\/100. When we multiply these fractions, we multiply the numerators (53071 * 629) and the denominators (1000 * 100), which gives us the same result as our decimal multiplication.   "
},
{
  "id": "ex_divide_decimals",
  "level": "2",
  "url": "sec_operations_with_decimals.html#ex_divide_decimals",
  "type": "Example",
  "number": "5.2.3",
  "title": "Dividing Decimals.",
  "body": " Dividing Decimals   Let's divide 3.24 by 0.618.   GIVE A PIC OF THE ALGORITHM WITH EXPLANATION This works because we can think of decimals as decimal fractions. For instance, 3.24 can be thought of as 324\/100 and 0.618 as 618\/1000. When we divide these fractions, we multiply the dividend by the reciprocal of the divisor, which gives us the same result as our decimal division.   "
},
{
  "id": "terminating-repeating-decimals",
  "level": "1",
  "url": "terminating-repeating-decimals.html",
  "type": "Section",
  "number": "5.3",
  "title": "Terminating and Repeating Decimals",
  "body": " Terminating and Repeating Decimals   In this section, our goal is to understand the relationship between rational numbers and their decimal representations. Specifically, we aim to show that a rational number is equivalent to a terminating decimal if and only if it is equivalent to a decimal fraction. Conversely, a rational number is equivalent to a repeating decimal if and only if it is not equivalent to a decimal fraction. This understanding is crucial for elementary school mathematics teachers as it forms the basis for many mathematical operations and concepts.    Terminating Decimals  A terminating decimal is a decimal number that has a finite number of digits. In other words, it is a decimal that ends or \"terminates\". It can be expressed as a fraction where the denominator is a power of 10.   Examples of Terminating Decimals  Here are some examples of fractions that are equivalent to terminating decimals:  1\/2 = 0.5: Here, we can say that 1\/2 is equivalent to the fraction 5\/10.  3\/4 = 0.75: When we divide 3 by 4, we get 0.75, which is a terminating decimal.  7\/8 = 0.875: Dividing 7 by 8 gives us 0.875, another terminating decimal.  3\/15 = 0.2: Even though 15 is not a power of 10, it is equivalent to a fraction that is; the fraction 3\/15 simplifies to 1\/5, and this is equivalent to the decimal fraction 20\/100, and thus a terminating decimal.    And here are examples of how to write a terminating decimal as a fraction:  0.5 = 5\/10 = 1\/2: Here, we express 0.5 as the fraction 5\/10, which simplifies to 1\/2.  0.75 = 75\/100 = 3\/4: We can express 0.75 as the fraction 75\/100, which simplifies to 3\/4.  0.875 = 875\/1000 = 7\/8: The decimal 0.875 can be expressed as the fraction 875\/1000, which simplifies to 7\/8.  0.2 = 2\/10 = 1\/5: The decimal 0.2 can be expressed as the fraction 2\/10, which simplifies to 1\/5.     Now, let's prove that a rational number is equivalent to a terminating decimal* if and only if it is equivalent to a decimal fraction.  *Note: this is not quite correct, as we'll see later that decimals that have repeating 9s to the right are equivalent to terminating decimals. We will discuss this in more depth later.   Proof  Since this is an \"if and only if\" statement in the form , we have to prove two results, and . Let's denote a rational number as a\/b, where a and b are integers and b ≠ 0. We want to show that a\/b is equivalent to a terminating decimal if and only if it is equivalent to a decimal fraction.  Suppose a\/b is equivalent to a terminating decimal. Then, by definition of a terminating decimal, a\/b can be written as a decimal with a finite number of digits. This means that a\/b can be expressed as a decimal fraction, because a decimal fraction is a fraction where the denominator is a power of 10, and any terminating decimal can be expressed in this form.  Conversely, suppose a\/b is equivalent to a decimal fraction. Then a\/b can be expressed as a decimal with a finite number of digits, because a decimal fraction is a fraction where the denominator is a power of 10, and any fraction with a denominator that is a power of 10 can be expressed as a terminating decimal. Therefore, a\/b is equivalent to a terminating decimal.  Putting both results together, a rational number is equivalent to a terminating decimal if and only if it is equivalent to a decimal fraction.   Let's look at a non-example; 7\/15. Since and 3 and 7 share no common factors, there is no way of \"cancelling\" the factor of 3 in the denominator. Thus there is nothing we can multiply both the numerator and denominator by so that both are still integers and the denominator does not have a factor of 3, and thus it isn't equivalent to a decimal fraction, which has denominators of the form .    Expressing a Fraction as a Repeating Decimal Using Long Division  If a fraction is not equivalent to a decimal fraction, it can be expressed as a repeating decimal. One way to do this is by using long division. During this process, we may notice that we \"run out\" of non-zero remainders before the remainders must repeat, indicating a repeating decimal.  Why is this the case? Well, imagine you are dividing by some non-zero integer . There are only finitely many possible remainders: .  Now, we can convert a fraction a\/b to its decimal representation by long division. If we do get a reminder of 0, then we know that the decimal is a terminating decimal. So imagine that a\/b cannot be expressed as a terminating decimal. Then we will never see the remainder 0, and thus we only have possible remainders when performing each partial division in the long division algorithm. Note that we can add as many zeros to the right (after the decimal and after all non-zero decimal digits); e.g. 20.201 = 20.2010000... Let's call these the trailing zeroes.   Now when we get to using the place values of the trailing zeros, every time we \"bring down\" a digit from a new place value, that digit will be 0. If, at this point, we keep track of remainders, we note that we have at most unique remainders before one must repeat. At the point of repetition, our \"previous work\" will repeat over and over again, since we will only end up in situations we have seen before and thus the digits of decimal representation of our fraction between the repeated remainders will repeat over and over again to the right. Thus, we know that if fraction is not equivalent to a terminating decimal, it must be a repeating decimal.   Example: Expressing 2\/7 as a Repeating Decimal Using Long Division  Let's express the fraction 2\/7 as a repeating decimal using long division.  Divide 2 by 7. Since 2 is less than 7, we add a decimal point and a zero to the right of 2, making it 20.  Now, divide 20 by 7. The result is 2 with a remainder of 6.  Add another zero to the right of the remainder, making it 60.  Divide 60 by 7. The result is 8 with a remainder of 4.  Repeat this process. Each time, we add a zero to the right of the remainder and divide by 7.  Eventually, we notice that the remainders start to repeat (and must repeat, since there are only a finite number of remainders), indicating a repeating decimal.  So, 2\/7 = 0. .    Example: Expressing 6\/13 as a Repeating Decimal Using Long Division  Let's express the fraction 6\/13 as a repeating decimal using long division.  Divide 6 by 13. Since 6 is less than 13, we add a decimal point and a zero to the right of 6, making it 60.  Now, divide 60 by 13. The result is 4 with a remainder of 8.  Add another zero to the right of the remainder, making it 80.  Divide 80 by 13. The result is 6 with a remainder of 2.  Repeat this process. Each time, we add a zero to the right of the remainder and divide by 13.  Eventually, we notice that the remainders start to repeat, indicating a repeating decimal.  So, 6\/13 = 0. .     Representing All Repeating Decimals as Rational Numbers   In this subsection, we will show that all repeating decimals can be represented by rational numbers. We will start by demonstrating that 0.9999... = 1 using decimal and fraction notation. Then, we will define the repetend and period of a repeated decimal and provide examples.    Can Repeating Decimals Equal 1?  Let's consider the sum of 1\/3 + 1\/3 + 1\/3 in decimal notation and fraction notation.  In decimal notation, 1\/3 is equivalent to 0.333..., so the sum is 0.333... + 0.333... + 0.333... = 0.999.... ADD PIC OF THIS ADDITION  In fraction notation, the sum is 1\/3 + 1\/3 + 1\/3 = 1.  Therefore, 0.999... = 1.  Another way to look at this is to ask yourself \"if , what would I add to to make it equal 1? Any positive number that you think of adding would be too big!    Repetend and Period of a Repeated Decimal  The repetend of a repeating decimal is the first instance of the shortest group of digits that repeat indefinitely. It's important to note that the repetend is the smallest repeating unit in the decimal expansion. The period of a repeating decimal is the number of digits in the repetend.   Examples of Non-Repetends  Here are some examples of non-repetends in repeating decimals:   In the repeating decimal 0. , the number 142857 is the repetend. The number 142 is not a repetend because it is not the shortest group of repeating digits.    In the repeating decimal 0. , the number 27 is the repetend. The number 2727 is not the repetend because it is not the shortest group of repeating digits. The number 72 is not the repetend since it is not the first instance of repeating digits. So we would not write or        Examples of Repetend and Period  Here are two examples of identifying the repetend and period of a repeating decimal:   In the repeating decimal 0. , the repetend is 3 and the period is 1.    In the repeating decimal 0.00 , the repetend starts in the thousandths place and is 142857, and the period is 6.   >     Converting a Repeating Decimal to a Fraction  To convert a repeating decimal to a fraction, we can use the following algorithm:  Let x be the number in decimal form.  Let p be the period of the repetend.  Calculate (10^p)x - x in repeated decimal form.  Solve for x.  Convert any numerators and denominators to integers by multiplying both by the appropriate power of 10 to clear decimal places.  Simplify by converting the fraction to lowest terms.     Example: Converting a Repeating Decimal to a Fraction  Let's convert the repeating decimal 0. to a fraction using the above algorithm:  Let x = 0. .  The period of the repetend is 1, so p = 1.  Calculate (10^p)x - x = 10x - x = 9x. In decimal form, this is 3.333... - 0.333... = 3.  Solve for x: x = 3\/9. This is the equation we get when we equate the decimal form and the fraction form.  Convert the numerator and denominator to integers by multiplying both by 1 (no need to clear decimal places in this case).  Simplify by converting the fraction to lowest terms: x = 1\/3.  So, the repeating decimal 0. is equal to the fraction 1\/3.  Let's convert another repeating decimal, 0. , to a fraction:  Let x = 0. .  The period of the repetend is 2, so p = 2.  Calculate (10^p)x - x = 100x - x = 99x. In decimal form, this is 27.2727... - 0.2727... = 27.  Solve for x: x = 27\/99.  Convert the numerator and denominator to integers by multiplying both by 1 (no need to clear decimal places in this case).  Simplify by converting the fraction to lowest terms: x = 3\/11.  So, the repeating decimal 0. is equal to the fraction 3\/11.    More Examples of Converting Repeating Decimals to Fractions  Let's convert more repeating decimals to fractions using the algorithm we discussed earlier:     Convert 0.5 to a fraction:  Let x = 0.5. Notice that this is a terminating decimal, not a repeating decimal. However, we can still use our method to convert it to a fraction.  Since there's no repetend, we can say p = 0.  Calculate (10^p)x - x = x - x = 0. In decimal form, this is 0.5 - 0.5 = 0.  Solve for x: x = 0\/1.  Convert the numerator and denominator to integers by multiplying both by 1 (no need to clear decimal places in this case).  Simplify by converting the fraction to lowest terms: x = 0.  So, the decimal 0.5 is equal to the fraction 1\/2.    Convert 0.01 to a fraction:  Let x = 0.01 .  The period of the repetend is 1, so p = 1.  Calculate (10^p)x - x = 10x - x = 9x. In decimal form, this is 0.014444... - 0.0144 = 0.0004.  Solve for x: x = 0.0004\/9.  Convert the numerator and denominator to integers by multiplying both by 10000 (to clear four decimal places): x = 4\/90000.  Simplify by converting the fraction to lowest terms: x = 1\/22500.  So, the repeating decimal 0.01 is equal to the fraction 1\/22500.    Convert 1. to a fraction:  Let x = 1. . This is an improper fraction because the decimal is greater than 1.  The period of the repetend is 1, so p = 1.  Calculate (10^p)x - x = 10x - x = 9x. In decimal form, this is 16.666... - 1.666... = 15.  Solve for x: x = 15\/9.  Convert the numerator and denominator to integers by multiplying both by 1 (no need to clear decimal places in this case).  Simplify by converting the fraction to lowest terms: x = 5\/3.  So, the repeating decimal 1. is equal to the fraction 5\/3.    Convert -0. to a fraction:  Let x = -0. . This is a negative number.  The period of the repetend is 1, so p = 1.  Calculate (10^p)x - x = 10x - x = 9x. In decimal form, this is -8.888... - (-0.888...) = -8.  Solve for x: x = -8\/9.  Convert the numerator and denominator to integers by multiplying both by 1 (no need to clear decimal places in this case).  Simplify by converting the fraction to lowest terms: x = -8\/9.  So, the repeating decimal -0. is equal to the fraction -8\/9.      A natural question is if a number has two or more different ways of expressing it using decimals. Let's explore this in the next example.     Consider the decimal number . Using the procedure above, determine the fraction represented by this decimal. Do you know of another way of expressing this fraction using decimals?    Using the example above as a guide, conjecture a second decimal expression for the fraction . Then check that this is correct.    Using the ideas above, make a conjecture about when two decimal expressions represent the same fraction. Do your best to prove\/justify why this is the case.          "
},
{
  "id": "terminating-decimals-2",
  "level": "2",
  "url": "terminating-repeating-decimals.html#terminating-decimals-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "terminating decimal "
},
{
  "id": "example-terminating-decimal",
  "level": "2",
  "url": "terminating-repeating-decimals.html#example-terminating-decimal",
  "type": "Example",
  "number": "5.3.1",
  "title": "Examples of Terminating Decimals.",
  "body": " Examples of Terminating Decimals  Here are some examples of fractions that are equivalent to terminating decimals:  1\/2 = 0.5: Here, we can say that 1\/2 is equivalent to the fraction 5\/10.  3\/4 = 0.75: When we divide 3 by 4, we get 0.75, which is a terminating decimal.  7\/8 = 0.875: Dividing 7 by 8 gives us 0.875, another terminating decimal.  3\/15 = 0.2: Even though 15 is not a power of 10, it is equivalent to a fraction that is; the fraction 3\/15 simplifies to 1\/5, and this is equivalent to the decimal fraction 20\/100, and thus a terminating decimal.    And here are examples of how to write a terminating decimal as a fraction:  0.5 = 5\/10 = 1\/2: Here, we express 0.5 as the fraction 5\/10, which simplifies to 1\/2.  0.75 = 75\/100 = 3\/4: We can express 0.75 as the fraction 75\/100, which simplifies to 3\/4.  0.875 = 875\/1000 = 7\/8: The decimal 0.875 can be expressed as the fraction 875\/1000, which simplifies to 7\/8.  0.2 = 2\/10 = 1\/5: The decimal 0.2 can be expressed as the fraction 2\/10, which simplifies to 1\/5.    "
},
{
  "id": "proof-terminating-decimal",
  "level": "2",
  "url": "terminating-repeating-decimals.html#proof-terminating-decimal",
  "type": "Proof",
  "number": "5.3.1.1",
  "title": "Proof.",
  "body": " Proof  Since this is an \"if and only if\" statement in the form , we have to prove two results, and . Let's denote a rational number as a\/b, where a and b are integers and b ≠ 0. We want to show that a\/b is equivalent to a terminating decimal if and only if it is equivalent to a decimal fraction.  Suppose a\/b is equivalent to a terminating decimal. Then, by definition of a terminating decimal, a\/b can be written as a decimal with a finite number of digits. This means that a\/b can be expressed as a decimal fraction, because a decimal fraction is a fraction where the denominator is a power of 10, and any terminating decimal can be expressed in this form.  Conversely, suppose a\/b is equivalent to a decimal fraction. Then a\/b can be expressed as a decimal with a finite number of digits, because a decimal fraction is a fraction where the denominator is a power of 10, and any fraction with a denominator that is a power of 10 can be expressed as a terminating decimal. Therefore, a\/b is equivalent to a terminating decimal.  Putting both results together, a rational number is equivalent to a terminating decimal if and only if it is equivalent to a decimal fraction.  "
},
{
  "id": "repeating-decimals-long-division-4",
  "level": "2",
  "url": "terminating-repeating-decimals.html#repeating-decimals-long-division-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "trailing zeroes. "
},
{
  "id": "example-long-division-2-7",
  "level": "2",
  "url": "terminating-repeating-decimals.html#example-long-division-2-7",
  "type": "Example",
  "number": "5.3.2",
  "title": "Example: Expressing 2\/7 as a Repeating Decimal Using Long Division.",
  "body": " Example: Expressing 2\/7 as a Repeating Decimal Using Long Division  Let's express the fraction 2\/7 as a repeating decimal using long division.  Divide 2 by 7. Since 2 is less than 7, we add a decimal point and a zero to the right of 2, making it 20.  Now, divide 20 by 7. The result is 2 with a remainder of 6.  Add another zero to the right of the remainder, making it 60.  Divide 60 by 7. The result is 8 with a remainder of 4.  Repeat this process. Each time, we add a zero to the right of the remainder and divide by 7.  Eventually, we notice that the remainders start to repeat (and must repeat, since there are only a finite number of remainders), indicating a repeating decimal.  So, 2\/7 = 0. .  "
},
{
  "id": "example-long-division-6-13",
  "level": "2",
  "url": "terminating-repeating-decimals.html#example-long-division-6-13",
  "type": "Example",
  "number": "5.3.3",
  "title": "Example: Expressing 6\/13 as a Repeating Decimal Using Long Division.",
  "body": " Example: Expressing 6\/13 as a Repeating Decimal Using Long Division  Let's express the fraction 6\/13 as a repeating decimal using long division.  Divide 6 by 13. Since 6 is less than 13, we add a decimal point and a zero to the right of 6, making it 60.  Now, divide 60 by 13. The result is 4 with a remainder of 8.  Add another zero to the right of the remainder, making it 80.  Divide 80 by 13. The result is 6 with a remainder of 2.  Repeat this process. Each time, we add a zero to the right of the remainder and divide by 13.  Eventually, we notice that the remainders start to repeat, indicating a repeating decimal.  So, 6\/13 = 0. .  "
},
{
  "id": "repetend-and-period-2",
  "level": "2",
  "url": "terminating-repeating-decimals.html#repetend-and-period-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "repetend period "
},
{
  "id": "example-non-repetends",
  "level": "2",
  "url": "terminating-repeating-decimals.html#example-non-repetends",
  "type": "Example",
  "number": "5.3.4",
  "title": "Examples of Non-Repetends.",
  "body": " Examples of Non-Repetends  Here are some examples of non-repetends in repeating decimals:   In the repeating decimal 0. , the number 142857 is the repetend. The number 142 is not a repetend because it is not the shortest group of repeating digits.    In the repeating decimal 0. , the number 27 is the repetend. The number 2727 is not the repetend because it is not the shortest group of repeating digits. The number 72 is not the repetend since it is not the first instance of repeating digits. So we would not write or      "
},
{
  "id": "example-repetend-and-period",
  "level": "2",
  "url": "terminating-repeating-decimals.html#example-repetend-and-period",
  "type": "Example",
  "number": "5.3.5",
  "title": "Examples of Repetend and Period.",
  "body": " Examples of Repetend and Period  Here are two examples of identifying the repetend and period of a repeating decimal:   In the repeating decimal 0. , the repetend is 3 and the period is 1.    In the repeating decimal 0.00 , the repetend starts in the thousandths place and is 142857, and the period is 6.   >  "
},
{
  "id": "example-converting-repeating-decimal-to-fraction",
  "level": "2",
  "url": "terminating-repeating-decimals.html#example-converting-repeating-decimal-to-fraction",
  "type": "Example",
  "number": "5.3.6",
  "title": "Example: Converting a Repeating Decimal to a Fraction.",
  "body": " Example: Converting a Repeating Decimal to a Fraction  Let's convert the repeating decimal 0. to a fraction using the above algorithm:  Let x = 0. .  The period of the repetend is 1, so p = 1.  Calculate (10^p)x - x = 10x - x = 9x. In decimal form, this is 3.333... - 0.333... = 3.  Solve for x: x = 3\/9. This is the equation we get when we equate the decimal form and the fraction form.  Convert the numerator and denominator to integers by multiplying both by 1 (no need to clear decimal places in this case).  Simplify by converting the fraction to lowest terms: x = 1\/3.  So, the repeating decimal 0. is equal to the fraction 1\/3.  Let's convert another repeating decimal, 0. , to a fraction:  Let x = 0. .  The period of the repetend is 2, so p = 2.  Calculate (10^p)x - x = 100x - x = 99x. In decimal form, this is 27.2727... - 0.2727... = 27.  Solve for x: x = 27\/99.  Convert the numerator and denominator to integers by multiplying both by 1 (no need to clear decimal places in this case).  Simplify by converting the fraction to lowest terms: x = 3\/11.  So, the repeating decimal 0. is equal to the fraction 3\/11.  "
},
{
  "id": "example-more-conversions",
  "level": "2",
  "url": "terminating-repeating-decimals.html#example-more-conversions",
  "type": "Example",
  "number": "5.3.7",
  "title": "More Examples of Converting Repeating Decimals to Fractions.",
  "body": " More Examples of Converting Repeating Decimals to Fractions  Let's convert more repeating decimals to fractions using the algorithm we discussed earlier:     Convert 0.5 to a fraction:  Let x = 0.5. Notice that this is a terminating decimal, not a repeating decimal. However, we can still use our method to convert it to a fraction.  Since there's no repetend, we can say p = 0.  Calculate (10^p)x - x = x - x = 0. In decimal form, this is 0.5 - 0.5 = 0.  Solve for x: x = 0\/1.  Convert the numerator and denominator to integers by multiplying both by 1 (no need to clear decimal places in this case).  Simplify by converting the fraction to lowest terms: x = 0.  So, the decimal 0.5 is equal to the fraction 1\/2.    Convert 0.01 to a fraction:  Let x = 0.01 .  The period of the repetend is 1, so p = 1.  Calculate (10^p)x - x = 10x - x = 9x. In decimal form, this is 0.014444... - 0.0144 = 0.0004.  Solve for x: x = 0.0004\/9.  Convert the numerator and denominator to integers by multiplying both by 10000 (to clear four decimal places): x = 4\/90000.  Simplify by converting the fraction to lowest terms: x = 1\/22500.  So, the repeating decimal 0.01 is equal to the fraction 1\/22500.    Convert 1. to a fraction:  Let x = 1. . This is an improper fraction because the decimal is greater than 1.  The period of the repetend is 1, so p = 1.  Calculate (10^p)x - x = 10x - x = 9x. In decimal form, this is 16.666... - 1.666... = 15.  Solve for x: x = 15\/9.  Convert the numerator and denominator to integers by multiplying both by 1 (no need to clear decimal places in this case).  Simplify by converting the fraction to lowest terms: x = 5\/3.  So, the repeating decimal 1. is equal to the fraction 5\/3.    Convert -0. to a fraction:  Let x = -0. . This is a negative number.  The period of the repetend is 1, so p = 1.  Calculate (10^p)x - x = 10x - x = 9x. In decimal form, this is -8.888... - (-0.888...) = -8.  Solve for x: x = -8\/9.  Convert the numerator and denominator to integers by multiplying both by 1 (no need to clear decimal places in this case).  Simplify by converting the fraction to lowest terms: x = -8\/9.  So, the repeating decimal -0. is equal to the fraction -8\/9.     "
},
{
  "id": "converting-repeating-decimal-to-fraction-6",
  "level": "2",
  "url": "terminating-repeating-decimals.html#converting-repeating-decimal-to-fraction-6",
  "type": "Example",
  "number": "5.3.8",
  "title": "",
  "body": "   Consider the decimal number . Using the procedure above, determine the fraction represented by this decimal. Do you know of another way of expressing this fraction using decimals?    Using the example above as a guide, conjecture a second decimal expression for the fraction . Then check that this is correct.    Using the ideas above, make a conjecture about when two decimal expressions represent the same fraction. Do your best to prove\/justify why this is the case.       "
},
{
  "id": "percent-and-percent-change",
  "level": "1",
  "url": "percent-and-percent-change.html",
  "type": "Section",
  "number": "5.4",
  "title": "Percent and Percent Change",
  "body": " Percent and Percent Change  Understanding percent and percent change is crucial in various aspects of mathematics, finance, and everyday life. This section will explain what percent is, how to work with percents in different contexts, and how to distinguish between percent change and percentage point change. Whether you are calculating discounts during a sale, analyzing statistical data, or understanding financial growth, a firm grasp of these concepts is essential. By the end of this section, you will be equipped with the skills to handle a variety of problems involving percents and their changes.   Introduction to Percent  A percent is a way of expressing a number as a fraction of 100. The word \"percent\" comes from the Latin \"per centum,\" which means \"by the hundred.\" This means that percents are inherently tied to the concept of fractions and ratios. For instance, 50% is equivalent to or . In practical terms, this means that 50% represents half of a given quantity. Understanding percents as fractions helps in visualizing parts of a whole, making it easier to compare and analyze data. Similarly, percents can also be viewed as ratios, where 50% means 50 parts out of 100 parts. This ratio perspective is particularly useful in fields like statistics and probability, where relationships between quantities are often examined.   Converting Ratios to Percents  To convert a ratio to a percent, multiply the ratio by 100. This conversion process involves scaling the ratio to a common base of 100, making it easier to understand and compare. For example, the ratio 3:4 can be converted to a percent as follows: . This means that 3 out of 4 parts is the same as 75 out of 100 parts, which is a more intuitive way to grasp the proportion. This method is particularly useful in various practical scenarios such as interpreting statistical data, comparing success rates, or even understanding sports statistics.   Example: Ratios to Percents  Convert the ratio 2:5 to a percent. This requires us to scale the given ratio to a base of 100 to find an equivalent percent value.    Thus, the ratio 2:5 is equivalent to 40%, meaning 2 parts out of 5 is the same as 40 parts out of 100. This method of conversion is essential in comparing ratios in a standardized format that is widely understood.      Converting Fractions to Percents  To convert a fraction to a percent, first convert the fraction to a decimal and then multiply by 100. This two-step process involves dividing the numerator by the denominator to get a decimal, then scaling the decimal to a percentage. For example, to convert to a percent: . This conversion is important because it translates the fraction into a percentage, which is a more familiar and easily interpretable format for most people. This method is widely used in various fields such as finance, education, and health, where data is often presented in percent form for better clarity and impact.   Example: Fractions to Percents  Convert the fraction to a percent. This involves converting the fraction to a decimal and then scaling it to a percent.    Therefore, the fraction is equivalent to 15%. This method highlights the ease with which we can understand fractions in a percent format, facilitating better communication and comprehension of data in everyday contexts.       Visualizing Percents Using a Bar Diagram  A bar diagram is a useful tool for visualizing percents. By representing the whole as a bar divided into 100 equal parts, we can easily see how a certain percentage compares to the whole. This visual representation makes it easier to grasp the concept of percents and their relative sizes. Bar diagrams are particularly effective in educational settings, where visual aids can enhance understanding. They also find use in data presentation, where complex numerical information can be made more accessible and engaging through visual means. By translating numerical data into visual forms, bar diagrams help bridge the gap between abstract concepts and tangible understanding.   Example: Using a Bar Diagram  If 30% of a class of 40 students are boys, how many boys are in the class? This problem involves using a bar diagram to visualize the percentage and determine the actual number of boys.   Using a bar diagram, we represent the whole class of 40 students as a bar divided into 100 parts. Each part represents 0.4 students (since 40 students \/ 100 parts = 0.4 students per part). By identifying 30% of the bar, we can determine the number of boys.   Therefore, there are 12 boys in the class. This example shows how bar diagrams can be used to break down and solve percentage problems, making the data more comprehensible and easier to work with.     Example: Using a Bar Diagram  25% of a certain amount is 50. What is the whole amount? This problem uses a bar diagram to visualize the percentage and back-calculate to find the total amount.   Using a bar diagram, we know that 25% corresponds to 50. We need to find the total amount (100%). By understanding that 25% is one-quarter of the total, we can determine the whole by scaling up from the given percentage.   Thus, the whole amount is 200. This example illustrates how bar diagrams can simplify complex percentage calculations by providing a clear visual framework for solving the problem.      Percent vs. Percent Change  Percent represents a part of a whole, while percent change represents the degree of change over time. Percent change is calculated by taking the difference between the new value and the old value, dividing by the old value, and then multiplying by 100. Understanding the difference between percent and percent change is critical in contexts such as financial analysis, where it's important to distinguish between the portion of a whole and the rate of change over a period. Percent change provides insights into trends, growth rates, and the relative impact of changes in values, which is essential for making informed decisions.   Example: Percent Change  A stock price increases from $50 to $75. What is the percent change? This problem involves calculating the relative change in value to understand the growth of the stock price.    Therefore, the percent change is 50%. This example highlights how percent change provides a clear measure of growth, indicating that the stock price increased by half its original value.     Example: Percent Change  A population decreases from 2000 to 1500. What is the percent change? This problem requires calculating the relative change to understand the decrease in population.    Therefore, the percent change is -25%. This negative value indicates a decrease in the population. This example demonstrates how percent change can effectively communicate both increases and decreases in values, providing a clear picture of how quantities evolve over time.      Percent Change vs. Percentage Point Change  Percent change and percentage point change are different concepts that are often confused. Percent change measures the relative change between two values as a percentage of the original value. It is useful for understanding the proportional increase or decrease. On the other hand, percentage point change measures the absolute change between two percentages. This is particularly important in fields such as economics and public policy, where the distinction between relative and absolute changes can have significant implications. Understanding the difference helps in accurately interpreting data and making informed decisions based on the nature of the change.   Example: Percentage Point Change  The interest rate increases from 2% to 5%. What is the percentage point change? This problem involves calculating the absolute change in the interest rate.    Therefore, the percentage point change is 3 percentage points. This example highlights the importance of distinguishing between percent change and percentage point change, as the latter measures the direct difference between percentages, providing a straightforward understanding of shifts in rates.     Example: Percentage Point Change  The unemployment rate decreases from 8% to 6%. What is the percentage point change? This problem requires calculating the absolute change in the unemployment rate.    Therefore, the percentage point change is 2 percentage points. This example demonstrates how percentage point change provides a clear measure of absolute differences in rates, which is essential for accurately interpreting economic indicators and other statistical data.     "
},
{
  "id": "example-ratios-to-percents",
  "level": "2",
  "url": "percent-and-percent-change.html#example-ratios-to-percents",
  "type": "Example",
  "number": "5.4.1",
  "title": "Example: Ratios to Percents.",
  "body": " Example: Ratios to Percents  Convert the ratio 2:5 to a percent. This requires us to scale the given ratio to a base of 100 to find an equivalent percent value.    Thus, the ratio 2:5 is equivalent to 40%, meaning 2 parts out of 5 is the same as 40 parts out of 100. This method of conversion is essential in comparing ratios in a standardized format that is widely understood.   "
},
{
  "id": "example-fractions-to-percents",
  "level": "2",
  "url": "percent-and-percent-change.html#example-fractions-to-percents",
  "type": "Example",
  "number": "5.4.2",
  "title": "Example: Fractions to Percents.",
  "body": " Example: Fractions to Percents  Convert the fraction to a percent. This involves converting the fraction to a decimal and then scaling it to a percent.    Therefore, the fraction is equivalent to 15%. This method highlights the ease with which we can understand fractions in a percent format, facilitating better communication and comprehension of data in everyday contexts.   "
},
{
  "id": "bar-diagram-example-1",
  "level": "2",
  "url": "percent-and-percent-change.html#bar-diagram-example-1",
  "type": "Example",
  "number": "5.4.3",
  "title": "Example: Using a Bar Diagram.",
  "body": " Example: Using a Bar Diagram  If 30% of a class of 40 students are boys, how many boys are in the class? This problem involves using a bar diagram to visualize the percentage and determine the actual number of boys.   Using a bar diagram, we represent the whole class of 40 students as a bar divided into 100 parts. Each part represents 0.4 students (since 40 students \/ 100 parts = 0.4 students per part). By identifying 30% of the bar, we can determine the number of boys.   Therefore, there are 12 boys in the class. This example shows how bar diagrams can be used to break down and solve percentage problems, making the data more comprehensible and easier to work with.   "
},
{
  "id": "bar-diagram-example-2",
  "level": "2",
  "url": "percent-and-percent-change.html#bar-diagram-example-2",
  "type": "Example",
  "number": "5.4.4",
  "title": "Example: Using a Bar Diagram.",
  "body": " Example: Using a Bar Diagram  25% of a certain amount is 50. What is the whole amount? This problem uses a bar diagram to visualize the percentage and back-calculate to find the total amount.   Using a bar diagram, we know that 25% corresponds to 50. We need to find the total amount (100%). By understanding that 25% is one-quarter of the total, we can determine the whole by scaling up from the given percentage.   Thus, the whole amount is 200. This example illustrates how bar diagrams can simplify complex percentage calculations by providing a clear visual framework for solving the problem.   "
},
{
  "id": "percent-change-example-1",
  "level": "2",
  "url": "percent-and-percent-change.html#percent-change-example-1",
  "type": "Example",
  "number": "5.4.5",
  "title": "Example: Percent Change.",
  "body": " Example: Percent Change  A stock price increases from $50 to $75. What is the percent change? This problem involves calculating the relative change in value to understand the growth of the stock price.    Therefore, the percent change is 50%. This example highlights how percent change provides a clear measure of growth, indicating that the stock price increased by half its original value.   "
},
{
  "id": "percent-change-example-2",
  "level": "2",
  "url": "percent-and-percent-change.html#percent-change-example-2",
  "type": "Example",
  "number": "5.4.6",
  "title": "Example: Percent Change.",
  "body": " Example: Percent Change  A population decreases from 2000 to 1500. What is the percent change? This problem requires calculating the relative change to understand the decrease in population.    Therefore, the percent change is -25%. This negative value indicates a decrease in the population. This example demonstrates how percent change can effectively communicate both increases and decreases in values, providing a clear picture of how quantities evolve over time.   "
},
{
  "id": "percentage-point-change-example-1",
  "level": "2",
  "url": "percent-and-percent-change.html#percentage-point-change-example-1",
  "type": "Example",
  "number": "5.4.7",
  "title": "Example: Percentage Point Change.",
  "body": " Example: Percentage Point Change  The interest rate increases from 2% to 5%. What is the percentage point change? This problem involves calculating the absolute change in the interest rate.    Therefore, the percentage point change is 3 percentage points. This example highlights the importance of distinguishing between percent change and percentage point change, as the latter measures the direct difference between percentages, providing a straightforward understanding of shifts in rates.   "
},
{
  "id": "percentage-point-change-example-2",
  "level": "2",
  "url": "percent-and-percent-change.html#percentage-point-change-example-2",
  "type": "Example",
  "number": "5.4.8",
  "title": "Example: Percentage Point Change.",
  "body": " Example: Percentage Point Change  The unemployment rate decreases from 8% to 6%. What is the percentage point change? This problem requires calculating the absolute change in the unemployment rate.    Therefore, the percentage point change is 2 percentage points. This example demonstrates how percentage point change provides a clear measure of absolute differences in rates, which is essential for accurately interpreting economic indicators and other statistical data.   "
},
{
  "id": "sec-IntroductoryConcepts",
  "level": "1",
  "url": "sec-IntroductoryConcepts.html",
  "type": "Section",
  "number": "6.1",
  "title": "Introductory Concepts",
  "body": " Introductory Concepts   Introduction   Intro to Divisibility  Divisibility is a fundamental concept in mathematics. It describes one type of fundamental relationship between two integers, as we can think of a factor of a number being a \"building block\" of the number it is a factor of. Note that in this chapter, we will predominately study divisibility properties of whole numbers, but these can be easily extended to integers. From now on, unless otherwise stated, any number that appears is a whole number; that is, for all numbers in this chapter, .    A number is said to be divisible by another number if there exists a number such that . This is often expressed in various ways, such as \" is a factor of \", \" divides \", \" is a multiple of \", or \" is divisible by \". We say that is a proper factor of if and .     We know that , so we know that divides . We can also say is a factor of , is a multiple of , and is divisible by . These all express the same information. Additionally, is a proper factor of while and are not.  You've probably spotted that we can say the same things about as we did about . This idea gives us our first theorem, that we will state and prove more formally after we develop some notation for the concept of divisibility.   In mathematics, the \"divides\" symbol is represented as \"|\" and the \"does not divide\" symbol is represented as \"∤\". For example, if divides , we write it as . If does not divide , we write it as .  Let's look at two examples. Consider the numbers 4 and 12. We can say that 4 divides 12, or in symbol form, . This is because there exists an integer (3 in this case) such that . Now consider the numbers 7 and 23. We can say that 7 does not divide 23, or in symbol form, . This is because there does not exist an integer such that .    Transitivity And Divisibility  We know that since If there is another number for which we know , do we need to check whether ?  We can use the fact that to show that . We need to show that for some natural number in the brackets. Since we know there is some number such that . But since we can rewrite this as  Since we know , so we were able to express as times another natural number, so .  INSERT PIC OF THIS DIVISBILITY  Now that we've shown this, we can use it to help up study divisibility of many numbers. We'll do many rules in the next subsection, but if we look at the example at the beginning of this section, we see that this shows the following:     If a number is divisible by then it is also divisible by .    If you look at this closely, you can see that there is nothing special about or or , except for the fact that there is a \"chain\" of divisibility relating them.  Let's try and show that this pattern always holds. The next exercise walks you through a proof of this fact.    Let's show that if we have three numbers and we know that and then as well.    How can we write as an equation? You might want to introduce a new variable in it. Do something similar with .  A common mistake is to use the same variable to represent different quantities. Make sure you're using a different new symbol in both equations.      We want to show that . Write this as an equation.    Assuming the two equations in the first part are true, we need to use the two equations above, plus some other mathematical rules, to show that the equation in the previous part must be true. Think if you can come up with a way of doing this.  Think about substituting one equation into the other. Also, you'll need to use the idea of associativity of multiplication.        The following diagram shows the idea in the previous exercise: INSERT PIC HERE  This is a very useful result we've proved in the previous exercise. Let's state it as a theorem, so that we can refer to it later on:   Let If and then .    See the previous exercise.      We will talk about relation between two objects, like numbers, or polygons, or sets, or other things. Basically a relation between two objects is any statement involving two obects that is either TRUE or FALSE.  For example, if our objects are sets, then is a relation between them. For example, let . Under the relation , is related to since , but is not related to since . Divisibility is also a relation. We can say that under divisibility is related to since but is not related to since .  This \"chain\"-like property of relations is incredibly important in mathematics. In fact, it comes up so often that we decided to give it it's own name. In fact, we've talked about this property before; equality has it as well, as we've seen in PROPERTIES OF EQUALITY. We'll talk about it in more generality here.    Let be some relationship (such as equality \"=\", or divisibility \"\\mid\") between objects (such as numbers). We say the relationship is transitive exactly when if th's true that, for objects , if and then .     Can you think of any other relationships besides equality and divisibility that are transitive?     Divisibility Properties of 0, 1, and a Number with Itself  There are some special cases when considering divisibility. Firstly, any number is divisible by 1. This is because for any number , . Secondly, 0 is divisible by any number (except for 0 itself). This is because for any number , . However, 0 is not divisible by itself, as there is no number such that . Lastly, any number is divisible by itself, as .     Divisibility Theorems  In this section, we will discuss three important theorems related to divisibility. Each theorem will be introduced with an example for better understanding.   Theorem 1  If a number is divisible by , then is divisible by for any natural number .   Example for Theorem 1  Let's consider and . Here, is divisible by . Now, if we take any natural number, say , then is also divisible by .   Lets try and prove this now. The idea is that if we know that dots can be represented as a rectangle with dimensions and , then we can \"glue\" of these together to make a larger rectangle with dimensions and . INSERT PIC OF THIS HERE     If a number is divisible by , then is divisible by for any natural number .    Let's use the diagram above as a guide. Assuming the if-part is true, we assume . This means that for some natural number . We need to show that the then-part is true; that is, , where the brackets contain some integer. Noting that the LHS of the second equation is the LHS of the first equation multiplied ny , let's multiply the first equation by : Using commutativity and associativity: Since both and are natural numbers (we can write this as ), their product . Thus we've shown that the then-part must be true, and the theorem is proved.       Theorem 2  If a number is divisible by and a number is divisible by , then and are also divisible by .   Example for Theorem 2  Let's consider , , and . Here, both and are divisible by . Therefore, and are also divisible by .   Let's try and prove this. It's similar to Theorem 1, and in fact, Theorem 1 can be looked at as a repeated application of Theorem 2. Let's say we know that is a factor of both and . Then we can express both and dots as a rectangle, with one of the dimensions being , and the other we'll call and , respectively. Then in the addition case, we can \"glue\" the two rectangles together to make a rectangle with dimensions and . INSERT PIC OF THIS    If a number is divisible by and a number is divisible by , and say that , then and are also divisible by .    We'll only prove the case for addition, and leave the case for subtraction as an exercise later. Assuming the if-part is true, assume that and for some natural numbers . We need to show that where the bracket is some natural numbber. Adding both equations together, Factoring out the a from the RHS, Since we know their sum too. Thus we have shown the then-part must be true and the theorem is proved.       Theorem 3  If a number is divisible by but a number is not divisible by , then and are not divisible by .   Example for Theorem 3  Let's consider , , and . Here, is divisible by but is not divisible by . Therefore, and are not divisible by .   Like the other two theorems, let's try and get an idea for a proof via a diagram first. This is a good opportunity for you to try to come up with a diagram that shows this situation before looking below. Try and draw this result, at least for the additive case, and then check if your idea is close to the picture hidden below:  INSERT HIDDEN PIC HERE, MAYBE BY AN EXERCISE OR SOMETHING.  It looks like when you \"glue\" the two rectangle-like objects together, the remainder that doesn't make a full row in the non-divisible number is still there when the ojects are added. This is essentially the entire idea.     If a number is divisible by but a number is not divisible by , then and are not divisible by .    Again, we do the additive case, and leave the subtraction case to an exercise later. Let and . This means that for some natural number , and , where is a natural number, and thinking about it as a remainder, is a natural number such that . We need to show that , so we need to show that has a remainder. Adding both equations together, we get Factoring out an from the first two terms on the RHS, Since and with , we have written in quotient-remainder form, and we know there is exactly one way to do this. And since , then .       TheOtherCase  If you look at the previous two theorems, you'll see that they cover when divides both numbers and , and when divides exactly one of these and not the other. A natural question we can ask is \"what happens if divides neither nor ?\"   Let's explore and see if we can develop examples for both scenarios. Let's let and . Clearly .    Can you find a value for such that but ? What about two values of ?     Can you find a value for such that and also ? What about two values of ?     Using the examples that you developed above, can you make a conjecture about when divides the sum and when does not?  Think about what is happening with the remainders and their sum.      Do the same thing for subtraction now. Pick different values besides and and find values for where the sum is, and is not, divisibile by . Make a conjecture about when each case happens.       "
},
{
  "id": "def-Divisibility",
  "level": "2",
  "url": "sec-IntroductoryConcepts.html#def-Divisibility",
  "type": "Definition",
  "number": "6.1.1",
  "title": "",
  "body": "  A number is said to be divisible by another number if there exists a number such that . This is often expressed in various ways, such as \" is a factor of \", \" divides \", \" is a multiple of \", or \" is divisible by \". We say that is a proper factor of if and .   "
},
{
  "id": "divisibility2-4",
  "level": "2",
  "url": "sec-IntroductoryConcepts.html#divisibility2-4",
  "type": "Example",
  "number": "6.1.2",
  "title": "",
  "body": " We know that , so we know that divides . We can also say is a factor of , is a multiple of , and is divisible by . These all express the same information. Additionally, is a proper factor of while and are not.  You've probably spotted that we can say the same things about as we did about . This idea gives us our first theorem, that we will state and prove more formally after we develop some notation for the concept of divisibility.  "
},
{
  "id": "thm-if12then3",
  "level": "2",
  "url": "sec-IntroductoryConcepts.html#thm-if12then3",
  "type": "Theorem",
  "number": "6.1.3",
  "title": "",
  "body": "  If a number is divisible by then it is also divisible by .   "
},
{
  "id": "subsubsec-TransitivityAndDivisibility-6-4-1",
  "level": "2",
  "url": "sec-IntroductoryConcepts.html#subsubsec-TransitivityAndDivisibility-6-4-1",
  "type": "Checkpoint",
  "number": "[STRUCT].3",
  "title": "",
  "body": " Let's show that if we have three numbers and we know that and then as well.    How can we write as an equation? You might want to introduce a new variable in it. Do something similar with .  A common mistake is to use the same variable to represent different quantities. Make sure you're using a different new symbol in both equations.      We want to show that . Write this as an equation.    Assuming the two equations in the first part are true, we need to use the two equations above, plus some other mathematical rules, to show that the equation in the previous part must be true. Think if you can come up with a way of doing this.  Think about substituting one equation into the other. Also, you'll need to use the idea of associativity of multiplication.      "
},
{
  "id": "thm-DivTrans",
  "level": "2",
  "url": "sec-IntroductoryConcepts.html#thm-DivTrans",
  "type": "Theorem",
  "number": "6.1.4",
  "title": "",
  "body": "  Let If and then .    See the previous exercise.   "
},
{
  "id": "subsubsec-TransitivityAndDivisibility-7",
  "level": "2",
  "url": "sec-IntroductoryConcepts.html#subsubsec-TransitivityAndDivisibility-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "relation "
},
{
  "id": "def-transitivity",
  "level": "2",
  "url": "sec-IntroductoryConcepts.html#def-transitivity",
  "type": "Definition",
  "number": "6.1.5",
  "title": "",
  "body": "  Let be some relationship (such as equality \"=\", or divisibility \"\\mid\") between objects (such as numbers). We say the relationship is transitive exactly when if th's true that, for objects , if and then .   "
},
{
  "id": "subsubsec-TransitivityAndDivisibility-11",
  "level": "2",
  "url": "sec-IntroductoryConcepts.html#subsubsec-TransitivityAndDivisibility-11",
  "type": "Checkpoint",
  "number": "6.1.6",
  "title": "",
  "body": " Can you think of any other relationships besides equality and divisibility that are transitive?  "
},
{
  "id": "example-theorem1",
  "level": "2",
  "url": "sec-IntroductoryConcepts.html#example-theorem1",
  "type": "Example",
  "number": "6.1.7",
  "title": "Example for Theorem 1.",
  "body": " Example for Theorem 1  Let's consider and . Here, is divisible by . Now, if we take any natural number, say , then is also divisible by .  "
},
{
  "id": "thm-thm1",
  "level": "2",
  "url": "sec-IntroductoryConcepts.html#thm-thm1",
  "type": "Theorem",
  "number": "6.1.8",
  "title": "",
  "body": "  If a number is divisible by , then is divisible by for any natural number .    Let's use the diagram above as a guide. Assuming the if-part is true, we assume . This means that for some natural number . We need to show that the then-part is true; that is, , where the brackets contain some integer. Noting that the LHS of the second equation is the LHS of the first equation multiplied ny , let's multiply the first equation by : Using commutativity and associativity: Since both and are natural numbers (we can write this as ), their product . Thus we've shown that the then-part must be true, and the theorem is proved.   "
},
{
  "id": "example-theorem2",
  "level": "2",
  "url": "sec-IntroductoryConcepts.html#example-theorem2",
  "type": "Example",
  "number": "6.1.9",
  "title": "Example for Theorem 2.",
  "body": " Example for Theorem 2  Let's consider , , and . Here, both and are divisible by . Therefore, and are also divisible by .  "
},
{
  "id": "thm-thm2",
  "level": "2",
  "url": "sec-IntroductoryConcepts.html#thm-thm2",
  "type": "Theorem",
  "number": "6.1.10",
  "title": "",
  "body": "  If a number is divisible by and a number is divisible by , and say that , then and are also divisible by .    We'll only prove the case for addition, and leave the case for subtraction as an exercise later. Assuming the if-part is true, assume that and for some natural numbers . We need to show that where the bracket is some natural numbber. Adding both equations together, Factoring out the a from the RHS, Since we know their sum too. Thus we have shown the then-part must be true and the theorem is proved.   "
},
{
  "id": "example-theorem3",
  "level": "2",
  "url": "sec-IntroductoryConcepts.html#example-theorem3",
  "type": "Example",
  "number": "6.1.11",
  "title": "Example for Theorem 3.",
  "body": " Example for Theorem 3  Let's consider , , and . Here, is divisible by but is not divisible by . Therefore, and are not divisible by .  "
},
{
  "id": "thm-thm3",
  "level": "2",
  "url": "sec-IntroductoryConcepts.html#thm-thm3",
  "type": "Theorem",
  "number": "6.1.12",
  "title": "",
  "body": "  If a number is divisible by but a number is not divisible by , then and are not divisible by .    Again, we do the additive case, and leave the subtraction case to an exercise later. Let and . This means that for some natural number , and , where is a natural number, and thinking about it as a remainder, is a natural number such that . We need to show that , so we need to show that has a remainder. Adding both equations together, we get Factoring out an from the first two terms on the RHS, Since and with , we have written in quotient-remainder form, and we know there is exactly one way to do this. And since , then .   "
},
{
  "id": "subsubsec-TheOtherCase-3",
  "level": "2",
  "url": "sec-IntroductoryConcepts.html#subsubsec-TheOtherCase-3",
  "type": "Checkpoint",
  "number": "6.1.13",
  "title": "",
  "body": " Let's explore and see if we can develop examples for both scenarios. Let's let and . Clearly .    Can you find a value for such that but ? What about two values of ?     Can you find a value for such that and also ? What about two values of ?     Using the examples that you developed above, can you make a conjecture about when divides the sum and when does not?  Think about what is happening with the remainders and their sum.      Do the same thing for subtraction now. Pick different values besides and and find values for where the sum is, and is not, divisibile by . Make a conjecture about when each case happens.    "
},
{
  "id": "divisibility-theorems-small-numbers",
  "level": "1",
  "url": "divisibility-theorems-small-numbers.html",
  "type": "Section",
  "number": "6.2",
  "title": "Divisibility Theorems for Small Numbers",
  "body": " Divisibility Theorems for Small Numbers   Introduction  In this section, we will introduce and prove the divisibility theorems for numbers 2 through 11. Each theorem will be introduced with an example, and then we will prove them for four-digit numbers. While we will focus on four-digit numbers for simplicity, it's important to note that these proofs can be extended to numbers of any number of digits.  To facilitate our discussion, we will use underline notation in LaTeX to indicate a number by its place value digits. For example, a four-digit number can be represented as . This notation will allow us to break down the number into its constituent parts and analyze its divisibility properties. Since we are using variables to represent unknown digits, we need this new notation, since if we write this usually means . However, if we write actual digits like without an underline, we still mean .  In essence, the idea of divisibilty rules is to turn a question about divisibility of a large number into a question about divisibility of a smaller number. In some cases, that number will have a fixed number of digits, and in other cases the number of digits won't be fixed, but it will be a smaller number.    Divisibility Rules for 2, 4, and 8  In number theory, divisibility rules are simple methods to determine whether one number is divisible by another without performing the division. This section will focus on the divisibility rules for 2, 4, and 8.   Divisibility Rule for 2  Most people reading this will know the divisilbity rule for . It is one of the first patterns that elementary students notice, and of course it extends to being able to check if any number has 2 as a factor. The rule is as follows; we will prove it after showing examples of the rule showing both divisibility and non-divisibility.   Reminder  A reminder from the first chapter. Remember that an if-and-only-if statement, say if-and-only-if is shorthand to mean \" and \". In fact, since the contrapositive of is , we can view if-and-only-if as \" and \".   A number is divisible by 2 if and only if the last digit is divisible by 2.   Example  Consider the number 1234. The last digit is 4, which is even. Therefore, 1234 is divisible by 2.    Non-Example  Consider the number 1235. The last digit is 5, which is not even. Therefore, 1235 is not divisible by 2.   Think about why we would only need to check the last digit of our number. It may be helpful to write as and as . Could you explain why this rule is true to another student?  Let's now prove this rule for four-digit numbers, using the notation mentioned in the introduction. We will rely on the divisibility theorems in the previous section to justify why this rule is true.     A number is divisible by 2 if and only if the last digit is divisible by 2.    Consider the four-digit number . We know that , , and , so by we know that  , and . By we know that . For ease, let's define . Thus we can write .  Now with that setup we can start proving and . By we know that if (P being true) then , so Q is true. So we have that is always true. By if (P being false) then , so Q is false. So we have that is always true. INSERT PIC OF THIS PROOF       Divisibility Rule for 4  The divisibility rule for 4 is very similar to the divisibility rule for 2. For the previous rule, we knew that was a factor of every power of ten with . It is a good idea to see if you can modify the work from the divisbility rule for 2 to develop a divisibility rule for 4. Try this yourself before reading on.  Again, we state the rule and give some examples and non-examples before we prove that the rule always works.  A number is divisible by 4 if and only if the number formed by the last two digits is divisible by 4.   Example  Consider the number 1232. The number formed by the last two digits is 32. Since 32 is divisible by 4, 1232 is also divisible by 4.    Non-Example  Consider the number 1235. The number formed by the last two digits is 35. Since 35 is not divisible by 4, 1235 is not divisible by 4.     A number is divisible by 4 if and only if the number formed by the last two digits is divisible by 4.    Consider the four-digit number . We know that and , so by we know that and . By we know that . For ease, let's define . Thus we can write .  Now with that setup we can start proving and . By we know that if (P being true) then , so Q is true. So we have that is always true. By if (P being false) then , so Q is false. So we have that is always true. INSERT PIC OF THIS PROOF      Divisibility Rule for 8  Looking at the above rules, you may have started to notice a pattern emerging. We can view as and note that to check divisibility by 2 we only need to check whether the number formed by the last digit is divisibile by 2. For , we need to check if the number formed by the last *two* digits is divisible by . Let's check if the pattern has a chance of holding for     Consider the number 1232. The number formed by the last three digits is 232. We can check that , and . So it looks like the expected rule holds, at least for this example. Indeed, since 232 is divisible by 8, 1232 is also divisible by 8.    Here's a non-example too:   Non-Example  Consider the number 1235. The number formed by the last three digits is 235. Since 235 is not divisible by 8, 1235 is not divisible by 8.      A number is divisible by 8 if and only if the number formed by the last three digits is divisible by 8.    Consider the four-digit number . We know that , so by we know that . For ease, let's define . Thus we can write .  Now with that setup we can start proving and . By we know that if (P being true) then , so Q is true. So we have that is always true. By if (P being false) then , so Q is false. So we have that is always true. INSERT PIC OF THIS PROOF      Example     Divisibility Rule for Higher Powers of 2  You can see that there seems to be a pattern emerging here. A good question is to see if we can figure out why this pattern holds. Let's walk through this in an exercise:     What is the largest power of that is a factor of ? What about ? What about for some number ? Try factoring into its prime factors.    We know that . What can you say about whether for ? What theorem that we've proved justifies this?     Can you generalize the above idea to all powers of ? What can you say about which powers of it is a factor of?    How does this relate to digits of a number?    Using the ideas above, conjecture a divisibility rule for when a number is divisibile by . What do you have to check?    Let's say you have an -digit number where the subscript of each digit is its place vaue. Using the proofs for and as a blueprint, prove the conjecture you made above.        Divisibility Rule For 5  The divisibility rule for 5 is also incredibly well known. Most people reading this should know that you only need to check whether the last digit of the number is either 5 or 0. However, like the divisibility rule for 2, it will be more advantageous to think the rule as the last digit being divisible by . Note that the rule for divisibility by 2 relies on the fact that , since all multiples of , including powers of , are also divisbile by . Since the exact same idea should work for as well as . In fact, we should be able to write down the exact same argument for divisibility by 5 as divisibility by 2, with all the 2's replaced by 5:     A number is divisible by 5 if and only if the last digit is divisible by 5.    Modify the proof of so that it is a proof of this theorem.      Consider the number . Since , we know that . You can check this using long division or a calculator.    Consider the number . Since , we know that . Again, you can cehck this via long division.    Try and modify the divisibility rules for powers of to be divisibility rules for powers of . What do you have to check to determine if a number is divisible by ? What about ? What about for some number ?     Divisibility Rules For 3 And 9  In the last section, we were able to develop divisibility rules for powers of and since powers of are divisible by and . We could use this commonality between each power of , and thus each place value in a number, to come up with a simplified rule for determining divisibility of these powers of and . In this section, we will look for another consistant commonality between powers of 10 being divided by and that will allow us to develop divisibility rules for these numbers. The next example will walk you through noticing the pattern.   In this example we will develop an intution for a divisibility rule for and .    Using long division, so you can keep track of remainders, find . Now do the same thing for and .    What commonality do you notice about these answers? In each division, how many of each power of 10 are you able to group into groups of 3?    Now do the division in two ways; using long division, and then doing the division separately for each place value; that is, What can you say about the three remainders in the second case?    Using the above as a guide, descibe a way to determine if a number is divisible by .    Now redo the work above replacing by . You should notice the exact same pattern.     Now that we have developed our rule let's prove it for four-digit numbers. Like the other proofs in this section, this can be expanded to a proof for number with any amount of digits.   Divisibility Rules for 3 and 9   A number is divisible by if and only if the sum of its digits is divisible by . Similarly, a number is divisible by if and only if the sum of its digits is divisible by .    Consider a number where , , , and are its digits. We can express this number in its expanded form as: Using place value, we can rewrite this as: Expanding and grouping, we get: The terms , , and are all divisible by and since , , and are divisible by both and . Therefore, the divisibility of the number by or depends solely on the sum of its digits, .    Let's look at a few small examples to make sure we know how the rules work.   Example for Divisibility by 3   Consider the number 123. The sum of its digits is . Since 6 is divisible by 3, the number 123 is also divisible by 3.     Example for Divisibility by 9   Consider the number 234. The sum of its digits is . Since 9 is divisible by 9, the number 234 is also divisible by 9.     Non-example for Divisibility by 3   Consider the number 124. The sum of its digits is . Since 7 is not divisible by 3, the number 124 is not divisible by 3.     Non-example for Divisibility by 9   Consider the number 235. The sum of its digits is . Since 10 is not divisible by 9, the number 235 is not divisible by 9.    With smaller examples like the above, it might be difficult to see why these rules are very useful and powerful. Let's look at another, more difficult example:   A student wrote down the following ten digit number: , where is some digit that was too messy in their notes to make it out. However, the student does know that the number is divisible by 3 but not divisibile by 9. What are the possible choices for the digit ?   This would be a very hard problem using long division, and even using a calculator naively would require ten different trials, one for each digit. However, we can use the divisibility rules above to help us out.  We know that the number is divisible by 3, so the sum of the digits must also be divisible by 3. The sum of the digits is . We know that we can add either or to to get or , which are multiples of . But since the number isn't divisible by 9, we know that the sum cannot be divisible by 9, so it cannot be . So . So the digit is either or .      Divisibility Rule For 11  There is a nice divisibility rule for 11 that is similar to the divisibility rules for 3 and 9. The key of the divisibility rule for 3 and 9 was that for any , it's true that has a remainder of . Let's explore dividing powers of by to see if we notice any patterns.     Let's start with . What is the remainder of ? It will be helpful to keep this information in a table.    Now do the same thing for and . That is, calculate the remainder of for .    Make a conjecture about the patter of remainders of for each .    Using the area and grouping model of division, draw a diagram that shows a few examples of this conjecture. Can you express the \"large\" remainders in terms of what is missing to obtain a full group of 11?     Hopefully the exercise above gives you some intuition about what a divisibility rule for 11 will require. Note that there powers of 10, and therefore place values, fall into two groups; a remainder of 1 when is even, and a remainder of 10 (or a \"remainder\" of -1) when is odd. So when is even, , and when is odd . So we can express powers of 10 as numbers \"close to\" numbers divisible by 11, plus or minus 1. This is the key for this rule. Let's prove this now for six-digit numbers, just so we get a feel for the pattern that is happening.    Divisibility Rule for 11   A number is divisible by if and only if the alternating sum of its digits (e.g., for a six-digit number ) is divisible by .    Let's prove this for a six-digit number, but the proof can be easily extended to a number of any number of digits. Consider a six-digit number where , , , , , and are its digits. We can express this number in its expanded form as: Using properties of powers of 10 and their relation to 11, we can rewrite this as: Grouping the terms, we get: The terms , , , , and are all divisible by 11 due to the properties of powers of 10. Therefore, the divisibility of the number by 11 depends solely on the alternating sum of its digits, .       Compound Divisibility Rules   When Compund Divisibility Rules Work  Let's say you are interested in divisibility by some number , and . This means that and . So if for some number we know , then by we know that and . So we can say if then and .  Does the converse of this hold as well? That is if we know and then do we know that ? Let's explore with some examples and see if we can determine the conditions when we can indeed combine divisibility rules to make a new divisibility rule.     Let's start to think about numbers divisible by both, noting that . Using a calculator if you wish, write down around 10 or 20 examples of numbers with both 2 and 3 as factors (can you think about how to easily make these?). Are these numbers also divisible by 6? Check!    If you haven't found one above, can you think of a number that is divisible by 2 and 3 but not divisible by 6?      Let's try another number, say . Write down many numbers with both 6 and 4 as factors. Is 24 also a factor of these numbers? Check!    If you haven't found one above, can you think of a number that is divisible by 6 and 4 but not divisible by 24?    Try the above with other sets of numbers and , for example try and . Do you notice a pattern about the numbers and where is always a factor of numbers where both and are factors, and when there are numbers that do not have as a factor?     In the above example you probably have seen that if and have no common factors, then is necessarily a factor of any number where both and are factors. Let's try and prove this.     Let be numbers with no common factors (that is, ), and let be another number. Then if and only if and .    Since this is a biconditional statement, we need to show that and . The direction was already proved in the first paragraph of this subsection. So let's do the other direction.  Let's assume the \"if-part\" is true: let and . We need to show that the \"then-part\" is true, that is, .  Since we know we know that for some natural number . But we also know , so since we know . Since has a factor of , and and share no common factors, then all of the factors of must be in , so for some number . So . So since we've written as a multiple of , this means that .     To show that combining divisibility rules for numbers and doesn't work if and have a common factor, let's try and develop a counterexample for each choice of two numbers with a common factor.   For the following pairs of numbers, find the smallest number where and but . What is the largest common factor of and .     and .     and .     and     Do you notice a way of determining the smallest counterexample using the numbers and and their greatest common factor?    Try and prove that your method above works in general.       Some Common Compound Divisibility Rules  From the subsection above, we know that as long as two numbers share no common factors, we can indeed combine their divisibility rules to determine if a number is divisibile by their product. Let's list a few of these for small numbers, and give an example and non example for each.   Combined Divisibility Rules for Co-prime Numbers   Rule for Divisibility by 6: A number is divisible by 6 if it is divisible by both 2 and 3.   12 is divisible by 6 because it is even (divisible by 2) and the sum of its digits (1 + 2 = 3) is divisible by 3.    14 is not divisible by 6 because while it is even (divisible by 2), the sum of its digits (1 + 4 = 5) is not divisible by 3.     Rule for Divisibility by 10: A number is divisible by 10 if its last digit is 0; that is, it is divisible by 2 and divisible by 5.   150 is divisible by 10 because its last digit is 0.    153 is not divisible by 10 because its last digit is 3, not 0.     Rule for Divisibility by 15: A number is divisible by 15 if it is divisible by both 3 and 5.   30 is divisible by 15 because the sum of its digits (3 + 0 = 3) is divisible by 3 and its last digit is 0 or 5 (indicating divisibility by 5).    35 is not divisible by 15 because while its last digit is 5 (indicating divisibility by 5), the sum of its digits (3 + 5 = 8) is not divisible by 3.        Iterative Divisibility Rules   Sometimes, to determine if a number is divisible by another, we can use an iterative approach. This means applying the divisibility rule repeatedly until we get a number that we can easily determine its divisibility. This method is particularly useful for large numbers and for certain divisibility rules like those for 3, 9, and 11, which turn the problem of checcking divisibility of a large number into checking divisibility of a smaller number.   Let's explore this iterative method with examples and non-examples for divisibility by 3, 9, and 11.   Divisibility by 3   To check if divides , we sum its digits: . Now, to check if divides , we sum its digits: . Since 10 is not divisible by 3, neither is .    For , the sum of its digits is , which is divisible by 3. Therefore is indeed divisible by 3.     Divisibility by 9   To check if divides , we sum its digits: . Now, to check if divides , we sum its digits: . Finally, summing the digits of 12 gives , which is not divisible by 9. Thus, is not divisible by 9.    For , the sum of its digits is , which is divisible by 9. Therefore is indeed divisible by 9.     Divisibility by 11   To check if divides , we alternate the sum and subtraction of its digits: . Since 17 is not divisible by 11, neither is .    For , the alternating sum is , and the alternating sum of is . Therefore is divisible by 11.      MakingDivisibilityRules  MAKING A DIVISIBILITY RULE FOR ANY NUMBER USING TECHNIQUE FROM WIKIPEDIA.   "
},
{
  "id": "example-divisibility-2",
  "level": "2",
  "url": "divisibility-theorems-small-numbers.html#example-divisibility-2",
  "type": "Example",
  "number": "6.2.1",
  "title": "Example.",
  "body": " Example  Consider the number 1234. The last digit is 4, which is even. Therefore, 1234 is divisible by 2.  "
},
{
  "id": "non-example-divisibility-2",
  "level": "2",
  "url": "divisibility-theorems-small-numbers.html#non-example-divisibility-2",
  "type": "Example",
  "number": "6.2.2",
  "title": "Non-Example.",
  "body": " Non-Example  Consider the number 1235. The last digit is 5, which is not even. Therefore, 1235 is not divisible by 2.  "
},
{
  "id": "thm-DivBy2",
  "level": "2",
  "url": "divisibility-theorems-small-numbers.html#thm-DivBy2",
  "type": "Theorem",
  "number": "6.2.3",
  "title": "",
  "body": "  A number is divisible by 2 if and only if the last digit is divisible by 2.    Consider the four-digit number . We know that , , and , so by we know that  , and . By we know that . For ease, let's define . Thus we can write .  Now with that setup we can start proving and . By we know that if (P being true) then , so Q is true. So we have that is always true. By if (P being false) then , so Q is false. So we have that is always true. INSERT PIC OF THIS PROOF   "
},
{
  "id": "example-divisibility-4",
  "level": "2",
  "url": "divisibility-theorems-small-numbers.html#example-divisibility-4",
  "type": "Example",
  "number": "6.2.4",
  "title": "Example.",
  "body": " Example  Consider the number 1232. The number formed by the last two digits is 32. Since 32 is divisible by 4, 1232 is also divisible by 4.  "
},
{
  "id": "non-example-divisibility-4",
  "level": "2",
  "url": "divisibility-theorems-small-numbers.html#non-example-divisibility-4",
  "type": "Example",
  "number": "6.2.5",
  "title": "Non-Example.",
  "body": " Non-Example  Consider the number 1235. The number formed by the last two digits is 35. Since 35 is not divisible by 4, 1235 is not divisible by 4.  "
},
{
  "id": "thm-DivBy4",
  "level": "2",
  "url": "divisibility-theorems-small-numbers.html#thm-DivBy4",
  "type": "Theorem",
  "number": "6.2.6",
  "title": "",
  "body": "  A number is divisible by 4 if and only if the number formed by the last two digits is divisible by 4.    Consider the four-digit number . We know that and , so by we know that and . By we know that . For ease, let's define . Thus we can write .  Now with that setup we can start proving and . By we know that if (P being true) then , so Q is true. So we have that is always true. By if (P being false) then , so Q is false. So we have that is always true. INSERT PIC OF THIS PROOF   "
},
{
  "id": "divisibility-rule-8-3",
  "level": "2",
  "url": "divisibility-theorems-small-numbers.html#divisibility-rule-8-3",
  "type": "Example",
  "number": "6.2.7",
  "title": "",
  "body": "  Consider the number 1232. The number formed by the last three digits is 232. We can check that , and . So it looks like the expected rule holds, at least for this example. Indeed, since 232 is divisible by 8, 1232 is also divisible by 8.   "
},
{
  "id": "non-example-divisibility-8",
  "level": "2",
  "url": "divisibility-theorems-small-numbers.html#non-example-divisibility-8",
  "type": "Example",
  "number": "6.2.8",
  "title": "Non-Example.",
  "body": " Non-Example  Consider the number 1235. The number formed by the last three digits is 235. Since 235 is not divisible by 8, 1235 is not divisible by 8.  "
},
{
  "id": "thm-DivBy8",
  "level": "2",
  "url": "divisibility-theorems-small-numbers.html#thm-DivBy8",
  "type": "Theorem",
  "number": "6.2.9",
  "title": "",
  "body": "  A number is divisible by 8 if and only if the number formed by the last three digits is divisible by 8.    Consider the four-digit number . We know that , so by we know that . For ease, let's define . Thus we can write .  Now with that setup we can start proving and . By we know that if (P being true) then , so Q is true. So we have that is always true. By if (P being false) then , so Q is false. So we have that is always true. INSERT PIC OF THIS PROOF   "
},
{
  "id": "example-divisibility-8",
  "level": "2",
  "url": "divisibility-theorems-small-numbers.html#example-divisibility-8",
  "type": "Example",
  "number": "6.2.10",
  "title": "Example.",
  "body": " Example  "
},
{
  "id": "subsubsec-DivisibilityRuleforHigherPowersof2-3",
  "level": "2",
  "url": "divisibility-theorems-small-numbers.html#subsubsec-DivisibilityRuleforHigherPowersof2-3",
  "type": "Checkpoint",
  "number": "6.2.11",
  "title": "",
  "body": "   What is the largest power of that is a factor of ? What about ? What about for some number ? Try factoring into its prime factors.    We know that . What can you say about whether for ? What theorem that we've proved justifies this?     Can you generalize the above idea to all powers of ? What can you say about which powers of it is a factor of?    How does this relate to digits of a number?    Using the ideas above, conjecture a divisibility rule for when a number is divisibile by . What do you have to check?    Let's say you have an -digit number where the subscript of each digit is its place vaue. Using the proofs for and as a blueprint, prove the conjecture you made above.    "
},
{
  "id": "thm-DivBy5",
  "level": "2",
  "url": "divisibility-theorems-small-numbers.html#thm-DivBy5",
  "type": "Theorem",
  "number": "6.2.12",
  "title": "",
  "body": "  A number is divisible by 5 if and only if the last digit is divisible by 5.    Modify the proof of so that it is a proof of this theorem.   "
},
{
  "id": "subsec-DivisibilityRuleFor5-4",
  "level": "2",
  "url": "divisibility-theorems-small-numbers.html#subsec-DivisibilityRuleFor5-4",
  "type": "Example",
  "number": "6.2.13",
  "title": "",
  "body": " Consider the number . Since , we know that . You can check this using long division or a calculator.  "
},
{
  "id": "subsec-DivisibilityRuleFor5-5",
  "level": "2",
  "url": "divisibility-theorems-small-numbers.html#subsec-DivisibilityRuleFor5-5",
  "type": "Example",
  "number": "6.2.14",
  "title": "",
  "body": " Consider the number . Since , we know that . Again, you can cehck this via long division.  "
},
{
  "id": "subsec-DivisibilityRuleFor5-6",
  "level": "2",
  "url": "divisibility-theorems-small-numbers.html#subsec-DivisibilityRuleFor5-6",
  "type": "Checkpoint",
  "number": "6.2.15",
  "title": "",
  "body": " Try and modify the divisibility rules for powers of to be divisibility rules for powers of . What do you have to check to determine if a number is divisible by ? What about ? What about for some number ?  "
},
{
  "id": "subsec-DivisibilityRulesFor3And9-3",
  "level": "2",
  "url": "divisibility-theorems-small-numbers.html#subsec-DivisibilityRulesFor3And9-3",
  "type": "Example",
  "number": "6.2.16",
  "title": "",
  "body": " In this example we will develop an intution for a divisibility rule for and .    Using long division, so you can keep track of remainders, find . Now do the same thing for and .    What commonality do you notice about these answers? In each division, how many of each power of 10 are you able to group into groups of 3?    Now do the division in two ways; using long division, and then doing the division separately for each place value; that is, What can you say about the three remainders in the second case?    Using the above as a guide, descibe a way to determine if a number is divisible by .    Now redo the work above replacing by . You should notice the exact same pattern.    "
},
{
  "id": "divisibility-3-9",
  "level": "2",
  "url": "divisibility-theorems-small-numbers.html#divisibility-3-9",
  "type": "Theorem",
  "number": "6.2.17",
  "title": "Divisibility Rules for 3 and 9.",
  "body": " Divisibility Rules for 3 and 9   A number is divisible by if and only if the sum of its digits is divisible by . Similarly, a number is divisible by if and only if the sum of its digits is divisible by .    Consider a number where , , , and are its digits. We can express this number in its expanded form as: Using place value, we can rewrite this as: Expanding and grouping, we get: The terms , , and are all divisible by and since , , and are divisible by both and . Therefore, the divisibility of the number by or depends solely on the sum of its digits, .   "
},
{
  "id": "example-divisibility-3",
  "level": "2",
  "url": "divisibility-theorems-small-numbers.html#example-divisibility-3",
  "type": "Example",
  "number": "6.2.18",
  "title": "Example for Divisibility by 3.",
  "body": " Example for Divisibility by 3   Consider the number 123. The sum of its digits is . Since 6 is divisible by 3, the number 123 is also divisible by 3.   "
},
{
  "id": "example-divisibility-9",
  "level": "2",
  "url": "divisibility-theorems-small-numbers.html#example-divisibility-9",
  "type": "Example",
  "number": "6.2.19",
  "title": "Example for Divisibility by 9.",
  "body": " Example for Divisibility by 9   Consider the number 234. The sum of its digits is . Since 9 is divisible by 9, the number 234 is also divisible by 9.   "
},
{
  "id": "non-example-divisibility-3",
  "level": "2",
  "url": "divisibility-theorems-small-numbers.html#non-example-divisibility-3",
  "type": "Example",
  "number": "6.2.20",
  "title": "Non-example for Divisibility by 3.",
  "body": " Non-example for Divisibility by 3   Consider the number 124. The sum of its digits is . Since 7 is not divisible by 3, the number 124 is not divisible by 3.   "
},
{
  "id": "non-example-divisibility-9",
  "level": "2",
  "url": "divisibility-theorems-small-numbers.html#non-example-divisibility-9",
  "type": "Example",
  "number": "6.2.21",
  "title": "Non-example for Divisibility by 9.",
  "body": " Non-example for Divisibility by 9   Consider the number 235. The sum of its digits is . Since 10 is not divisible by 9, the number 235 is not divisible by 9.   "
},
{
  "id": "subsec-DivisibilityRulesFor3And9-12",
  "level": "2",
  "url": "divisibility-theorems-small-numbers.html#subsec-DivisibilityRulesFor3And9-12",
  "type": "Example",
  "number": "6.2.22",
  "title": "",
  "body": " A student wrote down the following ten digit number: , where is some digit that was too messy in their notes to make it out. However, the student does know that the number is divisible by 3 but not divisibile by 9. What are the possible choices for the digit ?   This would be a very hard problem using long division, and even using a calculator naively would require ten different trials, one for each digit. However, we can use the divisibility rules above to help us out.  We know that the number is divisible by 3, so the sum of the digits must also be divisible by 3. The sum of the digits is . We know that we can add either or to to get or , which are multiples of . But since the number isn't divisible by 9, we know that the sum cannot be divisible by 9, so it cannot be . So . So the digit is either or .   "
},
{
  "id": "subsec-DivisibilityRuleFor11-3",
  "level": "2",
  "url": "divisibility-theorems-small-numbers.html#subsec-DivisibilityRuleFor11-3",
  "type": "Checkpoint",
  "number": "6.2.23",
  "title": "",
  "body": "   Let's start with . What is the remainder of ? It will be helpful to keep this information in a table.    Now do the same thing for and . That is, calculate the remainder of for .    Make a conjecture about the patter of remainders of for each .    Using the area and grouping model of division, draw a diagram that shows a few examples of this conjecture. Can you express the \"large\" remainders in terms of what is missing to obtain a full group of 11?    "
},
{
  "id": "DivBy11",
  "level": "2",
  "url": "divisibility-theorems-small-numbers.html#DivBy11",
  "type": "Theorem",
  "number": "6.2.24",
  "title": "Divisibility Rule for 11.",
  "body": " Divisibility Rule for 11   A number is divisible by if and only if the alternating sum of its digits (e.g., for a six-digit number ) is divisible by .    Let's prove this for a six-digit number, but the proof can be easily extended to a number of any number of digits. Consider a six-digit number where , , , , , and are its digits. We can express this number in its expanded form as: Using properties of powers of 10 and their relation to 11, we can rewrite this as: Grouping the terms, we get: The terms , , , , and are all divisible by 11 due to the properties of powers of 10. Therefore, the divisibility of the number by 11 depends solely on the alternating sum of its digits, .   "
},
{
  "id": "subsubsec-WhenCompundDivisibilityRulesWork-4",
  "level": "2",
  "url": "divisibility-theorems-small-numbers.html#subsubsec-WhenCompundDivisibilityRulesWork-4",
  "type": "Checkpoint",
  "number": "6.2.25",
  "title": "",
  "body": "   Let's start to think about numbers divisible by both, noting that . Using a calculator if you wish, write down around 10 or 20 examples of numbers with both 2 and 3 as factors (can you think about how to easily make these?). Are these numbers also divisible by 6? Check!    If you haven't found one above, can you think of a number that is divisible by 2 and 3 but not divisible by 6?      Let's try another number, say . Write down many numbers with both 6 and 4 as factors. Is 24 also a factor of these numbers? Check!    If you haven't found one above, can you think of a number that is divisible by 6 and 4 but not divisible by 24?    Try the above with other sets of numbers and , for example try and . Do you notice a pattern about the numbers and where is always a factor of numbers where both and are factors, and when there are numbers that do not have as a factor?    "
},
{
  "id": "thm-CompundDivisibility",
  "level": "2",
  "url": "divisibility-theorems-small-numbers.html#thm-CompundDivisibility",
  "type": "Theorem",
  "number": "6.2.26",
  "title": "",
  "body": "  Let be numbers with no common factors (that is, ), and let be another number. Then if and only if and .    Since this is a biconditional statement, we need to show that and . The direction was already proved in the first paragraph of this subsection. So let's do the other direction.  Let's assume the \"if-part\" is true: let and . We need to show that the \"then-part\" is true, that is, .  Since we know we know that for some natural number . But we also know , so since we know . Since has a factor of , and and share no common factors, then all of the factors of must be in , so for some number . So . So since we've written as a multiple of , this means that .   "
},
{
  "id": "subsubsec-WhenCompundDivisibilityRulesWork-8",
  "level": "2",
  "url": "divisibility-theorems-small-numbers.html#subsubsec-WhenCompundDivisibilityRulesWork-8",
  "type": "Checkpoint",
  "number": "6.2.27",
  "title": "",
  "body": " For the following pairs of numbers, find the smallest number where and but . What is the largest common factor of and .     and .     and .     and     Do you notice a way of determining the smallest counterexample using the numbers and and their greatest common factor?    Try and prove that your method above works in general.    "
},
{
  "id": "subsubsec-SomeCommonCompoundDivisibilityRules-3-2-2",
  "level": "2",
  "url": "divisibility-theorems-small-numbers.html#subsubsec-SomeCommonCompoundDivisibilityRules-3-2-2",
  "type": "Example",
  "number": "6.2.28",
  "title": "",
  "body": " 12 is divisible by 6 because it is even (divisible by 2) and the sum of its digits (1 + 2 = 3) is divisible by 3.  "
},
{
  "id": "subsubsec-SomeCommonCompoundDivisibilityRules-3-2-3",
  "level": "2",
  "url": "divisibility-theorems-small-numbers.html#subsubsec-SomeCommonCompoundDivisibilityRules-3-2-3",
  "type": "Example",
  "number": "6.2.29",
  "title": "",
  "body": " 14 is not divisible by 6 because while it is even (divisible by 2), the sum of its digits (1 + 4 = 5) is not divisible by 3.  "
},
{
  "id": "subsubsec-SomeCommonCompoundDivisibilityRules-3-3-2",
  "level": "2",
  "url": "divisibility-theorems-small-numbers.html#subsubsec-SomeCommonCompoundDivisibilityRules-3-3-2",
  "type": "Example",
  "number": "6.2.30",
  "title": "",
  "body": " 150 is divisible by 10 because its last digit is 0.  "
},
{
  "id": "subsubsec-SomeCommonCompoundDivisibilityRules-3-3-3",
  "level": "2",
  "url": "divisibility-theorems-small-numbers.html#subsubsec-SomeCommonCompoundDivisibilityRules-3-3-3",
  "type": "Example",
  "number": "6.2.31",
  "title": "",
  "body": " 153 is not divisible by 10 because its last digit is 3, not 0.  "
},
{
  "id": "subsubsec-SomeCommonCompoundDivisibilityRules-3-4-2",
  "level": "2",
  "url": "divisibility-theorems-small-numbers.html#subsubsec-SomeCommonCompoundDivisibilityRules-3-4-2",
  "type": "Example",
  "number": "6.2.32",
  "title": "",
  "body": " 30 is divisible by 15 because the sum of its digits (3 + 0 = 3) is divisible by 3 and its last digit is 0 or 5 (indicating divisibility by 5).  "
},
{
  "id": "subsubsec-SomeCommonCompoundDivisibilityRules-3-4-3",
  "level": "2",
  "url": "divisibility-theorems-small-numbers.html#subsubsec-SomeCommonCompoundDivisibilityRules-3-4-3",
  "type": "Example",
  "number": "6.2.33",
  "title": "",
  "body": " 35 is not divisible by 15 because while its last digit is 5 (indicating divisibility by 5), the sum of its digits (3 + 5 = 8) is not divisible by 3.  "
},
{
  "id": "divisibility-theorems-small-numbers-8-4-2",
  "level": "2",
  "url": "divisibility-theorems-small-numbers.html#divisibility-theorems-small-numbers-8-4-2",
  "type": "Example",
  "number": "6.2.34",
  "title": "",
  "body": " To check if divides , we sum its digits: . Now, to check if divides , we sum its digits: . Since 10 is not divisible by 3, neither is .  "
},
{
  "id": "divisibility-theorems-small-numbers-8-5-2",
  "level": "2",
  "url": "divisibility-theorems-small-numbers.html#divisibility-theorems-small-numbers-8-5-2",
  "type": "Example",
  "number": "6.2.35",
  "title": "",
  "body": " To check if divides , we sum its digits: . Now, to check if divides , we sum its digits: . Finally, summing the digits of 12 gives , which is not divisible by 9. Thus, is not divisible by 9.  "
},
{
  "id": "divisibility-theorems-small-numbers-8-6-2",
  "level": "2",
  "url": "divisibility-theorems-small-numbers.html#divisibility-theorems-small-numbers-8-6-2",
  "type": "Example",
  "number": "6.2.36",
  "title": "",
  "body": " To check if divides , we alternate the sum and subtraction of its digits: . Since 17 is not divisible by 11, neither is .  "
},
{
  "id": "sec-PrimeNumbers",
  "level": "1",
  "url": "sec-PrimeNumbers.html",
  "type": "Section",
  "number": "6.3",
  "title": "Prime Numbers",
  "body": " Prime Numbers   Prime numbers are the multiplicative building blocks of all whole numbers. In fact, we will see that every whole number can be decomposed into a product of (maybe repeated) prime numbers in exactly one way. Let's define a prime number first:    A prime number is a whole number that has exactly two factors; namely and itself. If a natural number is not prime, and not , we say that is composite .    It's worth noting here that using this definition, is not a prime number. Most mathematicians decided to follow this convention since behaves quite differently to other prime numbers, and therefore to avoid frequently talking about as a special case for various results, it was more convenient to exclude from the list of prime numbers.   The number is prime since the only numbers that are factors of are and itself. Every other number does not divide evenly into 7.  The number is composite since , so both and are factors of .     Finding Prime Numbers  Let's try and come up with a list of all prime numbers less than . We could do this for all primes below any number, but we choosse 100 for space reasons.  Let's list all numbers up to 100, and we'll cross off any numbers that we determine are not prime (so are composite, or the number ).  INSERT PIC OF NUMBERS FROM 1 TO 100  We'll cross off since we know that it doesn't have exactly two factors; its only factor is itself. So now we know that the next largest number, , must be prime since it has and itself as a factor, and there are no other numbers smaller than . So we circle and cross off all numbers that have as a factor.  INSERT UPDATED PIC  Now we can go to the smallest number that remains, , and circle that since it must be prime; 2 is not a factor and there are no smaller prime numbers. Like before we circle and cross off all other multiples of :  INSERT UPDATED PIC  We can continue this process until all numbers are either circled or crossed off. Before looking below, try this yourself and check that you get the same list of primes as below:  INSERT UPDATED PIC  This process is very old, and in fact is called the sieve of Erotosthenes , after the Greek mathematician Erotosthenes of Cyrene, of whom this method is attributed to.   We found a list of prime numbers less than 100. Let's see if we notice some patterns about primes by doing the same for numbers less than, say, 500.    Make a table of all numbers up to 500. You can probably search one online and print it off if that makes it easier.    Perform the sieve as above. It will take a bit longer, but it will be the exact same process.    What can you say about the amount of smaller prime numbers compared to the number of larger (at least closer to 500) prime numbers? Why do you think this is the case?    On the same chart, highlight all multiples of 6. What can you say about how prime numbers relate to multiples of 6? Formulate your conjectures in terms of remainders.    Try and prove the conjecture you made in the previous part.  Show that prime numbers cannot have other remainder than the ones that you conjectured. Remember, if you can find a factor of your numbers that isn't or itself, then the number isn't prime.       SECTION ON OTHER SIEVES? ON ALGORITHMIC COMPLEXITY? ON SEGMENTED SIEVES?    How Many Prime Numbers Exist  Looking at the sieve above, it looks like prime numbers get more \"rare\" the higher up we go. So a good question to ask is whether we eventually \"run out\" of prime numbers, or whether there are infinitely many. Let's explore this idea a little bit:  First, we need a small result to help us out. In math, we call a small result that helps us justify a larger result a lemma .   Let be numbers, and let . Then for each from to we have that .    Left as an exercise.  Can you show that each remainder is some number that is not ?    Each division gives you the remainder of .           Let's start with the primes and and put them into the set     Let's make a new number by multiplying all numbers in and then adding , say     By we know that and (although this is pretty obvious anyway). So is not divisible by any prime numbers in our set . This means that is either prime itself, or a product of other primes that aren't already in . In this case is prime.    We now redefine to include our new prime (or primes if had other prime factors.) So in this case now .    We then repear the procedure with the new to obtain , which itself is prime, so we include it in our set as well; .    Let's do this again: now . You can check that which are both prime, so we can add and to our set: .    We can continue this process, and at each step we will form a number that has no numbers in as a factor, so we will be able to add at least one more prime number (either itself if it is prime, or the prime factors of if it is not) to our set.    As our set grows by at least one number every iteration of this process, we know we can always include at least one more prime number in our set. So we will never run out of prime numbers, and thus there are infinitely many prime numbers.      This exercise shows such an important result, that there are infinitely many prime numbers, that we should state this as a theorem:   There are infinitely many prime numbers    The previous exercise.     Some good questions come out of the previous exercise: first, will this list eventually include all prime numbers? Secondly, if we have a large number (like or even bigger,) how can we determine if this number has any prime factors? The second question we will answer in the next subsection of this section.   Show that the number will never appear in the set as defined in the previous exercise.    Think about what the last digit must be in to be divisible by 5, and the possible last digits that you attain in the process above.       How To Determine If a Number is Prime  Think about a number like . We can factor into the product of two numbers in many ways, and we will list them all now.        Later, we will be very careful and learn how to check that these are all of the possible ways of factoring 72 into two numbers. But it is not too hard to check in this case (do you see how to do this?) Let's plot these pairs on a number line to see if we notice something:  INSERT PIC OF A NUMBER LINE WITH EACH PAIR OF FACTORS OF 72 PLOTTED  It looks like the paris are approaching some point, let's call it between 8 and 9, plotted above, and that there is always one number of the pair that's greater than , and one that is less than .  Let's try the same process with another number, say , and see if we can conjecture what this point is mathematically:     Write down all possible factorizations of into two factors. The factors do not have to be different numbers.    Graph these pairs of factors on a number line as above.    Can you determine the point in this case? Can you give a mathematical meaning to this point, as it relates to ?    Conjecture what the meaning of point is in the previous example.     From the exercise above, factoring any number into two factors, it looks like our factorizations approach the positive square root of (usually written ). In a later section we will explore square roots, and other roots, in more detail. The key observation here is that in any pair of factors of , one factor is always greater than or equal to and the other factor is less than or equal to . Let's write this as a lemma:     Let . If for some where, say, , then and .    We are going to show this result is true using a proof by contradiction . As in part 3 of , we are going to pretend that there is a counterexample to our conditional statement (that is, the only situation where is false; when is true and is false.) We will show that if we are in this case, then mathematics \"breaks\" and we end up with something that is never true. This means that there are no counterexamples to our statement, so it must always be true. In our case, we will end up with showing that , which is always false; of course, no number is strictly greater than itself!. The idea will be that if we multiply two number bigger than together, we must get a number bigger than .  Assuming that the if-part is true, let be a factorization of into two factors, where . Let's also assume that the then-part is false; that either both    or     .   There are two cases here. We will do the first case, and leave the second case as an exercise for you.  By the definition of a square root, we can write . Since we're assuming , if we replace one of the in the first expression with we will obtain a larger product, so . Similarly, we're also assuming , if we replace the other in the new expression with we will obtain a larger product, so . But we know that so we can replace the on the right hand side by . So So if we look at the (in)equation above, we have just showed that . Since this is never true, then there are no counterexamples to our original statement (at least in the first case). The case where we assume that is very similar, and is left as an exercise to you. See if you can modify the case above to be a proof for this case.  Combining the two cases, we know that there are no counterexamples to our conditional statement, so it is always true.      We can use the idea above to help us, somewhat efficiently, determine if a number is composite. Indeed, if is a composite number, it must have a pair of factors (and say that ) where , and by it must be that ; that is, every pair of factors of has one of the factors that is no bigger than . So we can only worry about these factors, since the larger factors are paired with a smaller one.  We can do even better than checking if all numbers less than are factors of . We'll show that you only need to check whether the prime numbers less than are factors of . First, we show that every composite number has at least one prime factor, and then we will show that the smallest non-unit (that is, not 1) factor of is indeed a prime number.     If is composite then has at least one prime factor.    Similar to the previous proof, let's show this by contradiction. We'll pretend we have a counterexample (in fact the smallest counterexample), and show that something \"breaks\", so thus there must be no counterexamples. The contradiction we'll have is that even though we picked the smallest counterexample, we'll find one that's smaller.  Let be the smallest composite number (if-part true) that has no prime factors (then-part false). Since is composite and has no prime factors, then for some composite numbers . But all proper factors of a number are between and exclusive (that is ). But since has no prime factors, neither can or , since if for some prime number then , and thus is a factor of . But this means that is a smaller composite number than with no prime factors, so isn't the smallest counterexample, even though we picked it to be. This means that there is no smallest counterexample, and thus no counterexample to our statement. So must have at least one prime factor.     To show that the smallest factor of is always a prime number, we do a very similar argument. We'll leave it as an exercise, but we state the theorem.   If is composite, then the smallest proper factor of is a prime number.    Left as an exercise.  If the smallest factor of was composite, could you find an even smaller factor of ?       Putting this all together, we know that if a number is composite then there is a prime number such that So to check that is composite, all we need to do is check if each prime number up to is a factor of . It's more common to talk about testing if a number *isn't* composite, so we will phrase the test below in that language:   Teat For Primality  A number where is prime exactly when it has no prime factors . We can test for primality using this following steps:  1. Determine the largest prime number .  2. For each prime number , determine if . If you find such a prime , stop. Then is composite. Otherwise go to the next step.  3. Congratuations! Your number is prime!   Let's see this test in action.   Determine if the number is prime.   First, we find the largest prime . If we have access to a calculator, we know that . But if we do not, we can square primes and \"sandwich\" 403 between these squares. We know that and the subsequent prime . So this means that , and is the largest prime that is less than or equal to .  We now test the divisibility of each prime up to into . If none of these primes are a factor of then by our test for primality, is prime. We will do each prime individually, and when we have a divisibility rule to help us, we will use that.  2: Since , we know .  3: Since , we know .  5: Since , we know .  7: By division, we know that . Since we have a non-zero remainder we know .  11: Since , we know   13: By division, we know that . So indeed and . We have foudn a prime factor of and thus by our test for primality, is not prime (and we have a factorization of it too!)  Note that once we find a prime that divides our number , we do not need to test the other primes; we already know that is composite.     Determine if is prime.   We need to find the greatest prime less than or equal to . Without a calculator, we can bound between two consecutive primes, or put another way, bound between two squares od primes.  We know that and so , and our   We now check if each prime less than is a factor of :  2: Since , we know   3: Since , we know   5: Since , we know .  7: By division, we know that . Since we have a non-zero remainder, we know .  11: Since , we know .  13: By division we know that . Since we have a non-zero remiander, we know .  17: By division we know that . Since we have a non-zero remainder we know that .  We have checked the divisibility of all primes up to and including . Since we have found that none are factors of our test for primality guarantees us that is prime.     "
},
{
  "id": "def-PrimeNumber",
  "level": "2",
  "url": "sec-PrimeNumbers.html#def-PrimeNumber",
  "type": "Definition",
  "number": "6.3.1",
  "title": "",
  "body": "  A prime number is a whole number that has exactly two factors; namely and itself. If a natural number is not prime, and not , we say that is composite .   "
},
{
  "id": "sec-PrimeNumbers-2-4",
  "level": "2",
  "url": "sec-PrimeNumbers.html#sec-PrimeNumbers-2-4",
  "type": "Example",
  "number": "6.3.2",
  "title": "",
  "body": " The number is prime since the only numbers that are factors of are and itself. Every other number does not divide evenly into 7.  The number is composite since , so both and are factors of .  "
},
{
  "id": "subsec-FindingPrimeNumbers-11",
  "level": "2",
  "url": "sec-PrimeNumbers.html#subsec-FindingPrimeNumbers-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sieve of Erotosthenes "
},
{
  "id": "subsec-FindingPrimeNumbers-12",
  "level": "2",
  "url": "sec-PrimeNumbers.html#subsec-FindingPrimeNumbers-12",
  "type": "Checkpoint",
  "number": "6.3.3",
  "title": "",
  "body": " We found a list of prime numbers less than 100. Let's see if we notice some patterns about primes by doing the same for numbers less than, say, 500.    Make a table of all numbers up to 500. You can probably search one online and print it off if that makes it easier.    Perform the sieve as above. It will take a bit longer, but it will be the exact same process.    What can you say about the amount of smaller prime numbers compared to the number of larger (at least closer to 500) prime numbers? Why do you think this is the case?    On the same chart, highlight all multiples of 6. What can you say about how prime numbers relate to multiples of 6? Formulate your conjectures in terms of remainders.    Try and prove the conjecture you made in the previous part.  Show that prime numbers cannot have other remainder than the ones that you conjectured. Remember, if you can find a factor of your numbers that isn't or itself, then the number isn't prime.      "
},
{
  "id": "subsec-HowManyPrimeNumbersExist-3",
  "level": "2",
  "url": "sec-PrimeNumbers.html#subsec-HowManyPrimeNumbersExist-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "lemma "
},
{
  "id": "subsec-HowManyPrimeNumbersExist-4",
  "level": "2",
  "url": "sec-PrimeNumbers.html#subsec-HowManyPrimeNumbersExist-4",
  "type": "Example",
  "number": "6.3.5",
  "title": "",
  "body": "    Let's start with the primes and and put them into the set     Let's make a new number by multiplying all numbers in and then adding , say     By we know that and (although this is pretty obvious anyway). So is not divisible by any prime numbers in our set . This means that is either prime itself, or a product of other primes that aren't already in . In this case is prime.    We now redefine to include our new prime (or primes if had other prime factors.) So in this case now .    We then repear the procedure with the new to obtain , which itself is prime, so we include it in our set as well; .    Let's do this again: now . You can check that which are both prime, so we can add and to our set: .    We can continue this process, and at each step we will form a number that has no numbers in as a factor, so we will be able to add at least one more prime number (either itself if it is prime, or the prime factors of if it is not) to our set.    As our set grows by at least one number every iteration of this process, we know we can always include at least one more prime number in our set. So we will never run out of prime numbers, and thus there are infinitely many prime numbers.     "
},
{
  "id": "thm-InfinitelyManyPrimes",
  "level": "2",
  "url": "sec-PrimeNumbers.html#thm-InfinitelyManyPrimes",
  "type": "Theorem",
  "number": "6.3.6",
  "title": "",
  "body": "  There are infinitely many prime numbers    The previous exercise.   "
},
{
  "id": "subsec-HowManyPrimeNumbersExist-7",
  "level": "2",
  "url": "sec-PrimeNumbers.html#subsec-HowManyPrimeNumbersExist-7",
  "type": "Checkpoint",
  "number": "6.3.7",
  "title": "",
  "body": " Show that the number will never appear in the set as defined in the previous exercise.    Think about what the last digit must be in to be divisible by 5, and the possible last digits that you attain in the process above.    "
},
{
  "id": "subsec-HowToDetermineIfaNumberisPrime-13",
  "level": "2",
  "url": "sec-PrimeNumbers.html#subsec-HowToDetermineIfaNumberisPrime-13",
  "type": "Checkpoint",
  "number": "6.3.8",
  "title": "",
  "body": "   Write down all possible factorizations of into two factors. The factors do not have to be different numbers.    Graph these pairs of factors on a number line as above.    Can you determine the point in this case? Can you give a mathematical meaning to this point, as it relates to ?    Conjecture what the meaning of point is in the previous example.    "
},
{
  "id": "subsec-HowToDetermineIfaNumberisPrime-15",
  "level": "2",
  "url": "sec-PrimeNumbers.html#subsec-HowToDetermineIfaNumberisPrime-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "proof by contradiction "
},
{
  "id": "thm-primefactorofcomposite",
  "level": "2",
  "url": "sec-PrimeNumbers.html#thm-primefactorofcomposite",
  "type": "Theorem",
  "number": "6.3.10",
  "title": "",
  "body": "  If is composite then has at least one prime factor.    Similar to the previous proof, let's show this by contradiction. We'll pretend we have a counterexample (in fact the smallest counterexample), and show that something \"breaks\", so thus there must be no counterexamples. The contradiction we'll have is that even though we picked the smallest counterexample, we'll find one that's smaller.  Let be the smallest composite number (if-part true) that has no prime factors (then-part false). Since is composite and has no prime factors, then for some composite numbers . But all proper factors of a number are between and exclusive (that is ). But since has no prime factors, neither can or , since if for some prime number then , and thus is a factor of . But this means that is a smaller composite number than with no prime factors, so isn't the smallest counterexample, even though we picked it to be. This means that there is no smallest counterexample, and thus no counterexample to our statement. So must have at least one prime factor.   "
},
{
  "id": "thm-SmallestFactorIsPrime",
  "level": "2",
  "url": "sec-PrimeNumbers.html#thm-SmallestFactorIsPrime",
  "type": "Theorem",
  "number": "6.3.11",
  "title": "",
  "body": "  If is composite, then the smallest proper factor of is a prime number.    Left as an exercise.  If the smallest factor of was composite, could you find an even smaller factor of ?     "
},
{
  "id": "subsec-HowToDetermineIfaNumberisPrime-23",
  "level": "2",
  "url": "sec-PrimeNumbers.html#subsec-HowToDetermineIfaNumberisPrime-23",
  "type": "Example",
  "number": "6.3.12",
  "title": "",
  "body": " Determine if the number is prime.   First, we find the largest prime . If we have access to a calculator, we know that . But if we do not, we can square primes and \"sandwich\" 403 between these squares. We know that and the subsequent prime . So this means that , and is the largest prime that is less than or equal to .  We now test the divisibility of each prime up to into . If none of these primes are a factor of then by our test for primality, is prime. We will do each prime individually, and when we have a divisibility rule to help us, we will use that.  2: Since , we know .  3: Since , we know .  5: Since , we know .  7: By division, we know that . Since we have a non-zero remainder we know .  11: Since , we know   13: By division, we know that . So indeed and . We have foudn a prime factor of and thus by our test for primality, is not prime (and we have a factorization of it too!)  Note that once we find a prime that divides our number , we do not need to test the other primes; we already know that is composite.   "
},
{
  "id": "subsec-HowToDetermineIfaNumberisPrime-24",
  "level": "2",
  "url": "sec-PrimeNumbers.html#subsec-HowToDetermineIfaNumberisPrime-24",
  "type": "Example",
  "number": "6.3.13",
  "title": "",
  "body": " Determine if is prime.   We need to find the greatest prime less than or equal to . Without a calculator, we can bound between two consecutive primes, or put another way, bound between two squares od primes.  We know that and so , and our   We now check if each prime less than is a factor of :  2: Since , we know   3: Since , we know   5: Since , we know .  7: By division, we know that . Since we have a non-zero remainder, we know .  11: Since , we know .  13: By division we know that . Since we have a non-zero remiander, we know .  17: By division we know that . Since we have a non-zero remainder we know that .  We have checked the divisibility of all primes up to and including . Since we have found that none are factors of our test for primality guarantees us that is prime.   "
},
{
  "id": "sec-FactorsAndMultiples",
  "level": "1",
  "url": "sec-FactorsAndMultiples.html",
  "type": "Section",
  "number": "6.4",
  "title": "Factors and Multiples",
  "body": " Factors and Multiples   Primes As Building Blocks  From the previous sections, we know some interesting and important facts about prime numbers themselves. Now we will look at how prime numbers are the building blocks of every composite number.  Let's try and factor a number completely; that is, let's also factor the composite factors we use so that there are no composite factors left and all of our factors are prime. Let's try again.  We know that , and both of these are composite, so we can factor both of these numbers: We know the numbers and are prime, so we cannot factor them any further. However, we can factor : Now all of our factors in our factorization are prime! Since multiplication is commutative and associative, we can regroup our factors so all of the 's and 's are together: We call this factorization of a prime factorization . Let's definte this more carefully:    A prime factorization of a number is a factorization of in the form where the are distinct prime numbers in increasing order, there are distinct primes, and the are the (natural number) exponents of these primes.     For we have that (and in this case there are distinct primes in the prime factorization), (how many of the prime we have in our prime factorization), and .  If then you can check that , so , there are distinct primes so , and    We can make a tree diagram to show this factorization into primes: INSERT PIC OF TREE DIAGRAM  There are many different factorizations of into two different factors, so let's see what happens if we try starting with another one: We send up with the same prime factorization as the first example. Here is the tree diagram of this factorization: INSERT PIC OF TREE DIAGRAM   Try determining the prime factorization of starting with other factorizations. What do you notice?   It looks like no matter how we start factoring we end up with the same prime factorization.   Add some strength to this conjecture by choosing another number and determine prime factorizations of beginning with different factorizations into two numbers.   It looks like our conjecture may be true, and in fact it is. We will show that every number has exactly one prime factorization, so we can indeed talk about *the* prime factorization of .  The idea of showing a prime factorization always exists is by using . We'll factor out a prime at each step, and then keep going with the remaining composite factor until we have factored completely into a product of primes.   Let's start with . We can easily see that is a factor, so we write Since is composite, we can factor a prime out of it as well; again, it is easy to see that is a prime factor: We now continue with which is composite. We easily see that is a prime factor: Since is already prime, there is nothing more to factor; we can regroup to make it easier to read.    Before we get to this theorem, we will need a small lemma. This lemma was originally proved by the ancient Greek mathematician Euclid and is usually named after him. The proof of this lemma uses some techniques from later in this section, so we will prove it later.  Euclid's Lemma   Let and be a prime number. If divides the product of our 's; that is, then for some .    Here's an example showing how the theorem above works:   Suppose and we know that . By we know that at least one of , or is true. Since we know both of the first two divisibility statements are false, it must be that .    The theorem we are about to prove is so important and special, it is given a name to reflect this fact.    Fundamental Theorem of Arithmetic   If is a natural number then has a prime factorization and that prime factorization is unique.    Let's do this proof in two cases: first the easy case when is a prime number itself. Then is its own prime factorization, and we are done.  Now let be a composite number. There are two things to show here: first, that we can factor into a product of primes (the existence of a prime factorization), and secondly, that there is only one way to do so (the uniqueness of the prime factorization). We will do these two parts separately.  Existence: By we know that has at least one prime factor, let's call one of them . So we can factor this out so for some number . If is itself prime, we are done. If it isn't, then is composite and we can use again. And we can repeat this process, which must end since is a finite number and , until we have completely factored into a product of primes. is an example of this part of the theorem.  Uniqueness: we will show this by contradiction, like in some previous proofs in this section. If there are numbers with two distinct prime factorizations, there must be a smallest one. We'll show that if we pick the smallest one, we can find an even smaller number with two different prime factorizations, which is our contradiction.  Let be the smallest number to have have two different prime factorizations, say and where the 's and 's are (not necessarily distinct) primes, and let's say that . We know that since , since By Euclid's Lemma, , we know that for one of the primes . But since is prime, its only factors are and . Since , since it is a prime as well, it must be that . Now let's divide both sides by this common prime, remembering that :  Since it's clear that . But the equation above is two different prime factorizations for , so was not the smallest number with two different prime factorizations. So this is a contradiction, which means that our original statement is true.     This is a very special idea. It means that every natural number is built from prime numbers, and is built in exactly one way. So we can study properties of factors of numbers by studying their prime factorization. We will do so in upcoming sections.    How Many Factors Does A Number Have?  We know that all factors of numbers come in pairs, as if , then for some other (possibly the same as ) factor . We can also use the fact that one of the factors of must be at most . So we can determine if each number is a factor, and we can get the other factor \"for free\".   Consider . We know, checking via long division or using our divisibility rules, we obtain the following pairs of factors:   1 and 144    2 and 72    3 and 48    4 and 36    6 and 24    8 and 18    9 and 16    12 and 12   Since we have reached we know we can stop. We now count the unique factors (we don't want to count 12 twice) and see we have 15 factors.   However, if we had a larger number, such as 3600, this would take a while, as we would have to check the divisibility of every number up to Let's see if we can determine an easier and more efficient way of counting the number of factors of a number. We will use the fact that each number has a prime factorization to help us out.   Let's look again at . Using our method from we can write as a product of primes: . Now let's list the factors again, but also write their prime factorization:    1 and 144     2 and 72     3 and 48     4 and 36     6 and 24     8 and 18     9 and 16     12 and 12     Note that if , then must either be , or a product of some of the 's and 's that are in the prime factorization of , since we can think about grouping the primes in the prime factorization to make a pair of factors.  We can think: if is a factor of that we are making, how many choices for the number of 's do we have? How many choices for the number of 's do we have? Our factor can have 0,1,2,3, or 4 copies of (so 5 choices in total), and either 0,1, or 2 copies of (so 3 choices in total). For example, if our factor has three 's and one , then .  Since we have 5 choices for the number of 's and 3 choices for the number of 's, we have total factors of .   This process works for any number, as long as we have it factored into its prime factorization. We will state this result as a theorem.    Let where has a prime factorization of for some primes and non-negative exponents . Then has factors in total.    If is a factor of , then can be written as a subset of the prime factorization of . Thus, for each prime , we can have copies of in our factor, for a total of choices. Since we have to make a choice for each different prime, and each choice is independent of other choices (that is, choosing the number of copies of one prime does not affect the number of choices for another prime), we can multiply these numbers of choices for each prime to determine the number of factors in total.     Let    How many factors does have in total?    How many prime factors does have?    How many composite factors does have?        Using we can say that has factors in total.    Since we were given the prime factorization of we can simply read off the prime factors: and . So has prime factors.    We know how many total factors there are, and we know how many prime factors there are. Let be the number of composite factors of . Remembering that factors are either composite, prime, or the number , we can say that and thus .       Putting It All Together  Let's work through one example that uses many of the techniques and idea that we've encountered so far.   Determine the total number of factors of the number .   Since we don't have the prime factorization of we need to factor it completely into its prime factorization. There are many ways of doing this, but we can usse our divisibility tests to determine some small factors, and then once our divisibility tests fail, we can use trial division to determine other prime factors.  First, it's worth noting that by our divisibility test for we know that .  We first notice that ends in two zeros, so we know that . Since we can write . We now look for more prime factors of Since ends in an even digit, we know that and by division we can determine that So .  Next we may notice that so . By division we see that . We then notice that so and, again by division, . Putting this together we have   We can check all of our divisiblity tests and find that fails all of them. So by we need to determine if has any prime factors great than 11. We note that and and that and are consecutive primes so so we need to check all prime numbers of size and smaller. We've already checked so we need to check by trial division.  Using this trial division, we see that , so we know that is a factor of . And since is also prime, we have decomposed into its prime factorization: . Thus by we see that has total factors. Of these factors, are prime, is the number , and are composite.       Greatest Common Divisor and Least Common Multiple   Unraveling the Concepts  When exploring the properties of numbers, particularly sets of natural numbers, the concept of the Greatest Common Divisor (GCD) , also known as the Greatest Common Factor (GCF) , is an important idea. The GCD of a set of numbers is essentially the largest factor that divides each number in the set without leaving a remainder.   Understanding GCD Through Prime Factorization  To understand the GCD, we can use the idea of prime factorizations to help us. Let's consider an example to elucidate this process: finding the GCD of 42, 294, and 132. We begin by determining the prime factorization of each number. For instance, the prime factorization of these numbers would be:          If is the GCD of our three numbers, then we know that and . So we must be able to make by grouping prime factors of our three numbers in each number. For example, we know that since is a factor or each of our numbers, and similarly for . However, we know that since is not a prime factor of . It follows that the smallest number of each prime factor will be factors of .  In these factorizations, we identify the common prime factors and consider the lowest power (exponent) of these primes present in each number. For our example, the common primes are 2 and 3, and the lowest powers for these are and , respectively. Thus, the GCD is and we can write . This can be verified as:          Note that there are no common factors of the remaining factors of each number. That is, .    Least Common Multiple (LCM)  The concept of the Least Common Multiple (LCM) is somewhat the inverse of the GCD. It represents the smallest number that is a multiple of every number in a set. To find the LCM, we again turn to prime factorization.   Exploring LCM with an Example  Using the same set of numbers (42, 294, and 132), we want a number such that , and . So we need that the prime factorization of each number appears in the prime factorization of . We can try and \"build\" : We know that since , it must be that , where is the prime factors of the remaining numbers (294 and 132 so far; we'll redefine as we go), since must be a multiple of .  Now, must also be a multiple of so we can include the minimum prime factors in so that is a multiple of both and (so we need to keep all the prime factors of in the prime factorization of ). We note that we need another , so we can say that .  Finally, we note that we need to include the prime factors of in as well. We note we already have a and , but still need to include another and an . So we must include these in our prime factorization. So .  We note that we needed to include the *maximum* number of each prime factor in each of our numbers.  Using the same set of numbers (42, 294, and 132), we determine the LCM by looking for the highest power (exponent) of each prime factor present in the factorizations of these numbers. In our example:   The maximum exponent for 2 is 2 (from 132)  The maximum exponent for 3 is 1 (common in all)  The maximum exponent for 7 is 2 (from 294)  The maximum exponent for 11 is 1 (from 132)   Thus, the LCM is calculated as which when expanded, gives us the LCM.   Understanding GCD and LCM is not just an academic exercise. These concepts are crucial in various mathematical operations, such as simplifying fractions (GCD) and finding common denominators (LCM). Moreover, they form a foundational understanding for more advanced mathematical concepts.      Word Problems: GCD and LCM in Practice  Let's delve into some practical word problems to see how the concepts of GCD and LCM are applied in real-life scenarios.    Problem 1: Distributing Items in Boxes  Consider an online shop that needs to send shirts, hats, and bags to a supplier. The goal is to use the smallest number of boxes possible, with each box containing the exact same items. This is a typical problem where we need to find the greatest common divisor (GCD) of the numbers , , and .  After calculating, we find that the GCD of these numbers is . Therefore, we need boxes. Each box will contain shirts, hats, and bags. This distribution ensures that each box has the same items and uses the minimum number of boxes possible.     Problem 2: Buying Ingredients for Burgers  Imagine owning a burger restaurant that requires patties, buns, and cheese slices for its burgers. Patties come in boxes of , buns in bags of , and cheese slices in packs of . The objective is to purchase these ingredients in such quantities that there are no leftovers, and the number of burgers made is as small as possible.  This scenario calls for finding the least common multiple (LCM) of , , and . Calculating this, we find the LCM to be . Consequently, to make burgers without leftovers, we need boxes of patties, bags of buns, and packs of cheese slices. This is the least number of burgers we can make without any ingredient left over.     Visualizing GCD and LCM with Venn Diagrams  GCD and LCM can also be visualized using Venn diagrams. For example, consider the numbers and . By placing the prime factors of these numbers in a Venn diagram, we can easily identify the GCD (intersection of the sets) and the LCM (union of the sets). This visual approach offers a clear and intuitive understanding of how these concepts interrelate.     Understanding the Euclidean Algorithm  The Euclidean Algorithm offers a systematic approach to finding the greatest common divisor (GCD) of two numbers, especially when their prime factorizations are complex or cumbersome. This algorithm is named after the ancient Greek mathematician Euclid.   Basic Principles  To begin with, let's review some essential principles:   The GCD of any counting number and is itself, as every number is a divisor of zero.  For any two counting numbers and , with , we can express as , where is the quotient, and is the remainder such that .  The GCD of and is the same as the GCD of and the remainder .   These principles reduce the problem of finding the GCD of two large numbers to a series of simpler calculations.    Euclidean Algorithm   Given two positive integers and (without loss of generality, assume ), the greatest common divisor (GCD) of and can be computed using the following iterative process:  Divide by to get a quotient and a remainder , where . Then, the GCD of and is the same as the GCD of and . Continue this process, replacing with and with , until is zero. The GCD is the non-zero remainder from the previous step.    Let be the greatest common divisor of and . By the quotient-remainder theorem, can be expressed as , where is the quotient and is the remainder, and .  Since divides both and , it also divides (which is equal to ). Therefore, divides . Now, if there exists a larger common divisor of and , it would also divide (since ), contradicting the fact that is the greatest common divisor of and . Hence, is also the greatest common divisor of and .  Repeating this process iteratively, we reduce the problem to finding the GCD of smaller and smaller pairs of numbers, until the remainder becomes zero. At that point, the GCD of the original pair and is the non-zero remainder from the previous division.  This completes the proof that the Euclidean Algorithm correctly computes the GCD of two positive integers.      Proof of the Euclidean Algorithm  Let be the greatest common divisor of and . By the quotient-remainder theorem, can be expressed as , where is the quotient and is the remainder, and .  Since divides both and , it also divides (which is equal to ). Therefore, divides . Now, if there exists a larger common divisor of and , it would also divide (since ), contradicting the fact that is the greatest common divisor of and . Hence, is also the greatest common divisor of and .  Repeating this process iteratively, we reduce the problem to finding the GCD of smaller and smaller pairs of numbers, until the remainder becomes zero. At that point, the GCD of the original pair and is the non-zero remainder from the previous division.  This completes the proof that the Euclidean Algorithm correctly computes the GCD of two positive integers.     Applying the Euclidean Algorithm  The Euclidean Algorithm iteratively applies these principles. Let's consider an example: finding the GCD of and .  We start by dividing the larger number by the smaller one, and then replace the original pair with the divisor and the remainder. We repeat this process until the remainder is zero. The GCD is the non-zero remainder just before this point.  In our example, we proceed as follows:       (remainder is zero)   Hence, the GCD of and is .    Additional Examples  Let's explore another example: finding the GCD of and using the Euclidean Algorithm.  Following the same process, we calcualte the GCD of these numbers to be . This means that the numbers are coprime, since they have no common prime factors.  We can use the Euclidean algorithm to help us simplify fractions with large numerators and denominators:   Example: Simplifying a Complex Fraction   Simplify the fraction .    We use the Euclidean Algorithm to find the GCD of and :             (remainder is zero)   The GCD is . Simplify the fraction by dividing both the numerator and denominator by :   .  Note that we know for certain that this fraction is in lowest terms since if this could be reduced further, we would have found a larger factor as the GCD of these numbers.      "
},
{
  "id": "subsec-PrimesAsBuildingBlocks-4",
  "level": "2",
  "url": "sec-FactorsAndMultiples.html#subsec-PrimesAsBuildingBlocks-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "prime factorization "
},
{
  "id": "def-PrimeFactoriZation",
  "level": "2",
  "url": "sec-FactorsAndMultiples.html#def-PrimeFactoriZation",
  "type": "Definition",
  "number": "6.4.1",
  "title": "",
  "body": "  A prime factorization of a number is a factorization of in the form where the are distinct prime numbers in increasing order, there are distinct primes, and the are the (natural number) exponents of these primes.   "
},
{
  "id": "subsec-PrimesAsBuildingBlocks-6",
  "level": "2",
  "url": "sec-FactorsAndMultiples.html#subsec-PrimesAsBuildingBlocks-6",
  "type": "Example",
  "number": "6.4.2",
  "title": "",
  "body": " For we have that (and in this case there are distinct primes in the prime factorization), (how many of the prime we have in our prime factorization), and .  If then you can check that , so , there are distinct primes so , and   "
},
{
  "id": "subsec-PrimesAsBuildingBlocks-9",
  "level": "2",
  "url": "sec-FactorsAndMultiples.html#subsec-PrimesAsBuildingBlocks-9",
  "type": "Checkpoint",
  "number": "6.4.3",
  "title": "",
  "body": " Try determining the prime factorization of starting with other factorizations. What do you notice?  "
},
{
  "id": "subsec-PrimesAsBuildingBlocks-11",
  "level": "2",
  "url": "sec-FactorsAndMultiples.html#subsec-PrimesAsBuildingBlocks-11",
  "type": "Checkpoint",
  "number": "6.4.4",
  "title": "",
  "body": " Add some strength to this conjecture by choosing another number and determine prime factorizations of beginning with different factorizations into two numbers.  "
},
{
  "id": "ex-PrimeFactorization",
  "level": "2",
  "url": "sec-FactorsAndMultiples.html#ex-PrimeFactorization",
  "type": "Example",
  "number": "6.4.5",
  "title": "",
  "body": " Let's start with . We can easily see that is a factor, so we write Since is composite, we can factor a prime out of it as well; again, it is easy to see that is a prime factor: We now continue with which is composite. We easily see that is a prime factor: Since is already prime, there is nothing more to factor; we can regroup to make it easier to read.   "
},
{
  "id": "lem-EuclidsLemma",
  "level": "2",
  "url": "sec-FactorsAndMultiples.html#lem-EuclidsLemma",
  "type": "Lemma",
  "number": "6.4.6",
  "title": "Euclid’s Lemma.",
  "body": " Euclid's Lemma   Let and be a prime number. If divides the product of our 's; that is, then for some .   "
},
{
  "id": "subsec-PrimesAsBuildingBlocks-15-3",
  "level": "2",
  "url": "sec-FactorsAndMultiples.html#subsec-PrimesAsBuildingBlocks-15-3",
  "type": "Example",
  "number": "6.4.7",
  "title": "",
  "body": " Suppose and we know that . By we know that at least one of , or is true. Since we know both of the first two divisibility statements are false, it must be that .  "
},
{
  "id": "subsec-PrimesAsBuildingBlocks-17",
  "level": "2",
  "url": "sec-FactorsAndMultiples.html#subsec-PrimesAsBuildingBlocks-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "existence uniqueness "
},
{
  "id": "subsec-HowManyFactorsDoesANumberHave-3",
  "level": "2",
  "url": "sec-FactorsAndMultiples.html#subsec-HowManyFactorsDoesANumberHave-3",
  "type": "Example",
  "number": "6.4.9",
  "title": "",
  "body": " Consider . We know, checking via long division or using our divisibility rules, we obtain the following pairs of factors:   1 and 144    2 and 72    3 and 48    4 and 36    6 and 24    8 and 18    9 and 16    12 and 12   Since we have reached we know we can stop. We now count the unique factors (we don't want to count 12 twice) and see we have 15 factors.  "
},
{
  "id": "subsec-HowManyFactorsDoesANumberHave-5",
  "level": "2",
  "url": "sec-FactorsAndMultiples.html#subsec-HowManyFactorsDoesANumberHave-5",
  "type": "Example",
  "number": "6.4.10",
  "title": "",
  "body": " Let's look again at . Using our method from we can write as a product of primes: . Now let's list the factors again, but also write their prime factorization:    1 and 144     2 and 72     3 and 48     4 and 36     6 and 24     8 and 18     9 and 16     12 and 12     Note that if , then must either be , or a product of some of the 's and 's that are in the prime factorization of , since we can think about grouping the primes in the prime factorization to make a pair of factors.  We can think: if is a factor of that we are making, how many choices for the number of 's do we have? How many choices for the number of 's do we have? Our factor can have 0,1,2,3, or 4 copies of (so 5 choices in total), and either 0,1, or 2 copies of (so 3 choices in total). For example, if our factor has three 's and one , then .  Since we have 5 choices for the number of 's and 3 choices for the number of 's, we have total factors of .  "
},
{
  "id": "thm-NumberOfFactors",
  "level": "2",
  "url": "sec-FactorsAndMultiples.html#thm-NumberOfFactors",
  "type": "Theorem",
  "number": "6.4.11",
  "title": "",
  "body": "  Let where has a prime factorization of for some primes and non-negative exponents . Then has factors in total.    If is a factor of , then can be written as a subset of the prime factorization of . Thus, for each prime , we can have copies of in our factor, for a total of choices. Since we have to make a choice for each different prime, and each choice is independent of other choices (that is, choosing the number of copies of one prime does not affect the number of choices for another prime), we can multiply these numbers of choices for each prime to determine the number of factors in total.   "
},
{
  "id": "subsec-HowManyFactorsDoesANumberHave-8",
  "level": "2",
  "url": "sec-FactorsAndMultiples.html#subsec-HowManyFactorsDoesANumberHave-8",
  "type": "Example",
  "number": "6.4.12",
  "title": "",
  "body": " Let    How many factors does have in total?    How many prime factors does have?    How many composite factors does have?        Using we can say that has factors in total.    Since we were given the prime factorization of we can simply read off the prime factors: and . So has prime factors.    We know how many total factors there are, and we know how many prime factors there are. Let be the number of composite factors of . Remembering that factors are either composite, prime, or the number , we can say that and thus .     "
},
{
  "id": "subsubsec-PuttingItAllTogether-3",
  "level": "2",
  "url": "sec-FactorsAndMultiples.html#subsubsec-PuttingItAllTogether-3",
  "type": "Example",
  "number": "6.4.13",
  "title": "",
  "body": " Determine the total number of factors of the number .   Since we don't have the prime factorization of we need to factor it completely into its prime factorization. There are many ways of doing this, but we can usse our divisibility tests to determine some small factors, and then once our divisibility tests fail, we can use trial division to determine other prime factors.  First, it's worth noting that by our divisibility test for we know that .  We first notice that ends in two zeros, so we know that . Since we can write . We now look for more prime factors of Since ends in an even digit, we know that and by division we can determine that So .  Next we may notice that so . By division we see that . We then notice that so and, again by division, . Putting this together we have   We can check all of our divisiblity tests and find that fails all of them. So by we need to determine if has any prime factors great than 11. We note that and and that and are consecutive primes so so we need to check all prime numbers of size and smaller. We've already checked so we need to check by trial division.  Using this trial division, we see that , so we know that is a factor of . And since is also prime, we have decomposed into its prime factorization: . Thus by we see that has total factors. Of these factors, are prime, is the number , and are composite.   "
},
{
  "id": "euclidean_algorithm_basics-3",
  "level": "2",
  "url": "sec-FactorsAndMultiples.html#euclidean_algorithm_basics-3",
  "type": "List",
  "number": "6.4.14",
  "title": "",
  "body": " The GCD of any counting number and is itself, as every number is a divisor of zero.  For any two counting numbers and , with , we can express as , where is the quotient, and is the remainder such that .  The GCD of and is the same as the GCD of and the remainder .  "
},
{
  "id": "euclidean_algorithm_theorem_statement",
  "level": "2",
  "url": "sec-FactorsAndMultiples.html#euclidean_algorithm_theorem_statement",
  "type": "Theorem",
  "number": "6.4.15",
  "title": "Euclidean Algorithm.",
  "body": " Euclidean Algorithm   Given two positive integers and (without loss of generality, assume ), the greatest common divisor (GCD) of and can be computed using the following iterative process:  Divide by to get a quotient and a remainder , where . Then, the GCD of and is the same as the GCD of and . Continue this process, replacing with and with , until is zero. The GCD is the non-zero remainder from the previous step.    Let be the greatest common divisor of and . By the quotient-remainder theorem, can be expressed as , where is the quotient and is the remainder, and .  Since divides both and , it also divides (which is equal to ). Therefore, divides . Now, if there exists a larger common divisor of and , it would also divide (since ), contradicting the fact that is the greatest common divisor of and . Hence, is also the greatest common divisor of and .  Repeating this process iteratively, we reduce the problem to finding the GCD of smaller and smaller pairs of numbers, until the remainder becomes zero. At that point, the GCD of the original pair and is the non-zero remainder from the previous division.  This completes the proof that the Euclidean Algorithm correctly computes the GCD of two positive integers.   "
},
{
  "id": "euclidean_algorithm_proof",
  "level": "2",
  "url": "sec-FactorsAndMultiples.html#euclidean_algorithm_proof",
  "type": "Proof",
  "number": "6.4.5.1.1",
  "title": "Proof of the Euclidean Algorithm.",
  "body": " Proof of the Euclidean Algorithm  Let be the greatest common divisor of and . By the quotient-remainder theorem, can be expressed as , where is the quotient and is the remainder, and .  Since divides both and , it also divides (which is equal to ). Therefore, divides . Now, if there exists a larger common divisor of and , it would also divide (since ), contradicting the fact that is the greatest common divisor of and . Hence, is also the greatest common divisor of and .  Repeating this process iteratively, we reduce the problem to finding the GCD of smaller and smaller pairs of numbers, until the remainder becomes zero. At that point, the GCD of the original pair and is the non-zero remainder from the previous division.  This completes the proof that the Euclidean Algorithm correctly computes the GCD of two positive integers.  "
},
{
  "id": "euclidean_algorithm_procedure-5",
  "level": "2",
  "url": "sec-FactorsAndMultiples.html#euclidean_algorithm_procedure-5",
  "type": "List",
  "number": "6.4.16",
  "title": "",
  "body": "     (remainder is zero)  "
},
{
  "id": "complex_fraction_example",
  "level": "2",
  "url": "sec-FactorsAndMultiples.html#complex_fraction_example",
  "type": "Example",
  "number": "6.4.17",
  "title": "Example: Simplifying a Complex Fraction.",
  "body": " Example: Simplifying a Complex Fraction   Simplify the fraction .    We use the Euclidean Algorithm to find the GCD of and :             (remainder is zero)   The GCD is . Simplify the fraction by dividing both the numerator and denominator by :   .  Note that we know for certain that this fraction is in lowest terms since if this could be reduced further, we would have found a larger factor as the GCD of these numbers.   "
},
{
  "id": "understanding_irrational_numbers",
  "level": "1",
  "url": "understanding_irrational_numbers.html",
  "type": "Section",
  "number": "7.1",
  "title": "Understanding Irrational Numbers",
  "body": " Understanding Irrational Numbers  This section explores the concept of irrational numbers, which can be viewed in two ways: decimals that neither repeat nor terminate, or numbers that cannot be written as a fraction (with integer numerator and denominator).   Examples of Irrational Numbers  Common examples include the number pi ( ) and certain square roots like . While it is outside the scope of this course to show why is irrational (the easiest method requires a little bit of calculus, but it is definitely understandable to most 2nd year mathematics students) but we can indeed show that \"roots\" of integers, which we will define in more detail later, are irrational in almost all cases, and the cases where they are rational numbers only the cases where it is obvious.  Another example is the number where the number of zeros preceding the next 1 increases by one each time. Although there is a pattern here, there is no repeating series of decimal digits and we know by Section    Consider the number in the paragraph above. Can you find another irrational number so that is a rational number? What about an irrational number such that is irrational? Finally, is it possible to have a rational number such that is rational? Explain (remember that all rational numbers can be expressed as terminating or repeating decimals).   The set of all rational and irrational numbers together form the set of real numbers, denoted by a blackboard bold R ( ). We can view the sets of numbers we have studied so far in the following Venn diagram. Note that irrational numbers are \"negatively defined\", as in they are numbers that do not have a certain property. So when we try and show a number is irrational, we usually use a proof by contradiction; that is, we will pretend that the number is rational and show that this leads to a logical fallacy.  INSERT PIC HERE    TypesOfIrrationalNumbers  There are many ways to classify irrational numbers, but the most common is to group them according to whether they are solutions to a polynomial equation with integer coefficients, like . We call numbers that are solutions to such equations algebraic numbers and real numbers that are not algebraic we call transcendental numbers . The set of algebraic numbers can be quite complex to understand, so we will focus our attention to a subset of those numbers.    A real number is algebraic if there is a polynomial with integer coefficients for which is a solution to that polynomial. We call an algebraic number a simple root if it is a solution to a polynomial equation of the form for some and . We call these solutions th roots.    Not every polynomial equation has solutions that are real numbers. For example, has no real solutions, since in order for this equation to be true we need that and we know that squaring real numbers gives us a positive number. We could expand our number system to include solutions to equations such as these (called the complex numbers) but this is beyond the scope of the course.  Some famous trancendental numbers are , which is the ratio of the circumference of any circle to its diameter, and which is a number that is very important in calculus; in short and impresicely, it is a number related to exponential growth, and in fact the function is the only non-zero type of function where the growth rate is always equal to the actual growth.    Functions Briefly  In order to talk about simple roots, we need to understand a little bit about functions. A function is a rule that turns an input element into eactly one output element. For example, the rule \"add one to a number\" can be expressed in the following way: Here, we name the function \"add 1 to a number\" with the letter , and is the variable we're using to describe the rule using algebra. So if we wanted to add 1 to, say, 5, then we would write , where we are substituting in to our function .  In the example above, we could input any real number we like into this function and we get exactly one answer, and this answer makes sense. We call all elements we are allowed to input into our function the domain of our function, and all possible outputs the of the function. Note that sometimes a function has its domain specified when it is being defined.   Let's say the rule we want as a function is \"multiply a number by itself and add one\". If we want to name this rule we can write . Here, the function makes sense for any realnumber as an input, so its implied domain is all of . Noting that is never negative, and only when we can say that the smallest number our function can output is when which makes . So our range is all real numbers greater than or equal to , or in set notation .    For the following rules, write an algebraic expression for a function. Are there any numbers that cannot be inputted into this function? If so, list them.    Multiply a number by 2        Square a number and then subtract 1    Add 3 to a number and then divide the result by 3    Divide 5 by the chosen number.      "
},
{
  "id": "examples_of_irrational_numbers-4",
  "level": "2",
  "url": "understanding_irrational_numbers.html#examples_of_irrational_numbers-4",
  "type": "Checkpoint",
  "number": "7.1.1",
  "title": "",
  "body": " Consider the number in the paragraph above. Can you find another irrational number so that is a rational number? What about an irrational number such that is irrational? Finally, is it possible to have a rational number such that is rational? Explain (remember that all rational numbers can be expressed as terminating or repeating decimals).  "
},
{
  "id": "subsec-TypesOfIrrationalNumbers-2",
  "level": "2",
  "url": "understanding_irrational_numbers.html#subsec-TypesOfIrrationalNumbers-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "algebraic numbers transcendental numbers "
},
{
  "id": "def-AlgebraicNumbers",
  "level": "2",
  "url": "understanding_irrational_numbers.html#def-AlgebraicNumbers",
  "type": "Definition",
  "number": "7.1.2",
  "title": "",
  "body": "  A real number is algebraic if there is a polynomial with integer coefficients for which is a solution to that polynomial. We call an algebraic number a simple root if it is a solution to a polynomial equation of the form for some and . We call these solutions th roots.   "
},
{
  "id": "subsec-FunctionsBriefly-2",
  "level": "2",
  "url": "understanding_irrational_numbers.html#subsec-FunctionsBriefly-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "function "
},
{
  "id": "subsec-FunctionsBriefly-3",
  "level": "2",
  "url": "understanding_irrational_numbers.html#subsec-FunctionsBriefly-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "domain "
},
{
  "id": "subsec-FunctionsBriefly-4",
  "level": "2",
  "url": "understanding_irrational_numbers.html#subsec-FunctionsBriefly-4",
  "type": "Example",
  "number": "7.1.3",
  "title": "",
  "body": " Let's say the rule we want as a function is \"multiply a number by itself and add one\". If we want to name this rule we can write . Here, the function makes sense for any realnumber as an input, so its implied domain is all of . Noting that is never negative, and only when we can say that the smallest number our function can output is when which makes . So our range is all real numbers greater than or equal to , or in set notation .  "
},
{
  "id": "subsec-FunctionsBriefly-5",
  "level": "2",
  "url": "understanding_irrational_numbers.html#subsec-FunctionsBriefly-5",
  "type": "Checkpoint",
  "number": "7.1.4",
  "title": "",
  "body": " For the following rules, write an algebraic expression for a function. Are there any numbers that cannot be inputted into this function? If so, list them.    Multiply a number by 2        Square a number and then subtract 1    Add 3 to a number and then divide the result by 3    Divide 5 by the chosen number.    "
},
{
  "id": "sec-SimpleRoots",
  "level": "1",
  "url": "sec-SimpleRoots.html",
  "type": "Section",
  "number": "7.2",
  "title": "Simple Roots and Irrationality",
  "body": " Simple Roots and Irrationality   Principal Roots  Think about the equation . How many solutions does this equation have? We know that , but also . Notice that since we are multiplying two negative numbers (that happen to be the same number), the result is positive.  There is nothing special about the number here; in fact, this holds for any real number . We will write this in a theorem.    Let be a positive real number. If a real number is a solution to , then is also a solution.    Assume that is a solution to . This means that . We need to show that is also a solution to .  Consider . Now:   since we are assuming . Thus we have just showed that and thus is a solution to as well.    We call solutions to  square roots of .   The numbers and are square roots of since and .  The numbers and are square roots of since and .  The number is *the* square root of since and also since there is no other square root.   We have just shown that if there is a solution to the equation then there are two solutions to this equation; the other being its negative. But for any real number , is there always a solution to    If is a negative real number, why is it impossible for to have any solutions? What about if is an even natural number?   What is the sign of a number (positive\/negative\/zero) if you multiply two positive numbers? What about two negative numbers? What about 0 with itself? Use this to show that there are no th roots (for even ) of any negative numbers.     Using the previous theorem as a model, prove that if is an even natural number, is a positive real number, and is a solution to then is also a solution to .    How do we know that there are at most two square roots? Prove by contradiction that this is impossible. Then modify your proof to show that there are at most two th powers for an even natural number .   Pretend that there is a positive square root and another positive square root where . Show that this leads to a contradiction. Then do the same if .    In each case, what is larger? or ?    Let's explore how many roots there are for odd roots, for example cube roots. Indeed, we'll show that there is exactly one odd root of for all real numbers . Let's look at a few examples first:   What are all the solutions to ? First we realize that must be negative since we are multiplying by itself an odd number of times and this results in an odd number. We also know that , so we can deduce that is a solution to . In fact, it is the only real number that is a solution to this, and thus the only cube root of is .   Indeed, this example basically shows the only behaviour that odd roots have; there is exacly one odd root for any . The next exercise will get you to show this always holds for cube roots, and then extended to all odd roots.   Let be a real number. Show that there is exactly one solution to the equation .   First, show that there is always a solution by noticing that it is always true that if then . How can we use this to show that, if you graph , it always passes through the x-axis? How does this show that there cannot be more than one root?    Generalize the example above to any odd root.  Now that we understand the ideas of roots, we need an easy way of writing down which root we mean. The idea is that we want a function that uniquely expresses which nth root of a number that we mean. We call this the principal root of and write this as or for the principal square root. We now go on to define what this means for both even and odd roots:  If is even, then the principal th root of is the positive solution to if , and is if . Note there are no even roots if is negative.  If is odd then is the unique root of the equation for any real number .  Note that for even roots, choosing the positive root as the principal root is simply a choice that mathematicians decided on; there is nothing really special about the positive root; we simply picked one to make the principal root a function.     Even if we know there are two solutions to the equation , we say that .    We say that the two solutions to the equation are and since the principal root is always positive. Note that since isn't a square number we cannot write this as an integer. Later, we will learn about simplifying roots.    We know that has one solution since the exponent 3 is odd, so we say that . Similarly we say that .       nth Powers  For this section, we will deal with the principal root of natural numbers, but these results also hold for other roots, if they exist. We will show this in the following section.  In this chapter we will work towards showing that the only th roots that are not irrational are those that are th powers. We'll show that every other th root cannot be written as a rational number by contradiction; we'll try to, and then show that two quantities that should be equal cannot be.  In order to show this, we'll first have to prove a property about th powers; indeed, that they are exacly numbers where each prime in its prime factorization has an exponent with a factor of . Let's do some examples to illustrate this:   Consider . We know that has a prime factorization of . And since the exponents and are both even (have a factor of 2) then we can use our exponent rules and write .  Also, we know that is not a square number since there is one of the exponents that is not even. So there is no way to \"factor out\" a from each exponent.  Let's show this in general for any square and non-square number.     Let be a natural number. The number is a square number if and only if each exponent of its prime factorization has a factor of .    Assume is a square number. Then for some natural number . Since is a natural number it has a prime factorization, say . Then and thus each exponent of the primes in the prime factorization of has a factor of .  Now assume that every exponent in the prime factorization of is even. Thus . This means that the number is such that and this means that is a square number.    Now that we've shown this for square numbers, can you work out how to generalize this for any th power?   Modify the proof above to prove the result \"The number is an th power if and only if each exponent in its prime factorization has a factor of \".   Remember that if we have a conditional statement \"if P then Q\" it is logically equivalent to its contrapositiveL \"if not Q then not P\". Thus we can express a biconditional as \"If P then Q *and* if not P then not Q\". We can rewite the result in the exercise above to be the following theorem that will be very useful for us:   Let be a natural number. If is an th power then each exponent in its prime factorization has a factor of . If is not an th power, then there is a prime number in its prime factorization whith an exponent with no factor of .      Consider . You can check that the prime factorization of is . Since the prime has an exponent that is not divisible by 3, we know that is not a cube (3rd power).  However, if we know that is indeed a cube, and .     Proving Irrationality of nth Roots  Note that in this section we will assume that the set of natural numbers includes 0. We will now work on proving what we set out to prove: that all th roots of numbers that are not th powers are indeed irrational. A key result that we will use to help us is the Fundamental Theorem of Arithmetic, which states that every natural number has a unique prime factorization.  Let's first explore the more general case with square roots:   Let be a non-square number. This means that in its prime factorization, there is at least one prime that has a power that isn't a multiple of . For example, if . Here both and have an exponent of one, which isn't a multiple of . We'll pick the smallest of these primes with such an exponent and call that prime with exponent for some and we can write where is the \"rest\" of the factors of . In our example, and and and thus in this example.  We will show this by contradiction; let's pretend that we can indeed write as a rational number: for some appropriate integers . In our example, we let .  Let's arrange our equation so that we have no roots or denominators: this means multiplying both sides by and then squaring both sides of the equation: In our example:   Let's count the number of factors of on both sides of the equation. On the RHS, by we know that has an even number of , and thus the exponent of in the prime factorization of is a factor of , so say for some natural numnber . So where are the \"rest\" of the factors of .  However, on the LHS, by we also know that has an even exponent for in it's prime factorization, say for some natural number and similarly to we can say for some integer , while itself has an odd exponent for . Thus In our example:   Putting this together:  However, the exponent of on the LHS is not a multiple of while the exponent on the RHS is (this is true in our example too). So the only way that we can write as a rational number is if we can have an even and odd exponent of in the prime factorization of . But we know it must be one or the other since prime factorizations are unique by the Fundamental Theorem of Arithmetic. So this is a contradiction, and what we started with must be incorrect; that is, we cannot write as a rational number.   Use the above as a guideline to show that cannot be written as a rational number.   You should count the number of s on the LHS and RHS of the rearranged expression like in the theorem above.    Look carefully at the result above. It focused on square roots, but the idea can be modified to work for any th root.   Modify your argument for showing that is irrational to show that is irrational.   If a number is not a cube (or 3rd power), this means that there is at least one prime, say in its prime factorization with an exponent, say that is not a multiple of . So where is a proper remainder (in this case, either 1 or 2).    This means that and here.    You will want to count the number of s on both sides of the equation when rearranged appropriately.    The RHS should have an exponent of that is a multiple of , while the LHS will not.       Use the previous exercises as a guide to show that is irrational for a non-cubic number .    Use the previous exercises as a guide to show that is irrational for a number that is not a th power.      "
},
{
  "id": "thm-SquaresAndNegatives",
  "level": "2",
  "url": "sec-SimpleRoots.html#thm-SquaresAndNegatives",
  "type": "Theorem",
  "number": "7.2.1",
  "title": "",
  "body": "  Let be a positive real number. If a real number is a solution to , then is also a solution.    Assume that is a solution to . This means that . We need to show that is also a solution to .  Consider . Now:   since we are assuming . Thus we have just showed that and thus is a solution to as well.   "
},
{
  "id": "subsec-PrincipalRoots-5",
  "level": "2",
  "url": "sec-SimpleRoots.html#subsec-PrincipalRoots-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "square roots "
},
{
  "id": "subsec-PrincipalRoots-6",
  "level": "2",
  "url": "sec-SimpleRoots.html#subsec-PrincipalRoots-6",
  "type": "Example",
  "number": "7.2.2",
  "title": "",
  "body": " The numbers and are square roots of since and .  The numbers and are square roots of since and .  The number is *the* square root of since and also since there is no other square root.  "
},
{
  "id": "subsec-PrincipalRoots-8",
  "level": "2",
  "url": "sec-SimpleRoots.html#subsec-PrincipalRoots-8",
  "type": "Checkpoint",
  "number": "7.2.3",
  "title": "",
  "body": " If is a negative real number, why is it impossible for to have any solutions? What about if is an even natural number?   What is the sign of a number (positive\/negative\/zero) if you multiply two positive numbers? What about two negative numbers? What about 0 with itself? Use this to show that there are no th roots (for even ) of any negative numbers.   "
},
{
  "id": "subsec-PrincipalRoots-9",
  "level": "2",
  "url": "sec-SimpleRoots.html#subsec-PrincipalRoots-9",
  "type": "Checkpoint",
  "number": "7.2.4",
  "title": "",
  "body": " Using the previous theorem as a model, prove that if is an even natural number, is a positive real number, and is a solution to then is also a solution to .  "
},
{
  "id": "subsec-PrincipalRoots-10",
  "level": "2",
  "url": "sec-SimpleRoots.html#subsec-PrincipalRoots-10",
  "type": "Checkpoint",
  "number": "7.2.5",
  "title": "",
  "body": " How do we know that there are at most two square roots? Prove by contradiction that this is impossible. Then modify your proof to show that there are at most two th powers for an even natural number .   Pretend that there is a positive square root and another positive square root where . Show that this leads to a contradiction. Then do the same if .    In each case, what is larger? or ?   "
},
{
  "id": "subsec-PrincipalRoots-12",
  "level": "2",
  "url": "sec-SimpleRoots.html#subsec-PrincipalRoots-12",
  "type": "Example",
  "number": "7.2.6",
  "title": "",
  "body": " What are all the solutions to ? First we realize that must be negative since we are multiplying by itself an odd number of times and this results in an odd number. We also know that , so we can deduce that is a solution to . In fact, it is the only real number that is a solution to this, and thus the only cube root of is .  "
},
{
  "id": "subsec-PrincipalRoots-14",
  "level": "2",
  "url": "sec-SimpleRoots.html#subsec-PrincipalRoots-14",
  "type": "Checkpoint",
  "number": "7.2.7",
  "title": "",
  "body": " Let be a real number. Show that there is exactly one solution to the equation .   First, show that there is always a solution by noticing that it is always true that if then . How can we use this to show that, if you graph , it always passes through the x-axis? How does this show that there cannot be more than one root?   "
},
{
  "id": "subsec-PrincipalRoots-15",
  "level": "2",
  "url": "sec-SimpleRoots.html#subsec-PrincipalRoots-15",
  "type": "Checkpoint",
  "number": "7.2.8",
  "title": "",
  "body": "Generalize the example above to any odd root. "
},
{
  "id": "subsec-PrincipalRoots-16",
  "level": "2",
  "url": "sec-SimpleRoots.html#subsec-PrincipalRoots-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "principal root "
},
{
  "id": "subsec-PrincipalRoots-20",
  "level": "2",
  "url": "sec-SimpleRoots.html#subsec-PrincipalRoots-20",
  "type": "Example",
  "number": "7.2.9",
  "title": "",
  "body": "   Even if we know there are two solutions to the equation , we say that .    We say that the two solutions to the equation are and since the principal root is always positive. Note that since isn't a square number we cannot write this as an integer. Later, we will learn about simplifying roots.    We know that has one solution since the exponent 3 is odd, so we say that . Similarly we say that .    "
},
{
  "id": "subsec-nthPowers-5",
  "level": "2",
  "url": "sec-SimpleRoots.html#subsec-nthPowers-5",
  "type": "Example",
  "number": "7.2.10",
  "title": "",
  "body": " Consider . We know that has a prime factorization of . And since the exponents and are both even (have a factor of 2) then we can use our exponent rules and write .  Also, we know that is not a square number since there is one of the exponents that is not even. So there is no way to \"factor out\" a from each exponent.  Let's show this in general for any square and non-square number.  "
},
{
  "id": "thm-SquareEvenExponents",
  "level": "2",
  "url": "sec-SimpleRoots.html#thm-SquareEvenExponents",
  "type": "Theorem",
  "number": "7.2.11",
  "title": "",
  "body": "  Let be a natural number. The number is a square number if and only if each exponent of its prime factorization has a factor of .    Assume is a square number. Then for some natural number . Since is a natural number it has a prime factorization, say . Then and thus each exponent of the primes in the prime factorization of has a factor of .  Now assume that every exponent in the prime factorization of is even. Thus . This means that the number is such that and this means that is a square number.   "
},
{
  "id": "subsec-nthPowers-8",
  "level": "2",
  "url": "sec-SimpleRoots.html#subsec-nthPowers-8",
  "type": "Checkpoint",
  "number": "7.2.12",
  "title": "",
  "body": " Modify the proof above to prove the result \"The number is an th power if and only if each exponent in its prime factorization has a factor of \".  "
},
{
  "id": "thm-nthPower",
  "level": "2",
  "url": "sec-SimpleRoots.html#thm-nthPower",
  "type": "Theorem",
  "number": "7.2.13",
  "title": "",
  "body": "  Let be a natural number. If is an th power then each exponent in its prime factorization has a factor of . If is not an th power, then there is a prime number in its prime factorization whith an exponent with no factor of .   "
},
{
  "id": "subsec-nthPowers-10",
  "level": "2",
  "url": "sec-SimpleRoots.html#subsec-nthPowers-10",
  "type": "Example",
  "number": "7.2.14",
  "title": "",
  "body": " Consider . You can check that the prime factorization of is . Since the prime has an exponent that is not divisible by 3, we know that is not a cube (3rd power).  However, if we know that is indeed a cube, and .  "
},
{
  "id": "subsec-ProvingIrrationalityofnthRoots-4",
  "level": "2",
  "url": "sec-SimpleRoots.html#subsec-ProvingIrrationalityofnthRoots-4",
  "type": "Example",
  "number": "7.2.15",
  "title": "",
  "body": " Let be a non-square number. This means that in its prime factorization, there is at least one prime that has a power that isn't a multiple of . For example, if . Here both and have an exponent of one, which isn't a multiple of . We'll pick the smallest of these primes with such an exponent and call that prime with exponent for some and we can write where is the \"rest\" of the factors of . In our example, and and and thus in this example.  We will show this by contradiction; let's pretend that we can indeed write as a rational number: for some appropriate integers . In our example, we let .  Let's arrange our equation so that we have no roots or denominators: this means multiplying both sides by and then squaring both sides of the equation: In our example:   Let's count the number of factors of on both sides of the equation. On the RHS, by we know that has an even number of , and thus the exponent of in the prime factorization of is a factor of , so say for some natural numnber . So where are the \"rest\" of the factors of .  However, on the LHS, by we also know that has an even exponent for in it's prime factorization, say for some natural number and similarly to we can say for some integer , while itself has an odd exponent for . Thus In our example:   Putting this together:  However, the exponent of on the LHS is not a multiple of while the exponent on the RHS is (this is true in our example too). So the only way that we can write as a rational number is if we can have an even and odd exponent of in the prime factorization of . But we know it must be one or the other since prime factorizations are unique by the Fundamental Theorem of Arithmetic. So this is a contradiction, and what we started with must be incorrect; that is, we cannot write as a rational number. "
},
{
  "id": "subsec-ProvingIrrationalityofnthRoots-5",
  "level": "2",
  "url": "sec-SimpleRoots.html#subsec-ProvingIrrationalityofnthRoots-5",
  "type": "Checkpoint",
  "number": "7.2.16",
  "title": "",
  "body": " Use the above as a guideline to show that cannot be written as a rational number.   You should count the number of s on the LHS and RHS of the rearranged expression like in the theorem above.   "
},
{
  "id": "subsec-ProvingIrrationalityofnthRoots-7",
  "level": "2",
  "url": "sec-SimpleRoots.html#subsec-ProvingIrrationalityofnthRoots-7",
  "type": "Checkpoint",
  "number": "7.2.17",
  "title": "",
  "body": " Modify your argument for showing that is irrational to show that is irrational.   If a number is not a cube (or 3rd power), this means that there is at least one prime, say in its prime factorization with an exponent, say that is not a multiple of . So where is a proper remainder (in this case, either 1 or 2).    This means that and here.    You will want to count the number of s on both sides of the equation when rearranged appropriately.    The RHS should have an exponent of that is a multiple of , while the LHS will not.   "
},
{
  "id": "subsec-ProvingIrrationalityofnthRoots-8",
  "level": "2",
  "url": "sec-SimpleRoots.html#subsec-ProvingIrrationalityofnthRoots-8",
  "type": "Checkpoint",
  "number": "7.2.18",
  "title": "",
  "body": "   Use the previous exercises as a guide to show that is irrational for a non-cubic number .    Use the previous exercises as a guide to show that is irrational for a number that is not a th power.    "
},
{
  "id": "sec-OperationsWithIrrationalNumbers",
  "level": "1",
  "url": "sec-OperationsWithIrrationalNumbers.html",
  "type": "Section",
  "number": "7.3",
  "title": "Operations With Irrational Numbers",
  "body": " Operations With Irrational Numbers    Addition and Subtraction with Irrational Numbers  As a reminder, when we add two rational numbers, the result is also a rational number. This is known as the closure property of addition for rational numbers. Formally, if and are rational numbers, then and are also rational numbers.  However, we can show that the sum of a rational number and an irrational number is always irrational. Let's state this formally as a theorem and prove it by contradiction.    Let be a rational number and be an irrational number. Then is irrational.    Assume for the sake of contradiction that is a rational number. Since the set of rational numbers is closed under addition and subtraction, we can write:   where is a rational number.  We can then subtract from both sides of the equation:   .  Since both and are rational numbers, and the difference of two rational numbers is also rational, must be rational.  This implies that is rational, which contradicts our initial assumption that is irrational. Therefore, our assumption that is rational must be false, and is indeed irrational.    It is important to note that while the sum of a finite number of rational numbers is rational, the sum of infinitely many rational numbers can be irrational. This can be understood by considering the decimal expansion of certain numbers.  For example, the number (pi) is known to be irrational. Its decimal expansion is non-repeating and non-terminating:     If we express as the sum of its decimal parts, we get an infinite series of rational numbers:     Each term in this series is a rational number, but their infinite sum converges to the irrational number . This demonstrates that the sum of infinitely many rational numbers can indeed be irrational.  When adding two irrational numbers, the result can be either rational or irrational. Let's explore this with two examples:   Consider the irrational numbers , which we know is irrational by Theorem , and . Their sum is:   .  Of course, is a rational number. Thus in this example the sum of two irrational numbers is a rational number.    Now, consider the irrational numbers and . Their sum is:   .  This sum is still an irrational number because there is no way to express it as a ratio of two integers; we will justify this claim in the following section.   We can summarize the possible results of adding or subtracting rational and irrational numbers in the following table:    +  Rational   Irrational    Rational  Rational  Irrational    Irrational  Irrational  Either     Consider the number . Show that and are both irrational.   Assume, for the sake of contradiction, that is rational. Then we can write:   for some rational number .  Subtracting 1 from both sides, we get:   .  Since is rational, is also rational, implying that is rational, which is a contradiction. Hence, is irrational.  A similar argument shows that is irrational by assuming it is rational and arriving at a contradiction that would be rational.       Multiplication and Division with Irrational Numbers  Multiplication and division of irrational numbers shares many of the same properties as addition does, as explored above. The biggest difference is keeping in mind that multiplying by 0 is a special case; we always know that multiplying by 0 gives us 0. Also, remember that division by 0 is something that is not defined.  As a reminder, when we multiply two rational numbers, the result is also a rational number. This is known as the closure property of multiplication for rational numbers. Formally, if and are rational numbers, then is also a rational number.  However, similar to addition, we can show that the product of a non-zero rational number and an irrational number is always irrational. Let's state this formally as a theorem and prove it by contradiction.    Let be a non-zero rational number and be an irrational number. Then is irrational.    Assume for the sake of contradiction that is a rational number. Since the set of rational numbers is closed under multiplication and division, we can write:   where is a rational number.  We can then divide both sides of the equation by (since ):   .  Since both and are rational numbers, and the quotient of two rational numbers is also rational, must be rational.  This implies that is rational, which contradicts our initial assumption that is irrational. Therefore, our assumption that is rational must be false, and is indeed irrational.    Note that multiplying any number by zero always results in zero, which is rational. Thus, the product of zero and any irrational number is zero.  It is important to note that while the product of a finite number of rational numbers is rational, the product of infinitely many rational numbers can be irrational. This can be understood by considering the Wallis product for .  The Wallis product for is an infinite product of rational numbers that converges to the irrational number . Showing that the product below converges to is slightly beyond the scope of this book, but you can explore this yourself by looking at \"partial\" products and continuing to multiply by succesive terms. You should notice that these partial products get closer and closer to :     Each factor in this product is a rational number, but the infinite product converges to the irrational number .  When multiplying two non-zero irrational numbers, the result can be either rational or irrational. Let's explore this with two examples:   Consider the irrational numbers and . We know the second of these numbers is irrational by Theorem . Their product is:   .  Here, the product of two irrational numbers is a rational number (1).    Now, consider the irrational numbers and . Their product is:   .  This product is still an irrational number which we know is irrational since it is a square root of a non-square number.   We can summarize the possible results of multiplying or dividing rational and irrational numbers in the following table:      Rational   Irrational    Rational  Rational  Irrational    Irrational  Irrational  Either     Consider the number . Show that and are both irrational.   Assume, for the sake of contradiction, that is rational. Then we can write:   for some rational number .  Dividing both sides by 2, we get:   .  Since is rational, is also rational, implying that is rational, which is a contradiction. Hence, is irrational.  A similar argument shows that is irrational by assuming it is rational and arriving at a contradiction that would be rational, which it is not.      More Elaborate Examples of Irrationality  Sometimes, demonstrating that a number is irrational can be more challenging and require more sophisticated techniques. In this subsection, we will explore some harder examples to illustrate these methods.  Let's begin by showing that is irrational. We will do this by assuming that it is rational and then squaring the expression to arrive at a contradiction.   Assume, for the sake of contradiction, that is rational. Then we can write:  \\(\\sqrt{2} + \\sqrt{3} = r\\) for some rational number \\(r\\).  Squaring both sides of the equation, we get:  \\((\\sqrt{2} + \\sqrt{3})^2 = r^2\\).  Expanding the left-hand side, we have:  \\(\\sqrt{2}^2 + 2\\sqrt{2}\\sqrt{3} + \\sqrt{3}^2 = r^2\\).  Simplifying, we get:  \\(2 + 2\\sqrt{6} + 3 = r^2\\).  Combining like terms, we obtain:  \\(5 + 2\\sqrt{6} = r^2\\).  Since \\(r\\) is rational, \\(r^2\\) is also rational. Therefore, \\(5 + 2\\sqrt{6}\\) must be rational. However, we know that \\(2\\sqrt{6}\\) is irrational because \\(\\sqrt{6}\\) is irrational (as 6 is not a square number).  Thus, \\(5 + 2\\sqrt{6}\\) is a sum of a rational number (5) and an irrational number (\\(2\\sqrt{6}\\)), which is irrational. This contradicts our assumption that \\(5 + 2\\sqrt{6}\\) is rational. Therefore, \\(\\sqrt{2} + \\sqrt{3}\\) must be irrational.   Next, we will show that is irrational by assuming it is rational and then solving for 2 to reach a contradiction.   Assume, for the sake of contradiction, that \\(\\sqrt[3]{2} \\times \\sqrt{3}\\) is rational. Then we can write:  \\(\\sqrt[3]{2} \\times \\sqrt{3} = r\\) for some rational number \\(r\\).  We can cube both sides of the equation to remove the cube root:  \\((\\sqrt[3]{2} \\times \\sqrt{3})^3 = r^3\\).  Expanding the left-hand side, we have:  \\(\\sqrt[3]{2}^3 \\times \\sqrt{3}^3 = r^3\\).  Simplifying, we get:  \\(2 \\times 3\\sqrt{3} = r^3\\).  Combining the constants, we obtain:  \\(6\\sqrt{3} = r^3\\).  Since \\(r\\) is rational, \\(r^3\\) is also rational. Therefore, \\(6\\sqrt{3}\\) must be rational. However, we know that \\(\\sqrt{3}\\) is irrational.  Thus, \\(6\\sqrt{3}\\) is a product of a rational number (6) and an irrational number (\\(\\sqrt{3}\\)), which is irrational. This contradicts our assumption that \\(6\\sqrt{3}\\) is rational. Therefore, \\(\\sqrt[3]{2} \\times \\sqrt{3}\\) must be irrational.    "
},
{
  "id": "sec-OperationsWithIrrationalNumbers-2",
  "level": "2",
  "url": "sec-OperationsWithIrrationalNumbers.html#sec-OperationsWithIrrationalNumbers-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "+ Rational Irrational Rational Irrational "
},
{
  "id": "thm_rat_times_irr_irr",
  "level": "2",
  "url": "sec-OperationsWithIrrationalNumbers.html#thm_rat_times_irr_irr",
  "type": "Theorem",
  "number": "7.3.5",
  "title": "",
  "body": "  Let be a non-zero rational number and be an irrational number. Then is irrational.    Assume for the sake of contradiction that is a rational number. Since the set of rational numbers is closed under multiplication and division, we can write:   where is a rational number.  We can then divide both sides of the equation by (since ):   .  Since both and are rational numbers, and the quotient of two rational numbers is also rational, must be rational.  This implies that is rational, which contradicts our initial assumption that is irrational. Therefore, our assumption that is rational must be false, and is indeed irrational.   "
},
{
  "id": "multiplication_division_irrational_numbers-12",
  "level": "2",
  "url": "sec-OperationsWithIrrationalNumbers.html#multiplication_division_irrational_numbers-12",
  "type": "Example",
  "number": "7.3.6",
  "title": "",
  "body": " Consider the irrational numbers and . We know the second of these numbers is irrational by Theorem . Their product is:   .  Here, the product of two irrational numbers is a rational number (1).  "
},
{
  "id": "multiplication_division_irrational_numbers-13",
  "level": "2",
  "url": "sec-OperationsWithIrrationalNumbers.html#multiplication_division_irrational_numbers-13",
  "type": "Example",
  "number": "7.3.7",
  "title": "",
  "body": " Now, consider the irrational numbers and . Their product is:   .  This product is still an irrational number which we know is irrational since it is a square root of a non-square number.  "
},
{
  "id": "multiplication_division_irrational_numbers-16",
  "level": "2",
  "url": "sec-OperationsWithIrrationalNumbers.html#multiplication_division_irrational_numbers-16",
  "type": "Checkpoint",
  "number": "7.3.8",
  "title": "",
  "body": " Consider the number . Show that and are both irrational.   Assume, for the sake of contradiction, that is rational. Then we can write:   for some rational number .  Dividing both sides by 2, we get:   .  Since is rational, is also rational, implying that is rational, which is a contradiction. Hence, is irrational.  A similar argument shows that is irrational by assuming it is rational and arriving at a contradiction that would be rational, which it is not.   "
},
{
  "id": "more_elaborate_examples_irrationality-4",
  "level": "2",
  "url": "sec-OperationsWithIrrationalNumbers.html#more_elaborate_examples_irrationality-4",
  "type": "Example",
  "number": "7.3.9",
  "title": "",
  "body": " Assume, for the sake of contradiction, that is rational. Then we can write:  \\(\\sqrt{2} + \\sqrt{3} = r\\) for some rational number \\(r\\).  Squaring both sides of the equation, we get:  \\((\\sqrt{2} + \\sqrt{3})^2 = r^2\\).  Expanding the left-hand side, we have:  \\(\\sqrt{2}^2 + 2\\sqrt{2}\\sqrt{3} + \\sqrt{3}^2 = r^2\\).  Simplifying, we get:  \\(2 + 2\\sqrt{6} + 3 = r^2\\).  Combining like terms, we obtain:  \\(5 + 2\\sqrt{6} = r^2\\).  Since \\(r\\) is rational, \\(r^2\\) is also rational. Therefore, \\(5 + 2\\sqrt{6}\\) must be rational. However, we know that \\(2\\sqrt{6}\\) is irrational because \\(\\sqrt{6}\\) is irrational (as 6 is not a square number).  Thus, \\(5 + 2\\sqrt{6}\\) is a sum of a rational number (5) and an irrational number (\\(2\\sqrt{6}\\)), which is irrational. This contradicts our assumption that \\(5 + 2\\sqrt{6}\\) is rational. Therefore, \\(\\sqrt{2} + \\sqrt{3}\\) must be irrational.  "
},
{
  "id": "more_elaborate_examples_irrationality-6",
  "level": "2",
  "url": "sec-OperationsWithIrrationalNumbers.html#more_elaborate_examples_irrationality-6",
  "type": "Example",
  "number": "7.3.10",
  "title": "",
  "body": " Assume, for the sake of contradiction, that \\(\\sqrt[3]{2} \\times \\sqrt{3}\\) is rational. Then we can write:  \\(\\sqrt[3]{2} \\times \\sqrt{3} = r\\) for some rational number \\(r\\).  We can cube both sides of the equation to remove the cube root:  \\((\\sqrt[3]{2} \\times \\sqrt{3})^3 = r^3\\).  Expanding the left-hand side, we have:  \\(\\sqrt[3]{2}^3 \\times \\sqrt{3}^3 = r^3\\).  Simplifying, we get:  \\(2 \\times 3\\sqrt{3} = r^3\\).  Combining the constants, we obtain:  \\(6\\sqrt{3} = r^3\\).  Since \\(r\\) is rational, \\(r^3\\) is also rational. Therefore, \\(6\\sqrt{3}\\) must be rational. However, we know that \\(\\sqrt{3}\\) is irrational.  Thus, \\(6\\sqrt{3}\\) is a product of a rational number (6) and an irrational number (\\(\\sqrt{3}\\)), which is irrational. This contradicts our assumption that \\(6\\sqrt{3}\\) is rational. Therefore, \\(\\sqrt[3]{2} \\times \\sqrt{3}\\) must be irrational.  "
},
{
  "id": "exponents_irrational_numbers",
  "level": "1",
  "url": "exponents_irrational_numbers.html",
  "type": "Section",
  "number": "7.4",
  "title": "Exponents and Irrational Numbers",
  "body": " Exponents and Irrational Numbers   nth Root as Exponent 1\/n  An th root of a number can be represented as raising the number to the power of . This means that for any positive real number and any natural number , the expression is equivalent to . To understand this, consider that raising to the power of gives us back the original number:   This demonstrates that is indeed the th root of .   For instance, the square root of 4 can be written as . Squaring this gives us back 4:      Multiplying and Dividing nth Roots  When working with roots, we can multiply or divide nth roots, but we cannot add or subtract them in a straightforward manner. The rules for multiplying and dividing roots come from the properties of exponents.  For example, to simplify the product of two square roots, we use the property that:    Simplify :    The same applies to division:    Simplify :    However, adding or subtracting roots is not as straightforward. For example, does not equal .   Simplify :   , but , which is different.     Simplifying th Principal Roots by Factoring Out th Powers  When simplifying th principal roots, you can factor out any th powers that appear in the prime factorization of the number you are taking the root of. Let's do some examples to see the method first.   Consider the cube root of 54: First, we factor 54 into its prime factors: Notice that is a perfect cube. We can use the property of cube roots that states: Applying this property: Since , we simplify the expression to:     Now consider the cube root of 162 and that the prime factorization of 162 is . Now, we can realize that we can factor out a perfect cube from . Indeed .  Using the same idea as the previous example we can say Since , we simplify the expression to:    In the examples above, we showed that we can indeed simplify an th root as long as we can factor out an th power from its factors. We say this more precisely below.    Using the Quotient Remainder Theorem  The quotient remainder theorem states that for any integer and a positive integer , there exist unique integers (quotient) and (remainder) such that: This theorem is particularly useful in identifying and extracting th powers from the prime factorization. For instance, if we have a prime factor raised to the power of , we can express as: Here, represents the highest th power within that can be factored out, leaving as the remainder.    Additional Examples  Let's explore three more examples of increasing difficulty.   Simplify .   First, factor 162 into its prime factors:     Notice that is a perfect fourth power. Applying the property of fourth roots:     Since , we simplify the expression to:        Simplify .   First, factor 2430 into its prime factors:     Notice that is a perfect fifth power. Applying the property of fifth roots:     Since , we simplify the expression to:        Simplify .   First, factor 5184 into its prime factors:     Notice that is a perfect sixth power. Applying the property of sixth roots:     Since , we simplify the expression to:     Further simplification yields:         Simplifying Expressions with Fractional Powers  Simplifying expressions containing fractional powers often involves using the properties of exponents. Understanding these properties is crucial for algebraic manipulation and solving various mathematical problems efficiently. Also, it allows us to see the relationship between multiplication of numbers with the same base, and addition of their exponents.  When working with fractional powers, it's important to remember that the numerator of the fraction represents the power, and the denominator represents the root. For example, can be interpreted as the nth root of raised to the mth power, as in or as the nth root of mth power of , as in . This dual interpretation is helpful when simplifying or transforming expressions.   Simplify :  Using the property of exponents that , we get:   This example demonstrates that multiplying two expressions with the same base and fractional exponents involves simply adding the exponents. Here, since \\(\\frac{1}{2} + \\frac{1}{2} = 1\\), the result is \\(a^1\\), which simplifies to \\(a\\).    Simplify :  Using the property of exponents that , we get:   This example shows how raising a power to another power results in multiplying the exponents. Here, \\(\\frac{1}{3} \\times 3 = 1\\), so the expression simplifies to \\(b^1\\), which is simply \\(b\\).    Simplify :  Using the property of exponents that , we get:   This example illustrates the application of the exponent rule to a fraction. By raising both the numerator and the denominator to the power of 2, we multiply their respective exponents by 2, allowing us to simplify the expression.   To further deepen our understanding, let's consider a more complex example involving a sum and product of fractional powers:   Simplify :  Using the properties of exponents, we combine like terms:   This example combines both addition of exponents and multiplication of terms with fractional powers. By adding the exponents of \\(x\\) and \\(y\\) separately, we simplify the expression to \\(xy\\).    Simplify :  First, simplify each part of the expression separately:       :  Simplify the denominator:   Now the expression inside the parenthesis becomes:   Squaring this, we get:   Now combine all parts:   Simplify the multiplication:   Now combine the exponents:     "
},
{
  "id": "nth_root_exponent-5",
  "level": "2",
  "url": "exponents_irrational_numbers.html#nth_root_exponent-5",
  "type": "Example",
  "number": "7.4.1",
  "title": "",
  "body": " For instance, the square root of 4 can be written as . Squaring this gives us back 4:   "
},
{
  "id": "multiplying_dividing_roots-5",
  "level": "2",
  "url": "exponents_irrational_numbers.html#multiplying_dividing_roots-5",
  "type": "Example",
  "number": "7.4.2",
  "title": "",
  "body": " Simplify :   "
},
{
  "id": "multiplying_dividing_roots-8",
  "level": "2",
  "url": "exponents_irrational_numbers.html#multiplying_dividing_roots-8",
  "type": "Example",
  "number": "7.4.3",
  "title": "",
  "body": " Simplify :   "
},
{
  "id": "multiplying_dividing_roots-10",
  "level": "2",
  "url": "exponents_irrational_numbers.html#multiplying_dividing_roots-10",
  "type": "Example",
  "number": "7.4.4",
  "title": "",
  "body": " Simplify :   , but , which is different.  "
},
{
  "id": "simplifying-principal-roots-3",
  "level": "2",
  "url": "exponents_irrational_numbers.html#simplifying-principal-roots-3",
  "type": "Example",
  "number": "7.4.5",
  "title": "",
  "body": " Consider the cube root of 54: First, we factor 54 into its prime factors: Notice that is a perfect cube. We can use the property of cube roots that states: Applying this property: Since , we simplify the expression to:   "
},
{
  "id": "simplifying-principal-roots-4",
  "level": "2",
  "url": "exponents_irrational_numbers.html#simplifying-principal-roots-4",
  "type": "Example",
  "number": "7.4.6",
  "title": "",
  "body": " Now consider the cube root of 162 and that the prime factorization of 162 is . Now, we can realize that we can factor out a perfect cube from . Indeed .  Using the same idea as the previous example we can say Since , we simplify the expression to:   "
},
{
  "id": "fourth-root-example",
  "level": "2",
  "url": "exponents_irrational_numbers.html#fourth-root-example",
  "type": "Example",
  "number": "7.4.7",
  "title": "",
  "body": " Simplify .   First, factor 162 into its prime factors:     Notice that is a perfect fourth power. Applying the property of fourth roots:     Since , we simplify the expression to:      "
},
{
  "id": "fifth-root-example",
  "level": "2",
  "url": "exponents_irrational_numbers.html#fifth-root-example",
  "type": "Example",
  "number": "7.4.8",
  "title": "",
  "body": " Simplify .   First, factor 2430 into its prime factors:     Notice that is a perfect fifth power. Applying the property of fifth roots:     Since , we simplify the expression to:      "
},
{
  "id": "sixth-root-example",
  "level": "2",
  "url": "exponents_irrational_numbers.html#sixth-root-example",
  "type": "Example",
  "number": "7.4.9",
  "title": "",
  "body": " Simplify .   First, factor 5184 into its prime factors:     Notice that is a perfect sixth power. Applying the property of sixth roots:     Since , we simplify the expression to:     Further simplification yields:      "
},
{
  "id": "simplifying_fractional_powers-4",
  "level": "2",
  "url": "exponents_irrational_numbers.html#simplifying_fractional_powers-4",
  "type": "Example",
  "number": "7.4.10",
  "title": "",
  "body": " Simplify :  Using the property of exponents that , we get:   This example demonstrates that multiplying two expressions with the same base and fractional exponents involves simply adding the exponents. Here, since \\(\\frac{1}{2} + \\frac{1}{2} = 1\\), the result is \\(a^1\\), which simplifies to \\(a\\).  "
},
{
  "id": "simplifying_fractional_powers-5",
  "level": "2",
  "url": "exponents_irrational_numbers.html#simplifying_fractional_powers-5",
  "type": "Example",
  "number": "7.4.11",
  "title": "",
  "body": " Simplify :  Using the property of exponents that , we get:   This example shows how raising a power to another power results in multiplying the exponents. Here, \\(\\frac{1}{3} \\times 3 = 1\\), so the expression simplifies to \\(b^1\\), which is simply \\(b\\).  "
},
{
  "id": "simplifying_fractional_powers-6",
  "level": "2",
  "url": "exponents_irrational_numbers.html#simplifying_fractional_powers-6",
  "type": "Example",
  "number": "7.4.12",
  "title": "",
  "body": " Simplify :  Using the property of exponents that , we get:   This example illustrates the application of the exponent rule to a fraction. By raising both the numerator and the denominator to the power of 2, we multiply their respective exponents by 2, allowing us to simplify the expression.  "
},
{
  "id": "simplifying_fractional_powers-8",
  "level": "2",
  "url": "exponents_irrational_numbers.html#simplifying_fractional_powers-8",
  "type": "Example",
  "number": "7.4.13",
  "title": "",
  "body": " Simplify :  Using the properties of exponents, we combine like terms:   This example combines both addition of exponents and multiplication of terms with fractional powers. By adding the exponents of \\(x\\) and \\(y\\) separately, we simplify the expression to \\(xy\\).  "
},
{
  "id": "simplifying_fractional_powers-9",
  "level": "2",
  "url": "exponents_irrational_numbers.html#simplifying_fractional_powers-9",
  "type": "Example",
  "number": "7.4.14",
  "title": "",
  "body": " Simplify :  First, simplify each part of the expression separately:       :  Simplify the denominator:   Now the expression inside the parenthesis becomes:   Squaring this, we get:   Now combine all parts:   Simplify the multiplication:   Now combine the exponents:   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Appendix",
  "number": "A",
  "title": "Selected Hints",
  "body": " Selected Hints  "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Appendix",
  "number": "B",
  "title": "Selected Solutions",
  "body": " Selected Solutions  "
},
{
  "id": "backmatter-4",
  "level": "1",
  "url": "backmatter-4.html",
  "type": "Appendix",
  "number": "C",
  "title": "List of Symbols",
  "body": " List of Symbols   "
},
{
  "id": "backmatter-5",
  "level": "1",
  "url": "backmatter-5.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-6",
  "level": "1",
  "url": "backmatter-6.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
