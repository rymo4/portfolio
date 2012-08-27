require 'sinatra'

class App < Sinatra::Base
  set :haml, :format => :html5, :layout => :layout

  get '/' do
    haml :index
  end

  run! if app_file == $0

end
