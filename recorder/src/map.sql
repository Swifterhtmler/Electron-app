const (
   Table   = "`user`"
   Columns = "`id`, `nickname`, `bio`, `created_at`"
)

type User struct {
   ID        int64
   Nickname  string
   Bio       sql.NullString
   CreatedAt time.Time
}

// PtrFields is a convenience method for use with sql#Row.Scan.
func (u *User) PtrFields() []any {
   return []any{&u.ID, &u.Nickname, &u.Bio, &u.CreatedAt}
}