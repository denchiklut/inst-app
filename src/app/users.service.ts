import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable()
export class UsersService {

  size = 8;

  constructor(private httpClient: HttpClient) {}

  setSize(s) {
    this.size = s;
  }

  getUsers() {
    return this.httpClient.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=' + this.size + '&nat=gb%27')
      .pipe(map(respose => respose as any[] || []))
      .pipe(map(respose => respose['results']))
      .pipe(map(users => {
        return users.map(u => {
          return {
            name: u.name.first + ' ' + u.name.last,
            img: u.picture.large,
            geo: u.location.city + ' ' + u.location.state + ' ' + u.location.street
          };
        });
      }));

  }


}
