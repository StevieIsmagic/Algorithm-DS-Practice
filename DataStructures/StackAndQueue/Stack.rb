=begin 
Stacks (LIFO) and Queues (FIFO) are simply arrays with restrictions.
They are useful for handling temporary data, from 
operating system architecture, to printing jobs,
to traversing data, stacks and queues serve as temporary 
containers that can be used to form beautiful algorithms.

Stacks are ideal for processing any data that should be handled in reverse
order to how it was received (LIFO). Think: the undo function in a word
processor or function calls in a network application.

STACK CONSTRAINTS:
- Data can only be Inserted at the end of stack
- Data can only be Read from the end of stack
- Data can only be Removed from the end of stack

Consider the following Linter that checks for matching opened / closed brackets:
=end

class Linter
  attr_reader :error
  def initialize
    # We use a simple array to serve as our stack
    @stack = []
  end

  def lint(text)
    # We start a loop which reads each character in our text:
    text.each_char.with_index do |char, index|
      
      if opening_brace?(char)

        # If the character is an opening brace, we push it onto the stack:
        @stack.push(char)
      elsif closing_brace?(char)

        if closes_most_recent_opening_brace?(char)

          # If the character closes the most recent opening brace,
          # we pop the opening brace from our stack:
          @stack.pop
        
        else # if the character does NOT close the most recent opening brace

          @error = "Incorrect closing brace: #{char} at index #{index}"
          return
        end
      end
    end

    if @stack.any?
      # If we get to the end of line, and the stack isn't empty, that means
      # we have an opening brace without a corresponding closing brace:
      @error = "#{@stack.last} does not have a closing brace"
    end
  end

  private

  def opening_brace?(char)
    ["(", "[", "{"].include?(char)
  end

  def closing_brace?(char)
    [")", "]", "}"].include?(char)
  end

  def opening_brace_of(char)
    {")" => "(", "]" => "[", "}" => "{"}[char]
  end

  def closes_most_recent_opening_brace
    @stack.last
  end

  def closes_most_recent_opening_brace?(char)
    opening_brace_of(char) == closes_most_recent_opening_brace
  end
end

# No errors since this line of JS is correct
linter = Linter.new
linter.lint("( let x = { y: [1, 2,3 ] } )")
puts linter.error

# But if we swap the last two brackets:
# We will receive and Error message.
linter = Linter.new
linter.lint("( let x = { y: [1, 2,3 ] ) }")
puts linter.error