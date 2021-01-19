defmodule PipeTest do

  def sqr(x), do: x * x
  def sum(l, start \\ 0) do
    start + Enum.sum(l)
  end

#   tl for adding tails in list form.

  def sst(the_list) do
    the_list
    |> IO.inspect
    |> tl
    |> IO.inspect
    |> sum(2)
    |> IO.inspect
    |> sqr
    |> IO.inspect
  end

end

IO.puts PipeTest.sum([1, 2, 5], 2)
IO.puts PipeTest.sst([1, 2, 5])
