"""uuid filename to drawing model

Revision ID: 76c908dc786a
Revises: 660187d870e0
Create Date: 2021-04-14 10:08:01.763956

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '76c908dc786a'
down_revision = '660187d870e0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('drawings', sa.Column('filename', sa.String(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('drawings', 'filename')
    # ### end Alembic commands ###
