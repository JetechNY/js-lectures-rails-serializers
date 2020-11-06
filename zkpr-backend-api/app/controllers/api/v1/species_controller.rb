class Api::V1::SpeciesController < ApplicationController

  def index
    species = Species.all
    render json: species
  end

  def show
    species = Species.find(params[:id])
    render json: species
  end

end