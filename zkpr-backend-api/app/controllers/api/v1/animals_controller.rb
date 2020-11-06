class Api::V1::AnimalsController < ApplicationController

  def index
    # N + 1
    animals = Animal.all.includes(:species)
    render json: animals
  end

end