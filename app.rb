require 'sinatra'

class App < Sinatra::Base
  set :haml, :format => :html5, :layout => :layout

  get '/' do
    @projects = {
      coffee:    { gh: 'rymo4/coffeenated', url: 'http://coffeenated.herokuapp.com', name: 'Coffeenated' },
      paperless: { url: 'http://www.paperlesspost.com', name: 'Paperless Post' },
      bayesian:  { name: 'Bayesian Average', gh: 'rymo4/bayesian_average' },
      civ_net:   { name: 'The Civic Network' },
      research:  { name: 'Research Match', url: 'http://www.researchmat.ch' },
      linkful:   { name: 'Linkful', gh: 'rymo4/linkful', url: 'http://www.linkful.herokuapp.com' }
    }
    haml :index
  end

  helpers do
    def partial page, options={}
       haml page.to_sym, options.merge!(:layout => false)
    end

    def github info
      "http://www.github.com/#{info[:gh]}"
    end
  end

  run! if app_file == $0

end
