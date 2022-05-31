Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # root to: "static#home";
  get '/other_page', to:"static#other_page"
  get '/contact', to:"static#contact"
  root to:"static#drum_kit"
end
