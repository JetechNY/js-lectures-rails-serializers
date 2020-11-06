class Animal < ApplicationRecord
  belongs_to :species

  # def species_name
  #   self.species.name
  # end

  # def diet
  #   self.species.diet
  # end
end
