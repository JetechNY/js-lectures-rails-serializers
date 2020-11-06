class AnimalSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image_url, :donations, :species_name, :diet

  def species_name
    # self.object is the thing being serialized (the animal)
    self.object.species.name
  end

  def diet
    self.object.species.diet
  end
  # belongs_to :species
end
