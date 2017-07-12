'use strict';

import Description from './description.model';
import config from '../../config/environment';

export function description() {
  return Description.getDescriptionFromHomepage();
}
