import { DateTime } from 'luxon'
import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  ManyToMany,
  manyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import Serie from './Serie'
import Movie from './Movie'
import Avatar from './Avatar'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public username: string

  @column()
  public active: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Avatar)
  public avatar: BelongsTo<typeof Avatar>

  @manyToMany(() => Serie, {
    pivotTable: 'watched_series',
    pivotColumns: ['isCompletelyWatched', 'lastWatchedEpisode'],
  })
  public watchedSeries: ManyToMany<typeof Serie>

  @manyToMany(() => Movie, { pivotTable: 'watched_movies', pivotColumns: ['isCompletelyWatched'] })
  public watchedMovies: ManyToMany<typeof Movie>
}
