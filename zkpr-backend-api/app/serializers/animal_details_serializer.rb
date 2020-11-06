class AnimalDetailsSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image_url, :donations
end
