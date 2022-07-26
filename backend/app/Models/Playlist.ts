import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Serie from './Serie'

export default class Playlist extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @manyToMany(() => Serie, {
    pivotTable: 'playlists_series',
    pivotTimestamps: true,
    pivotForeignKey: 'serie_id',
  })
  public series: ManyToMany<typeof Serie>

  @manyToMany(() => Serie, {
    pivotTable: 'playlists_movies',
    pivotTimestamps: true,
    pivotForeignKey: 'movie_id',
  })
  public movies: ManyToMany<typeof Serie>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
