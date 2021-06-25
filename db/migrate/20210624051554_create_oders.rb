class CreateOders < ActiveRecord::Migration[6.0]
  def change
    create_table :oders do |t|
      t.integer :total_price, null: false, default: 0

      t.timestamps
    end
  end
end
