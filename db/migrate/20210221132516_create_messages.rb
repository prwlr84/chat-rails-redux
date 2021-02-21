class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.string :user_id
      t.string :channel_id
      t.text :content

      t.timestamps
    end
  end
end
