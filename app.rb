require 'sinatra'

configure :production do
    require 'newrelic_rpm'
end

class App < Sinatra::Base
  set :haml, :format => :html5, :layout => :layout

  get '/' do
    @play = {
      pixel:     { gh: 'rymo4/ColorSpace', url: 'http://pixeladventure.herokuapp.com/', name: 'Pixel Adventure' },
      gunslinger:{ gh: 'rymo4/gunslinger', name: 'Gunslinger' },
      n_puzzle:  { gh: 'rymo4/N_puzzle', name: 'N Puzzle' },
      coffee:    { gh: 'rymo4/coffeenated', url: 'http://coffeenated.herokuapp.com', name: 'Coffeenated' },
      bayesian:  { name: 'Bayesian Average', gh: 'rymo4/bayesian_average', rubygems: 'https://rubygems.org/gems/bayesian_average' },
      linkful:   { name: 'Linkful', gh: 'rymo4/linkful', url: 'http://linkful.herokuapp.com' }
    }
    @work = {
      sprawler:  { name: 'Sprawler (alpha)', url: 'http://sprawler.com' },
      bitly:     { name: 'Bitly', url: 'http://bit.ly' },
      paperless: { name: 'Paperless Post', url: 'http://www.paperlesspost.com' },
      research:  { name: 'Research Match', url: 'http://www.researchmat.ch' }
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
