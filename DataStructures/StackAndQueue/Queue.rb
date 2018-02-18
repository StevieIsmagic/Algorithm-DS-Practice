=begin
Think of a Queue (FIFO) as a line of people at the movie theatre. 

QUEUE CONSTRAINTS:
- Data can only be Inserted at the END of queue. Same as Stack.
- Data can only be Read from the FRONT of queue. Opposite behavior of a stack.
- Data can only be Removed from the FRONT of queue. Opposite behavior of a stack.

Queues are common in many application, ranging from printing jobs 
to background workers in web applications. They are the perfect tool for handling
asynchronous requests - they ensure that the requests are processed in the order in
which they were received. They are also commonly used to model real-world scenarios 
where events need to occur in a certain order, such as airplanes waiting for takeoff
and patients waiting at the doctor.

Consider the following program that accepts printing jobs 
from various computers across a network:
=end

class PrinterManager

  def initialize
    @queue = []
  end

  def queue_print_job(document)
    @queue.push(document)
  end

  def run
    while @queue.any?
      # the Ruby shift method removes and returns
      # the first element of an array:
      print(@queue.shift)
    end
  end 

  private

  def print(document)
    # Code to run the actual printer goes here.
    # For demo purposes, we'll print to the terminal:
    puts document
  end

end

# We can utilize this class as follows:

print_manager = PrintManager.new 
print_manager.queue_print_job("First Document")
print_manager.queue_print_job("Second Document")
print_manager.queue_print_job("Third Document")
print_manage.run

# the printer will then print the (3) documents in the same order they were received
