Rails.application.routes.draw do
  get 'marketing', to: 'marketing#index'
  get 'training_resources/index'
  resources :training_resources do
    resources :training_data
  end
  get 'admin', to: 'admin#index'
  post 'admin', to: 'admin#create'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check


  # Defines the root path route ("/")
  # root "posts#index"
  root 'marketing#index'
end
