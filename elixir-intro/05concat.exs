defmodule Concat do
#         1st, 2nd, sep(optional 3rd), default -> \\" "
  def join(a, b, sep \\ " ") do
    a <> sep <> b
  end
end

IO.puts Concat.join("Hello", "world")
IO.puts Concat.join("Hello", "world", "0")