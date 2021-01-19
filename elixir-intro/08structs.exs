defmodule User do
  defstruct name: "John", age: 29
end

defmodule Test do
  require User

  def main do
    john = %User{}
    IO.inspect john

    IO.puts "Another one"
    IO.puts "Here is about Jane"
    jane = %User{name: "Jane"}
    IO.inspect jane


    jane = %{jane | age: 31}
    IO.inspect jane
    IO.puts "Jane's updated age is: #{jane.age}"

    IO.puts "Occupation"
#    You cannot add another param inside of def. You MUST put in inside of defStructure first
#    jane = %{jane | occ: "Lawyer"}
#    IO.inspect jane
  end
end

Test.main