"""unique filename and optional galId drawing model

Revision ID: 326ef9db583d
Revises: 76c908dc786a
Create Date: 2021-04-14 10:12:22.222116

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '326ef9db583d'
down_revision = '76c908dc786a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('drawings', 'gallery_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.create_unique_constraint(None, 'drawings', ['filename'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'drawings', type_='unique')
    op.alter_column('drawings', 'gallery_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    # ### end Alembic commands ###
