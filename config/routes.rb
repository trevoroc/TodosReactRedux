Rails.application.routes.draw do
  namespace :api do
    resources :todos, except: %i(edit new), defaults: { format: :json }
  end

  root to: 'static_pages#root'
end
