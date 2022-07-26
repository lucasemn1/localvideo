import { BaseModel, BelongsTo, belongsTo, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Serie from './Serie'

export default class Episode extends BaseModel {
  @column()
  public number: number

  @hasOne(() => Episode)
  public nextEpisode: HasOne<typeof Episode>

  @belongsTo(() => Episode)
  public previusEpisode: BelongsTo<typeof Episode>

  @belongsTo(() => Serie)
  public serie: BelongsTo<typeof Serie>
}
