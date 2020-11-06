class CreateAnimals < ActiveRecord::Migration[6.0]
  def change
    create_table :animals do |t|
      t.string :name
      t.string :description
      t.string :image_url
      t.integer :donations
      t.belongs_to :species, null: false, foreign_key: true

      t.timestamps
    end
  end
end
