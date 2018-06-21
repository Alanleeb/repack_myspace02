100.times do 
    user_name = Faker::Superhero.name
    age = Faker::Number.number(2)
    quote = Faker::DumbAndDumber.quote
    avatar = Faker::Avatar.image
    contact = Faker::Address.city
    @new_user = Profile.create(user_name: user_name, age: age, quote: quote, avatar: avatar, contact: contact)


# 2.times do
#     @new_user.posts.create(
#      author: Faker::Hipster.words(2).join(' '),
#      body: Faker::Lorem.paragraph(3)
#     )
#   end
end 


puts 'seeded'