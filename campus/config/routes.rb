Rails.application.routes.draw do
  resources :sections do
    collection do
        get 'search'
        get 'searchJSON'
    end
  end
  resources :courses do
    collection do
        get 'search'
        get 'searchJSON'
    end
  end
  resources :teachers do
    collection do
        get 'search'
        get 'searchJSON'
    end
  end
  resources :offices do
    collection do
        get 'search'
        get 'searchJSON'
    end
  end
  get "/articles", to: "articles#index"

end
