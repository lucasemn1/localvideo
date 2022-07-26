import { column } from '@ioc:Adonis/Lucid/Orm'
import Video from './Video'

export default class Movie extends Video {
  @column()
  public isPrivate: boolean

  @column()
  public thumbailPath: string
}
