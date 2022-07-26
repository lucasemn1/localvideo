import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'episodies'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.smallint('number')
      table
        .smallint('previous_episode_id')
        .unsigned()
        .references(`${this.tableName}.id`)
        .onDelete('SET NULL')
      table.integer('serie_id').notNullable().unsigned().references('series.id').onDelete('CASCADE')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
