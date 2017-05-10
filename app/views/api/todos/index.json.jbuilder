@todos.each do |todo|
  json.set! todo.id do
    json.id todo.id
    json.title todo.title
    json.body todo.body
    json.done todo.done
  end
end
