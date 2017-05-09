# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

buy_milk = Todo.create(title: 'buy milk', body: 'from safeway', done: false)
buy_eggs = Todo.create(title: 'buy eggs', body: 'from safeway', done: false)
buy_sugar = Todo.create(title: 'buy sugar', body: 'from safeway', done: true)
